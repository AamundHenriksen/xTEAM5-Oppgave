// Variabler
let faceExpression = document.getElementById("face-expression")
let playText = document.getElementById("play-text")
let feedText = document.getElementById("feed-text")
let sleepText = document.getElementById('sleep-text')
let playStatus
let feedStatus
let sleepStatus
let totalStatus
let averageMood

// Intervaller
let playInterval
let feedInterval
let sleepInterval

function randomNumber(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1))
}

function play() {
    if (playStatus < 100) {
        playStatus++
        playText.innerHTML = `${playStatus}%`
    }
}

function feed() {
    if (feedStatus < 100) {
        feedStatus++
        feedText.innerHTML = `${feedStatus}%`
    }
}

function sleep() {
    if (sleepStatus < 100) {
        sleepStatus++
        sleepText.innerHTML = `${sleepStatus}%`
    }
}

function reset() {
    playStatus = randomNumber(50, 80)
    sleepStatus = randomNumber(50, 80)
    feedStatus = randomNumber(50, 80)

    playInterval = setInterval(decreasePlay, 20)
    feedInterval  = setInterval(decreaseFeed, 20)
    sleepInterval = setInterval(decreaseSleep, 20)
}

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

function setAverageMood() {
    averageMood = (playStatus + feedStatus + sleepStatus) / 3
    console.log(`Average percent: ${averageMood}`)
    setFacialExpression()
}

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
        play = null
        feed = null
        sleep = null
    }
}








