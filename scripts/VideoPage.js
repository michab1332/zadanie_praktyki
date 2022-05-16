function VideoPage(data = [], containerForItems = null) {
    this.data = data
    this.containerForItems = containerForItems
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

    const addItemToContainer = (item) => {
        this.containerForItems.appendChild(item)
    }

    self.generateSimilarVideos = () => {
        this.data.forEach(item => {
            const article = templateSimilarVideoItem(item.imgUrl, item.desc)
            addItemToContainer(article)
        })
    }

    return self;
}

export default VideoPage;