import styles from "./Keyboard.module.css";
const KEYS = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
type KeyboardProps = {
    addGuessedLetter: (letter: string) => void, 
    activeLetters: string[], 
    inactiveLetters: string[], 
    disabled?: boolean
};

export const Keyboard = ({
    addGuessedLetter, activeLetters, inactiveLetters, disabled = false} :KeyboardProps) =>{

    
    return (
        <div style={{
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))", 
            gap: ".5rem"
            }}>
                {
                    KEYS.map((key, index) => {
                        const isActive = activeLetters.includes(key); 
                        const isInActive = inactiveLetters.includes(key)
                        return (
                            <button key={key} 
                            className={`${styles.btn} 
                             ${isActive? styles.active: "" } 
                             ${isInActive? styles.inactive: ""}
                            `} 
                            onClick={() => addGuessedLetter(key)}
                            disabled={isInActive || isActive || disabled}
                            >
                                {key}
                            </button>
                        )
                    })
                }
        </div>
    ); 
}