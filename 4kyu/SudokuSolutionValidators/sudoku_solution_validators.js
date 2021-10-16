const getIndex = (x, y) => {
  if (y === 0) {
    return x+y
  } else if (y === 1) {
    return x+y+2
  } else {
    return x+y+4
  }
}

const checkRows = (board) => board.every((row) => new Set(row).size === row.length)

const checkSquares = (board) => {
  const makeShiftBoard = [[],[],[],[],[],[],[],[],[]]
  board.forEach((row, x) => {
    row.forEach((cell, y) => {
      const xBox = Math.floor(x /3)
      const yBox = Math.floor(y / 3)
      const index = getIndex(xBox, yBox)
      makeShiftBoard[index].push(cell)
    })
  })
  
  return checkRows(makeShiftBoard)
}

const checkColumns = (board) => {
  const rotatedBoard = [[],[],[],[],[],[],[],[],[]]
  board.forEach((row, index) => {
      row.forEach((cell) => {
        rotatedBoard[index].push(cell)
      })
  })
  return checkRows(rotatedBoard)
}

const validSolution = (board) => {
  const validRows = checkRows(board)
  const validColumns = checkColumns(board)
  const validSquares = checkSquares(board)
  return validRows && validColumns && validSquares
}
