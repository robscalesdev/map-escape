import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeContainer = styled.div`
  margin: 2%;
`

export const ExplanationContainer = styled.div``

export const ExplanationH1 = styled.h1``

export const ExplanationP = styled.p``

export const GameContainer = styled.div``

export const GameCard = styled.div`
  margin: 2% 0;
  padding: 2%;

  border: solid;
  border-width: 2px;
  border-radius: 5px;
  border-color: #777;

  cursor: pointer;
`

export const CardLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:visited {
    color: black;
  }
`

export const CardTitle = styled.h2``

export const CardImage = styled.img``

export const CardDesc = styled.p``