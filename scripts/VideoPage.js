function VideoPage(data = [], containerForItems = null, videoTitle = null) {
    this.data = data
    this.containerForItems = containerForItems
    this.videoTitle = videoTitle
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

    self.setVideoTitle = (videoTitle) => {
        this.videoTitle.innerText = videoTitle
    }

    self.findItemById = (data, id) => {
        let itemId = null
        for (let i = 0; i < data.length; i++) {
            itemId = data[i].id
            if (itemId === id) return data[i]
        }
        return console.error(`error, item with this id(${id}) does not exist`)
    }

    return self;
}

export default VideoPage;