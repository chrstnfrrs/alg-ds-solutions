import Chance from 'chance';

import { serialize } from './serialize';

const chance = new Chance();

// eslint-disable-next-line prefer-template
const getStringActual = (input: string): string => '"' + input + '"';
const getNumberActual = (input: number): string => `${input}`;
const getArrayActual = (input: (string | number)[]): string => {
  const arrAsString = input
    .map((value: number | string) =>
      typeof value === 'string'
        ? getStringActual(value as string)
        : getNumberActual(value as number),
    )
    .join(', ') as string;

  return `[${arrAsString}]`;
};

const createRandomArr = () => {
  return chance
    .n(() => null, chance.d4() + 1)
    .map((_, index) => (index % 2 === 0 ? chance.natural() : chance.string()));
};

describe('Given a serialize function', () => {
  let result: string, actual: string;

  describe('When the serialize function is given a number', () => {
    beforeEach(() => {
      const input = chance.natural({
        max: 99,
        min: 1,
      });

      actual = getNumberActual(input);
      result = serialize(input) as string;
    });
    test('should return the number as string', () => {
      expect(result).toStrictEqual(actual);
    });
  });
  describe('When the serialize function is given a string', () => {
    beforeEach(() => {
      const input = chance.string();

      actual = getStringActual(input);
      result = serialize(input) as string;
    });
    test('should return the string', () => {
      expect(result).toStrictEqual(actual);
    });
  });
  describe('When the serialize function is given an array', () => {
    beforeEach(() => {
      const stringArr = chance.n(chance.string, chance.d4());
      const numberArr = chance.n(chance.natural, chance.d4());
      const arrArr = chance.n(createRandomArr, chance.d6());
      const input = chance.shuffle([...stringArr, ...numberArr, ...arrArr]);

      result = serialize(input);

      const actualIndices = input.reduce((acc: string, value, index) => {
        let currentValue: string | number | (string | number)[];

        if (Array.isArray(value)) {
          currentValue = getArrayActual(value as (string | number)[]);
        } else if (typeof value === 'string') {
          currentValue = getStringActual(value as string);
        } else {
          currentValue = getNumberActual(value);
        }

        if (acc.length) {
          return (Object.keys(input).length - 1 === index
            ? `${acc} ${currentValue}`
            : `${acc} ${currentValue},`) as string;
        }

        return Object.keys(input).length - 1 === index
          ? currentValue
          : (`${currentValue},` as string);
      }, '');

      actual = `[${actualIndices}]`;
    });
    test('should return the string', () => {
      expect(result).toStrictEqual(actual);
    });
  });
  describe('When the serialize function is given an object', () => {
    beforeEach(() => {
      const stringKey = chance.string();
      const numberKey = chance.string();
      const arrKey = chance.string();
      const stringValue = chance.string();
      const numberValue = chance.natural();
      const arrValue = createRandomArr();
      const values = [
        { [stringKey]: stringValue },
        { [numberKey]: numberValue },
        { [arrKey]: arrValue },
      ];

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const input = values.reduce((acc, value) => {
        return {
          ...value,
          ...acc,
        };
      }, {});

      result = serialize(input) as string;

      const actualKeys = Object.keys(input).reduce((acc, key, index) => {
        const currentInput = input[key];
        let currentValue: string | number;

        if (Array.isArray(currentInput)) {
          currentValue = getArrayActual(currentInput);
        } else if (typeof currentInput === 'string') {
          currentValue = getStringActual(currentInput);
        } else if (typeof currentInput === 'number') {
          currentValue = getNumberActual(currentInput);
        } else {
          currentValue = getStringActual(currentInput);
        }

        if (acc.length) {
          return Object.keys(input).length - 1 === index
            ? `${acc} "${key}": ${currentValue}`
            : `${acc} "${key}": ${currentValue},`;
        }

        return Object.keys(input).length - 1 === index
          ? `"${key}": ${currentValue}`
          : `"${key}": ${currentValue},`;
      }, '');

      actual = `{${actualKeys}}`;
    });
    test('should return the string', () => {
      expect(result).toStrictEqual(actual);
    });
  });
});
