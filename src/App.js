import React, { useState } from "react"
import "./App.css"
import butcherPigImage from "./assets/butcherPig.jpeg"

const App = () => {
  // ACTION ITEM: to make the development process easier there are some preassigned words in the input field, when you are ready for your full user experience delete the test words passed to useState and pass an empty string
  const [userInput, setUserInput] = useState(
    ""
  )
  const [inputTranslated, setInputTranslated] = useState("")

  // ACTION ITEM: the "myPigLatinCodeHere" function is where you will put your logic to translate the sentence entered by the user into Pig Latin
  const myPigLatinCodeHere = () => {
    // NO MODIFICATION NEEDED: the variable "arrayOfUserInput" will contain the text input from the user split into an array of words
    const punctuation = /[.,?!]/g;
    const arrayOfUserInput = userInput.toLowerCase().replace(punctuation, "").split(" ")
    console.log("arrayOfUserInput:", arrayOfUserInput)

    // NO MODIFICATION NEEDED: now that we have an array of words, we can map over the array and look at each word
    const translatedWordsArray = arrayOfUserInput.map((eachWord) => {
      console.log("eachWord:", eachWord)

      // NO MODIFICATION NEEDED: this code will look at each word and identify the vowels
      const vowelsArray = eachWord.split("").filter((vowel) => {
        return (
          vowel === "a" ||
          vowel === "e" ||
          vowel === "i" ||
          vowel === "o" ||
          vowel === "u"
        )
      })
      console.log("vowelsArray:", vowelsArray)

      // ACTION ITEM: your Pig Latin logic goes here!
      
       

        if(vowelsArray[0] === eachWord.charAt(0)) {
        eachWord = eachWord + "way"
        return eachWord
        }

         if(vowelsArray[0] === eachWord.charAt(0)) {
            return null
        } else if (eachWord.slice(1, 3).includes("qu")) {
            eachWord = eachWord.slice(3) + eachWord.slice(0, 3) + "ay"
            return eachWord
        } else if (eachWord.slice(0, 2).includes("qu")) {
            eachWord = eachWord.slice(2) + eachWord.slice(0, 2) + "ay"
            return eachWord 
        }
          
        if( vowelsArray.length === 0 && eachWord.includes("y")){
         let yIndex = eachWord.indexOf("y")
         eachWord = eachWord.slice(yIndex) + eachWord.slice(0, yIndex) + "ay"
         return eachWord

        }

        let arr = []
        if (vowelsArray[0] === eachWord.charAt(0)) {
          return null
        } else if (eachWord.indexOf("a") !== -1) {
          let aIndex = eachWord.indexOf("a")
          arr.push(aIndex)
        } else if (eachWord.indexOf("e") !== -1) {
          let eIndex = eachWord.indexOf("e")
          arr.push(eIndex)
        } if (eachWord.indexOf("i") !== -1) {
          let iIndex = eachWord.indexOf("i")
          arr.push(iIndex)
        } if (eachWord.indexOf("o") !== -1) {
          let oIndex = eachWord.indexOf("o")
          arr.push(oIndex)
        } if (eachWord.indexOf("u") !== -1) {
          let uIndex = eachWord.indexOf("u")
          arr.push(uIndex)
        } else {
          return alert( `${eachWord} is not a word silly`)
        }

        let smallestIndex = 10
        for(let i = 0; i < arr.length; i++) {
          if(smallestIndex > arr[i]) {
            smallestIndex = arr[i]
          } console.log(smallestIndex);
          }
          eachWord = eachWord.slice(smallestIndex) + eachWord.slice(0, smallestIndex) + "ay"
         
          
        // ACTION ITEM: this return will be the output of your Pig Latin'd code
        let noPunctuation = eachWord.replace(punctuation, "")
        return noPunctuation
      })

    // NO MODIFICATION NEEDED: once the code has been modified it gets joined from an array back to a string
    const translatedWords = translatedWordsArray.join(" ")
    // console.log("translatedWords:", translatedWords)

    // NO MODIFICATION NEEDED: this will update the inputTranslated variable in state
    setInputTranslated(translatedWords)
  }

  // ACTION ITEM: this method restarts the game by setting the original state, when you are ready for your full user experience delete the test words in setUserInput and pass an empty string
  const restartGame = () => {
    setUserInput("")
    setInputTranslated("")
  }

  // NO MODIFICATION NEEDED: this method prevents React from refreshing the page unnecessarily
  const setUpPreventDefault = (e) => {
    e.preventDefault()
    myPigLatinCodeHere()
  }

  // NO MODIFICATION NEEDED: this method takes the value of the input and saves it in state
  const handleInput = (e) => {
    setUserInput(e.target.value)
  }

  return (
    <div className="page-container">
      <div className="body-container">
        <h1>Pig Latin Translator</h1>
        <img
          src={butcherPigImage}
          alt="drawing of pig with butcher cut names in pig latin"
          className="butcher-pig-image"
        />

        <div className="input-section">
          <h4>Enter phrase to be translated:</h4>
          <input
            type="text"
            className="user-input"
            onChange={handleInput}
            value={userInput}
          />
          <br />
          <button onClick={setUpPreventDefault}>Submit</button>
          <button onClick={restartGame}>Clear</button>
        </div>
        <p>{inputTranslated}</p>
      </div>
      <footer>&copy; 2024 | Coded by: Matt & Morgan</footer>
    </div>
  )
}

export default App
