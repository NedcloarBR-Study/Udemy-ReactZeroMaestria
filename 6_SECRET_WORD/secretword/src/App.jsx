import StartScreen from '../components/StartScreen'
import { useCallback, useEffect, useState } from 'react'
import { wordsList } from './data/words'
import './App.css'
import Game from '../components/Game'
import GameOver from '../components/GameOver'

const stages = [
  { id: 1, name: "start"},
  { id: 2, name: "game"},
  { id: 3, name: "end"},
]

const [pickedWord, setPickedWord] = useState("");
const [pickedCategory, setPickedCategory] = useState("");
const [pickedLetters, setPickedLetters] = useState([]);

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const pickWordAndCategory = () => {
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * categories.length)];
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    return { word, category };
  }

  const startGame = () => {
    const { word, category } = pickWordAndCategory();

    const wordLetters = word.split("").map((letter) => letter.toLowerCase());

    setPickedWord(word);
    setPickedCategory(category);
    setPickedLetters(wordLetters);

    setGameStage(stages[1].name);
  }

  const verifyLetter = () => {
    setGameStage(stages[2].name);
  }

  const retry = () => {
    setGameStage(stages[0].name);
  }

  return (
    <div className='App'>
      {gameStage === stages[0].name && <StartScreen startGame={startGame} />}
      {gameStage === stages[1].name && <Game verifyLetter={verifyLetter}/>}
      {gameStage === stages[2].name && <GameOver retry={retry}/>}
    </div>
  )
}

export default App
