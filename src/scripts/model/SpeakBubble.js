import pendu1 from "url:../../images/pendu1.png";
import pendu2 from "url:../../images/pendu2.png";
import pendu3 from "url:../../images/pendu3.png";
import pendu4 from "url:../../images/pendu4.png";
import pendu5 from "url:../../images/pendu5.png";
import pendu6 from "url:../../images/pendu6.png";
import pendu7 from "url:../../images/pendu7.png";

export default class SpeakBubble {

    imageRegex = new RegExp(/.*\.(jpg|jpeg|png|gif|JPG).*/gm);

    name = '';

    message = '';

    isBot = true;

    speakBubbleEl = null;

    constructor(name = 'Mr Bot', message = '', isBot = true) {
        this.name = name;
        this.message = message;
        this.isBot = isBot;

        const isMessageImageLink = this.isImageLink(message);

        this.speakBubbleEl = document.createElement('article');
        this.speakBubbleEl.classList.add('speakBubble_container', this.isBot ? 'bot' : 'person');

        const nameEl = document.createElement('p');
        nameEl.classList.add('userName');
        nameEl.innerText = `${name} :`;
        this.speakBubbleEl.append(nameEl);

        let mainContentEl;

        if (isMessageImageLink) {
            mainContentEl = document.createElement('img');
            if (this.message.match(/pendu/)) {
                let pendu = this.getImage(this.message)

                if (pendu) {
                    mainContentEl.src = pendu;
                    mainContentEl.setAttribute("onload", "scrollToBottom()");
                    mainContentEl.style.width = "12vw"
                }
            } else {
                mainContentEl.setAttribute("src", this.message);
                mainContentEl.setAttribute("onload", "scrollToBottom()");
                mainContentEl.classList.add('image');
            }

        } else {

            this.speakBubbleEl.classList.add('box-triangle');

            mainContentEl = document.createElement('p');

            mainContentEl.innerText = this.decodeHtml(message);
            mainContentEl.classList.add('text');
        }

        this.speakBubbleEl.append(mainContentEl);

    }

    getImage = (msg) => {
        switch (msg) {
            case "pendu1.png":
                return pendu1
            case "pendu2.png":
                return pendu2
            case "pendu3.png":
                return pendu3
            case "pendu4.png":
                return pendu4
            case "pendu5.png":
                return pendu5
            case "pendu6.png":
                return pendu6
            case "pendu7.png":
                return pendu7
        }
    }

    isImageLink = (message) => this.imageRegex.test(message);

    getEl = () => this.speakBubbleEl;

    // https://stackoverflow.com/a/7394787
    decodeHtml = (html) => {
        const txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }

}
