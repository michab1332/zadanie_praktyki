const playerVideo = document.querySelector(".video-js")

const options = {
    controls: true,
    autoplay: false,
    preload: 'auto',
    fluid: true
}
const player = videojs(playerVideo, options)

player.ready(function () {
    console.log(this)
})