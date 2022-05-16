import VIDEO_DATA from "./FakeData.js";
import VideoPage from "./VideoPage.js";

const videoPage = VideoPage()
const playerVideo = document.querySelector(".video-js")
const playerContainer = document.querySelector(".player__container")

let playerContainerHeight = null
let windowLocationSearch = null
let videoName = null

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

    videoName = urlParams.get("video_name")
    player.src({ type: 'video/mp4', src: `../videos/${videoName}` })

    videoPage.generateSimilarVideos()

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

