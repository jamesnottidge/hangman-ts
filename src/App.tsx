import { useState } from 'react'
import words from "./wordsList.json";
import './App.css'
import { HangmanDrawing } from './HangmanDrawing';

function App() {
  const [wordToGuess, setWordToGuess] = useState<String>(
    (() => words[Math.floor(Math.random() * words.length - 1)])
    )


  return (
    <div className="App" style={{
        display: "flex", 
        flexDirection: "column", 
        maxWidth: "800px", 
        gap: "2rem", 
        margin: "0 auto", 
        alignItems: 'center'
    }}>
      
        <div style={{textAlign: "center", fontSize: "2rem"}}>Lose Win</div>
        {wordToGuess}
        <HangmanDrawing />

        
       
    </div>
  )
}

export default App
