import Row from 'ProjectComponents/Row'
import React, { useEffect, useState } from 'react'
import { 
    BoardContainer,
    BoardWrapper,
    BoardBorder,
    BoardHeader,
    TitleWrapper,
    Score,
    NewGameButton,
    NewGameWrapper
} from './BoardElements'

const Board = () => {

  const rows = 7
  const columns = 7

  // when we build the board, we'll append a row of walls each time we make a new row 
  const [turnNumber, setTurnNumber] = useState(0)
  const [winner, setWinner] = useState('')
  // eslint-disable-next-line
  const [difficulty, setDifficulty] = useState('easy')
  const [board, setBoard] = useState([])
  const [walls, setWalls] = useState([])
  const [seen] = useState([])
  const [position, setPosition] = useState([3, 3])
  const [path] = useState([])
  const [gameValid, setGameValid] = useState(true)

  useEffect(() => {
    resetBoard()
    resetWalls()
    resetPath()
  // eslint-disable-next-line
  }, [])

  const newGame = () => {
    resetBoard()
    resetWalls()
    resetPath()
    setPosition([3, 3])
    setWinner('')
    setGameValid(true)
    setTurnNumber(0)
  }

  const resetBoard = () => {
    // keeps adding new boards without this
    setBoard([])

    for (let i = 0; i < rows; i++) {
      setBoard(prev => [...prev, Array(columns).fill('')])
    }
  }

  const updateBoard = () => {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        board[i][j] = path[i][j]
      }
    }
  }

  const resetWalls = () => {
    for (let i = 0; i < rows; i++) {
      walls[i] = Array(columns).fill(false)
    }

    // easy
    if (difficulty === 'easy') {
      walls[0][1] = true
      walls[2][1] = true
      walls[4][0] = true
      walls[2][4] = true
      walls[0][3] = true
      walls[5][1] = true
      walls[5][4] = true
      walls[3][6] = true
      walls[6][6] = true
    } else if (difficulty === 'medium') {
      walls[0][1] = true
    } else {

    }
  }

  // runs at the end of each turn so the chicken can rebuild his shortest path algorithm
  const resetPath = () => {
    for (let i = 0; i < rows; i++) {
      path[i] = Array(columns).fill(1000)
      seen[i] = Array(columns).fill(false)
    }
  }

  const addWall = (row, col) => {
    walls[row][col] = true
  }

  // const bfs = () => {}

  const dfs = (x, y) => {
    
    // base cases

    // already in path
    if (seen[x][y]) {
      return 1000
    // is a wall
    } else if (walls[x][y]) {
      return 1000
    }
    // reached edge
    else if (x === 0 || x === rows - 1) {
      path[x][y] = 0
      return path[x][y]
    // reached edge
    } else if (y === 0 || y === columns - 1) {
      path[x][y] = 0
      return path[x][y]
    
    // recursive case
    } else {
      seen[x][y] = true

      const up = dfs(x, y + 1) + 1
      const down = dfs(x, y - 1) + 1
      const left = dfs(x - 1, y) + 1
      const right = dfs(x + 1, y) + 1

      seen[x][y] = false

      const min = Math.min(path[x][y], up, down, left, right)
      path[x][y] = min
      return min
    }
  }

  const playerTurn = (row, col) => {
    const x = position[0]
    const y = position[1]

    if (gameValid && !(row === x && col === y) && !walls[row][col]) {
      addWall(row, col)

      dfs(position[0], position[1])
  
      moveDot()
      updateBoard()
      resetPath()

      setTurnNumber(prev => prev + 1)
    }

    if (position[0] === 0 || position[0] === rows - 1 || position[1] === 0 || position[1] === columns - 1) {
      setWinner("COMPUTER")
      setGameValid(false)
    }
  }

  const moveDot = () => {
    const x = position[0]
    const y = position[1]

    const up = path[x - 1][y]
    const down = path[x + 1][y]
    const left = path[x][y + 1]
    const right = path[x][y - 1]

    const next = Math.min(up, left, down, right)

    if (up < 1000 && up === next) {
      position[0] = x - 1
      position[1] = y
    } else if (down < 1000 && down === next) {
      position[0] = x + 1
      position[1] = y
    } else if (left < 1000 && left === next) {
      position[0] = x
      position[1] = y + 1
    } else if (right < 1000 && right === next) {
      position[0] = x
      position[1] = y - 1
    } else {
      setWinner("YOU")
      setGameValid(false)
    }
  }

  return (
    <BoardContainer>
      <BoardWrapper>
        <BoardHeader>
          <TitleWrapper>
            <h1>Surround</h1>
            <h2>Turn {turnNumber}</h2>
          </TitleWrapper>

          {winner.length > 0 && <Score>Winner: {winner}</Score>}
          {winner.length > 0 && <NewGameWrapper><NewGameButton onClick={newGame}>New Game</NewGameButton></NewGameWrapper>}
        </BoardHeader>
        <BoardBorder>
          {board.map((data, i) => {
            return <Row key={i} rowCol={i} data={data} wallData={walls[i]} setWalls={setWalls} playerTurn={playerTurn} position={position}></Row>
          })}
        </BoardBorder>
      </BoardWrapper>
    </BoardContainer>
  )
}

export default Board