function Generator(data = [], containerForItems = null, videoTitle = null) {
    this.data = data
    this.containerForItems = containerForItems
    this.videoTitle = videoTitle
    this.self = {}

    const templateSimilarVideoItem = (id, imgUrl, desc, noDesc) => {
        const a = document.createElement('a')
        a.href = changeVideoUrl(id)

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
        p.innerText = noDesc ? "" : desc

        figure.appendChild(img)
        div.appendChild(figure)
        div.appendChild(p)
        a.appendChild(div)

        return a;
    }

    const addItemToContainer = (item) => {
        this.containerForItems.appendChild(item)
    }

    const changeVideoUrl = (id) => {
        return `${document.location.origin}/tvtorun/pages/video.html?video_id=${id}`
    }

    this.self.getVideoIdFromUrl = () => {
        const urlParams = new URLSearchParams(window.location.search)
        return urlParams.get("video_id")
    }

    this.self.generateItemsInContainer = (noDesc = false) => {
        this.data.forEach(item => {
            const article = templateSimilarVideoItem(item.id, item.imgUrl, item.desc, noDesc)
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