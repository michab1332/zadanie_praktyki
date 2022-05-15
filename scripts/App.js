const playerVideo = document.querySelector(".video-js")
const playerContainer = document.querySelector(".player__container")
let playerContainerHeight = null

const options = {
    controls: true,
    autoplay: false,
    preload: 'auto',
    fluid: true
}

const player = videojs(playerVideo, options)

player.ready(function () {
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

