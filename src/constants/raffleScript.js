const raffleScript = `

let names = []
let previousWinners = []
let namesGenerated = false
let selectingNames = false

function init() {
  let textArea
  while (!textArea) {
    textArea = document.getElementById("name-input")
  }
  textArea.value = nameString
}

function runGenerator() {
  const button = document.getElementById("button")
  if (selectingNames) {
    return
  } else if (!namesGenerated) {
    generateNames()
  } else if (button.innerHTML === "Select") {
    selectName()
  } else {
    reset()
  }
}

function generateNames() {
  parseNames()
  displayNames()
  namesGenerated = true
}

function parseNames() {
  const textArea = document.getElementById("name-input")
  const nameText = textArea.value
  textArea.parentElement.removeChild(textArea)
  const rawNames = nameText
    .split("\\n")
    .map(name => name.trim())
    .filter(name => name.length !== 0)
  rawNames.forEach(name =>
    names.indexOf(name) === -1 ? names.push(name) : null
  )
}

function displayNames() {
  const nameContainer = document.getElementById("name-container")
  const fontSize = getFontSize()
  let nameHTML = ""
  names.forEach((name, i) => {
    nameHTML += '<button class="name btn btn-primary" id="' + name + '" disabled style="font-size:' + fontSize + 'px">' + name + '</button>'
  })
  nameContainer.innerHTML = nameHTML
  setButtonText("Select")
}

function selectName() {
  selectingNames = true
  const remainingNames = [...names]
  reset()
  removePreviousWinners(remainingNames)
  randomlyChooseWinner(remainingNames)
  declareWinner(remainingNames[0])
}

function reset() {
  if (previousWinners.length) {
    const bodyHTML = document.getElementById("app-container")
    bodyHTML.style["background-image"] = "none"
    names.forEach(name => {
      const nameHTML = document.getElementById(name)
      nameHTML.parentElement.removeChild(nameHTML)
    })
    displayNames()
  }
}

function removePreviousWinners(remainingNames) {
  previousWinners.forEach(prevWinner => {
    remainingNames.splice(remainingNames.indexOf(prevWinner), 1)
    removeName(prevWinner, remainingNames.length)
  })
}

function randomlyChooseWinner(remainingNames) {
  while (remainingNames.length > 1) {
    const randomNumber = getRandomInt(remainingNames.length)
    const name = remainingNames.splice(randomNumber, 1)[0]
    removeName(name, remainingNames.length)
  }
}

function removeName(name, remainingNamesLength) {
  const nameHTML = document.getElementById(name)
  setTimeout(() => {
    if (nameHTML) {
      nameHTML.style.opacity = "0"
    }
  }, calculateTimeout(remainingNamesLength))
}

function declareWinner(winner) {
  setTimeout(() => {
    emphasizeWinner(winner)
    setButtonText("Reset")
    previousWinners.push(winner)
    selectingNames = false
  }, calculateTimeout(0.75))
}

function emphasizeWinner(winner) {
  const winnerHTML = document.getElementById(winner)
  const bodyHTML = document.getElementById("app-container")
  const offsetWidth =
    (window.innerWidth / 2 -
      winnerHTML.offsetWidth / 2 -
      winnerHTML.offsetLeft) /
    2
  const offsetHeight =
    (window.innerHeight / 2 -
      winnerHTML.offsetHeight / 2 -
      winnerHTML.offsetTop) /
    2
  winnerHTML.classList.remove("btn-primary")
  winnerHTML.classList.add("btn-success")
  winnerHTML.style.opacity = "1"
  winnerHTML.style.transform = 'scale(1.5) translate(' + offsetWidth + 'px, ' + offsetHeight + 'px)'
  bodyHTML.style["background-image"] =
    "url(https://media.giphy.com/media/120ErahsQyf1q8/giphy.gif)"
}

function getFontSize() {
  if (names.length < 51) {
    return 32
  } else if (names.length < 101) {
    return 22
  } else if (names.length < 126) {
    return 20
  } else if (names.length < 151) {
    return 16
  } else {
    return 12
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

function calculateTimeout(remainingNamesLength) {
  var offset = (70 / (names.length + 6)) * 1000
  return (70 / (remainingNamesLength + 6)) * 1000 - offset
}

function setButtonText(text) {
  const button = document.getElementById("button")
  button.innerHTML = text
} 

const nameString = '\\nErnest Hemingway\\nWilliam Shakespeare\\nJ.R.R Tolkien\\nJohn Steinbeck\\nJ.K. Rowling\\nStephen King\\nEdgar Allen Poe\\nEmily Dickinson\\nGeorge Orwell\\nF. Scott Fitzgerald\\nMark Twain\\nJane Austen\\nHarper Lee\\nGeorge Eliot\\nEmily Bronte\\nWalt Whitman\\nWilliam Butler Yeats\\nWilliam Faulkner\\nCharles Dickens\\nRobert Frost\\nAdam Zapel\\nBiff Wellington\\nCharity Case\\nDon Key\\nEarl E. Bird\\nHazel Nutt\\nJack Pott\\nJo King\\nMatt Tress\\nMike Stand\\nMona Lott\\nOrson Carte\\nRay Gunn\\nSonny Day\\nWarren Peace\\nEmma Stone\\nSophia Vaughn\\nIsabella Wilson\\nCharlotte S Web\\nNoah S Ark\\nLiam Schlicter\\nWilliam Watkins\\nMason Nichols\\nJames Potter\\nHenry T. Cote\\nStephen J. Johnson\\nLisa R. Redfern\\nBetty D. Green\\nBenjamin Tower'

init()
`

export default raffleScript
