import { useCallback, useEffect, useState } from 'react'
import words from "./wordsList.json";
import './App.css'
import { HangmanDrawing } from './HangmanDrawing';
import { HangmanWord } from './HangmanWord';
import { Keyboard } from './Keyboard';

function App() {
     const getWord= () => {
    return words[Math.floor(Math.random() * words.length - 1)]
   }
  const [wordToGuess, setWordToGuess] = useState<string>(
    getWord()
    );
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

    const incorrectLetters = guessedLetters.filter(
        letter => !wordToGuess.includes(letter)
    ); 
    const isLoser = incorrectLetters.length  >= 6;
    const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter))

    const addGuessedLetter = useCallback((letter: string) =>{
        if(guessedLetters.includes(letter)) return

        setGuessedLetters(currentLetters => [...currentLetters, letter])
    }, [guessedLetters, isWinner, isLoser]);

  
    useEffect(() => {
        const handler = (e: KeyboardEvent) =>{
            const key = e.key; 
            if (!key.match(/^[a-z]$/)) return 

            e.preventDefault()
            addGuessedLetter(key); 
        }
        document.addEventListener("keypress", handler)

        return () => {
            document.removeEventListener("keypress", handler)
        }
    }, [])

    useEffect(() => {
        const handler = (e: KeyboardEvent) =>{
            const key = e.key; 
            if (key!== "Enter") return 
            e.preventDefault()
            setGuessedLetters([])
            setWordToGuess(getWord())
        }
        document.addEventListener("keypress", handler)

        return () => {
            document.removeEventListener("keypress", handler)
        }
    }, [])

  return (
    <div className="App" style={{
        display: "flex", 
        flexDirection: "column", 
        maxWidth: "800px", 
        gap: "2rem", 
        margin: "0 auto", 
        alignItems: 'center'
    }}>
      
        <div style={{textAlign: "center", fontSize: "2rem"}}>
            {isWinner && "Winner! Refresh to try again"}
            {isLoser && "Nice Try! Referesh to try again"}
            </div>
        {wordToGuess}
        <HangmanDrawing numberOfGuesses={incorrectLetters.length}/>
        <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} reveal={isLoser}/>
        <div style={{alignSelf: "stretch"}}>
            <Keyboard 
            disabled={isWinner || isLoser}
            addGuessedLetter={addGuessedLetter} 
            activeLetters={guessedLetters.filter(letter => 
             wordToGuess.includes(letter))}
            inactiveLetters={incorrectLetters}
         />    
        </div>
           
    </div>
  )
}

export default App
