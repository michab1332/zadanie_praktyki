import VIDEO_DATA from "./FakeData.js";
import VideoPage from "./VideoPage.js";

const playerVideo = document.querySelector(".video-js")
const playerContainer = document.querySelector(".player__container")
const similarsSection = document.querySelector(".similars__content")
const videoTitle = document.querySelector(".player__title")
const videoPage = new VideoPage(VIDEO_DATA, similarsSection, videoTitle)

let playerContainerHeight = null
let windowLocationSearch = null
let videoId = null

const options = {
    controls: true,
    autoplay: false,
    preload: 'auto',
    fluid: true
}

const player = videojs(playerVideo, options)

window.addEventListener('load', () => {
    windowLocationSearch = window.location.search
    const urlParams = new URLSearchParams(windowLocationSearch)

    videoId = urlParams.get("video_id")

    videoPage.generateSimilarVideos()

    const videoItem = videoPage.findItemById(VIDEO_DATA, parseInt(videoId))
    videoPage.setVideoTitle(videoItem.name)
    player.src({ type: 'video/mp4', src: `../videos/${videoItem.name}.${videoItem.type}` })

})

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

