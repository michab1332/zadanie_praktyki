function Generator(data = [], containerForItems = null, videoTitle = null) {
    this.data = data
    this.containerForItems = containerForItems
    this.videoTitle = videoTitle
    this.self = {}

    const templateSimilarVideoItem = (id, imgUrl, desc) => {
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

        div.addEventListener("click", () => this.self.changeVideo(id))

        return div;
    }

    const addItemToContainer = (item) => {
        this.containerForItems.appendChild(item)
    }

    const clearUrl = () => {
        let url = window.location.href
        return url.split("?")[0]
    }

    this.self.getVideoIdFromUrl = () => {
        const urlParams = new URLSearchParams(window.location.search)
        return urlParams.get("video_id")
    }

    this.self.changeVideo = (id) => {
        const videoId = this.self.getVideoIdFromUrl()
        videoId != id ? window.location.replace(clearUrl() + `?video_id=${id}`) : null
    }

    this.self.generateItemsInContainer = () => {
        this.data.forEach(item => {
            const article = templateSimilarVideoItem(item.id, item.imgUrl, item.desc)
            addItemToContainer(article)
        })
    }

    this.self.setVideoTitle = (videoTitle) => {
        this.videoTitle.innerText = videoTitle
    }

    this.self.findItemById = (data, id) => {
        let itemId = null
        for (let i = 0; i < data.length; i++) {
            itemId = data[i].id
            if (itemId === id) return data[i]
        }
        return console.error(`error, item with this id(${id}) does not exist`)
    }

    return this.self;
}

export default Generator;