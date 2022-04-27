import React from 'react'
import { Tile } from './RowElements'
import { GiWoodenFence, GiChicken } from 'react-icons/gi'
// GiWoodenFence, MdFence
// GiChicken, GiCat, GiFeline, GiCow, GiFox, GiMinotaur

const Row = ({ rowCol, data, wallData, position, playerTurn }) => {

  return (
    <div>
      <div style={{ display: 'flex' }}>
        {data.map((value, j) => {
          const isWall = wallData[j]
          const isChar = position[0] === rowCol && position[1] === j
          return <Tile key={j} id={j} data-col={rowCol} isChar={isChar} isWall={isWall} onClick={() => playerTurn(rowCol, j)}>
            {isChar ? <GiChicken /> : (value < 1000  ? value : '')}
            {isWall && <GiWoodenFence />}
            </Tile>
        })}
      </div>
    </div>
  )
}

export default Row