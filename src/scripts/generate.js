import { first, second, third, fourth, fifth } from "../scripts/words"

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}

function getRandomWord(array) {
  const randomIndex = getRandomIndex(array)
  return array[randomIndex]
}

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("generate-title")

  button.addEventListener("click", handleButtonClick)

  button.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      handleButtonClick()
    }
  })

  function handleButtonClick() {
    generateNewWords()
  }
})

function generateNewWords() {
  const newFirstWord = getRandomWord(first)
  const newSecondWord = getRandomWord(second)
  const newThirdWord = getRandomWord(third)
  const newFourthWord = getRandomWord(fourth)
  const newFifthWord = getRandomWord(fifth)
  const newWords = `${newFirstWord} ${newSecondWord} ${newThirdWord} ${newFourthWord} ${newFifthWord}`

  document.querySelector("#random").textContent = newWords
}
