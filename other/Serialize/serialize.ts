type Serialize = (input: any) => string;

const serialize: Serialize = (input) => {
  // array
  if (Array.isArray(input)) {
    const serializedArray = input
      .map((item: any) => {
        return serialize(item);
      })
      .join(", ");

    return `[${serializedArray}]`;
  }

  // object
  if (typeof input === "object") {
    const serializedObject = Object.keys(input)
      .map((key: any) => {
        return `"${key}": ${serialize(input[key])}`;
      })
      .join(", ");

    return `{${serializedObject}}`;
  }

  // number
  if (typeof input === "number") {
    return `${input}`;
  }

  // string
  return `"${input}"`;
};

export { serialize };
