const VideoPage = () => {
    const self = {}

    const templateSimilarVideoItem = (imgUrl, desc) => {
        const div = document.createElement('div')
        div.classList.add("articleElement--small")

        const figure = document.createElement('figure')
        figure.classList.add("articleElement__figure")

        const img = document.createElement('img')
        img.classList.add("articleElement__figure__img")
        img.src = imgUrl
        img.alt = "video"

        const p = document.createElement('p')
        p.classList.add("articleElement__desc")
        p.innerText = desc

        figure.appendChild(img)
        div.appendChild(figure)
        div.appendChild(p)

        return div;
    }

    self.generateSimilarVideos = () => {
        const item = templateSimilarVideoItem("url", "lorem")
        console.log(item)
    }

    return self;
}

export default VideoPage;

{/* <div class="articleElement--small">
    <figure class="articleElement__figure">
        <img src="" alt="" class="articleElement__figure__img">
    </figure>
    <p class="articleElement__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Nulla
    </p>
</div> */}