import styled from 'styled-components'

export const BoardContainer = styled.div`
  padding-top: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const BoardWrapper = styled.div``

export const BoardHeader = styled.div`
  width: 550px;

  @media screen and (max-width: 700px) {
    width: 430px;
  }

  @media screen and (max-width: 650px) {
    width: 350px;
  }
`

export const TitleWrapper = styled.div`
  display: flex; 
  justify-content: space-between;
  align-items: baseline;
`

export const Score = styled.h3``

export const NewGameWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 2%;
`

export const NewGameButton = styled.button`
  margin-left: 10%;
  font-size: 1.5rem;
`

export const BoardBorder = styled.div``

export const Row = styled.div`
  display: flex;
`
