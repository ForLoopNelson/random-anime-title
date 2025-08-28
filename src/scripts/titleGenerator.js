
import { first, second, third, fourth, fifth } from "../scripts/words"

// how many words to remember for each position
const RECENT_LIMIT = 5 

// object to track recent words by category
const recentWords = {
  first: [],
  second: [],
  third: [],
  fourth: [],
  fifth: []
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}

function getRandomWord(array, recentList) {
  // Build a weighted pool: recent words appear less often
  const pool = []

  array.forEach(word => {
    const isRecent = recentList.includes(word)
    // Add the word multiple times depending on recency
    // Recent words get fewer "tickets"
    const weight = isRecent ? 1 : 3 // tweak these numbers
    for (let i = 0; i < weight; i++) {
      pool.push(word)
    }
  })

  const randomIndex = getRandomIndex(pool)
  const chosenWord = pool[randomIndex]

  // Update recents (just for tracking)
  recentList.push(chosenWord)
  if (recentList.length > RECENT_LIMIT) {
    recentList.shift()
  }

  return chosenWord
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
  const newFirstWord = getRandomWord(first, recentWords.first)
  const newSecondWord = getRandomWord(second, recentWords.second)
  const newThirdWord = getRandomWord(third, recentWords.third)
  const newFourthWord = getRandomWord(fourth, recentWords.fourth)
  const newFifthWord = getRandomWord(fifth, recentWords.fifth)

  const newWords = `${newFirstWord} ${newSecondWord} ${newThirdWord} ${newFourthWord} ${newFifthWord}`

  document.querySelector("#random").textContent = newWords
}
