import VIDEO_DATA from "./FakeData.js";
import Generator from "./Generator.js";

const playerVideo = document.querySelector(".video-js")
const playerContainer = document.querySelector(".player__container")
const similarsSection = document.querySelector(".similars__content")
const videoTitle = document.querySelector(".player__title")
const videoPage = new Generator(VIDEO_DATA, similarsSection, videoTitle)

let playerContainerHeight = null
let videoId = null

const options = {
    controls: true,
    autoplay: false,
    preload: 'auto',
    fluid: true
}

const player = videojs(playerVideo, options)

const videoPageSetUp = () => {
    videoPage.generateItemsInContainer()

    videoId = videoPage.getVideoIdFromUrl()

    const videoItem = videoPage.findItemById(VIDEO_DATA, parseInt(videoId))
    videoPage.setVideoTitle(videoItem.name)
    player.src({ type: 'video/mp4', src: `../videos/${videoItem.name}.${videoItem.type}` })
}

window.addEventListener('load', videoPageSetUp)

player.ready(function () {
    //player appears in the corner
    window.addEventListener('scroll', () => {
        playerContainerHeight = playerContainer.clientHeight
        if (window.scrollY > playerContainerHeight) {
            playerContainer.classList.add("player__container--fixed")
            playerContainer.classList.remove("player__container")

        } else {
            playerContainer.classList.add("player__container")
            playerContainer.classList.remove("player__container--fixed")
        }
    })
})