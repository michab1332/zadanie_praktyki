import VIDEO_DATA from "./FakeData.js";
import Generator from "./Generator.js";

const dayTalkSection = document.querySelector(".dayTalk__content")
const homePage = new Generator(VIDEO_DATA, dayTalkSection)

window.addEventListener("load", () => {
    homePage.generateItemsInContainer(true)
})