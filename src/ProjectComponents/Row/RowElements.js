import styled from 'styled-components'

export const Tile = styled.div`
  width: 75px;
  height: 75px;
  margin: 2px;
  border: solid;
  border-width: 3px;
  border-radius: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #8ed860;

  /* background: ${({ isWall }) => (isWall ? '#C19A6B' : '#7ec850' )}; */
  font-size: ${({ isWall, isChar }) => (isWall || isChar ? '4rem' : '1rem' )};
  color: ${({ isWall, isChar }) => (isWall ? '#a17A4B' : (isChar ? '#d00' : '#222'))};
  border-color: #5ea830;

  @media screen and (max-width: 700px) {
    width: 55px;
    height: 55px;
    border-width: 2px;
  }

  @media screen and (max-width: 650px) {
    width: 45px;
    height: 45px;
    border-width: 1px;
    margin: 1px;
  }
`
