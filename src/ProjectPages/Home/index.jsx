import React from 'react'
// import { NeutralButton } from 'shared/components/StyledElements'
import { 
    HomeContainer,
    ExplanationContainer,
    GameContainer,
    GameCard, 
    ExplanationH1,
    ExplanationP,
    CardTitle,
    CardImage,
    CardDesc
} from './HomeElements'

const Home = () => {
  return (
    <HomeContainer>
        <ExplanationContainer>
            <ExplanationH1>How To Play</ExplanationH1>
            <ExplanationP>The evil dot is trying to escape, your goal is to place walls to keep him from getting away.</ExplanationP>
            <ExplanationP>Each turn you will be able to place one wall, then he will get to move one tile. Can you capture him before it's too late?</ExplanationP>
        </ExplanationContainer>
        <GameContainer>
            <GameCard>
                <CardTitle>Surround</CardTitle>
                <CardImage></CardImage>
                <CardDesc>Don't let the evil dot reach the edges.</CardDesc>
            </GameCard>
            <GameCard>
                <CardTitle>Trap</CardTitle>
                <CardImage></CardImage>
                <CardDesc>Place walls until the dot has no moves remaining.</CardDesc>
            </GameCard>
            <GameCard>
                <CardTitle>About</CardTitle>
                <CardImage></CardImage>
                <CardDesc>Learn more about the logic the dot uses to select where to go.</CardDesc>
            </GameCard>
        </GameContainer>
    </HomeContainer>
  )
}

export default Home