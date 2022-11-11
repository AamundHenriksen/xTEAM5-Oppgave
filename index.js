// Variabler til HTML ID
let faceExpression = document.getElementById("face-expression")
let playText = document.getElementById("play-text")
let feedText = document.getElementById("feed-text")
let sleepText = document.getElementById('sleep-text')

// Variabler til status
let playStatus
let feedStatus
let sleepStatus
let averageMood
let isAlive = false

// Variabler til intervaller
let playInterval
let feedInterval
let sleepInterval

// Funksjon som returnerer tifeldig tall mellom to parameter
function randomNumber(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1))
}

// Funksjon som øker variabelen med 1 dersom variabelen er mindre enn 100
function play() {
    if (playStatus < 100 && isAlive === true) {
        playStatus++
        playText.innerHTML = `${playStatus}%`
    }
}

function feed() {
    if (feedStatus < 100 && isAlive === true) {
        feedStatus++
        feedText.innerHTML = `${feedStatus}%`
    }
}

function sleep() {
    if (sleepStatus < 100 && isAlive === true) {
        sleepStatus++
        sleepText.innerHTML = `${sleepStatus}%`
    }
}

// Funksjon som setter status verdiene og starter intervallene
function startOrReset() {
    if (isAlive === false) {
        playStatus = randomNumber(50, 80)
        sleepStatus = randomNumber(50, 80)
        feedStatus = randomNumber(50, 80)
    
        playInterval = setInterval(decreasePlay, 1000)
        feedInterval  = setInterval(decreaseFeed, 1000)
        sleepInterval = setInterval(decreaseSleep, 1000)
        isAlive = true
    }
}

// Funksjon som reduserer variabelen med 1 og stopper om variabelen når 0
function decreasePlay() {
    playStatus--

    if (playStatus < 1) {
        playStatus = 0
    }
    console.log(`playStatus percent: ${playStatus}`)
    playText.innerHTML = `${playStatus}%`
    setAverageMood()
}

function decreaseFeed() {
    feedStatus--

    if (feedStatus < 1) {
        feedStatus = 0
    }
    console.log(`feedStaus percent: ${feedStatus}`)
    feedText.innerHTML = `${feedStatus}%`
    setAverageMood()
}

function decreaseSleep() {
    sleepStatus--

    if (sleepStatus < 1) {
        sleepStatus = 0
    }
    console.log(`sleepStatus percent: ${sleepStatus}`)
    sleepText.innerHTML = `${sleepStatus}%`
    setAverageMood() 
}

// Funksjon som regner ut gjennomsnittet av de tre statusene og lagrer det i en variabel
function setAverageMood() {
    averageMood = (playStatus + feedStatus + sleepStatus) / 3
    console.log(`Average percent: ${averageMood}`)
    setFacialExpression()
}

// Funksjon som setter ansiktsutrykk ut ifra averageMood sin verdi
function setFacialExpression() {
    if (averageMood < 100) {
        faceExpression.innerHTML = "😀"

    } if (averageMood < 50) {
        faceExpression.innerHTML = "😐"

    } if (averageMood < 25) {
        faceExpression.innerHTML = "😭"

    } if (averageMood < 10) {
        faceExpression.innerHTML = "👻"
        clearInterval(playInterval)
        clearInterval(feedInterval)
        clearInterval(sleepInterval)
        isAlive = false
    }
}