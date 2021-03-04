import fs from 'fs'
const pendu1 = fs.readFileSync(__dirname + "/../../images/pendu1.png")
const pendu2 = fs.readFileSync(__dirname + "/../../images/pendu2.png")
const pendu3 = fs.readFileSync(__dirname + "/../../images/pendu3.png")
const pendu4 = fs.readFileSync(__dirname + "/../../images/pendu4.png")
const pendu5 = fs.readFileSync(__dirname + "/../../images/pendu5.png")
const pendu6 = fs.readFileSync(__dirname + "/../../images/pendu6.png")
const pendu7 = fs.readFileSync(__dirname + "/../../images/pendu7.png")
export default class SpeakBubble {
    name = '';

    message = '';

    isBot = true;

    speakBubbleEl = null;

    constructor(name = 'Mr Bot', message = '', isBot = true) {
        this.name = name;
        this.message = message;
        this.isBot = isBot;

        if (this.message.match(/jpeg$|jpg$|png$|gif$/)) {
            this.speakBubbleEl = document.createElement('img')
            if (this.message.match(/pendu/)) {
                let pendu = this.getImage(this.message)
                this.speakBubbleEl.src = `data:image/jpg;base64,${pendu.toString('base64')}`
                this.speakBubbleEl.style.width = "12vw"
            } else {
                this.speakBubbleEl.setAttribute("src", this.message)
            }
            this.speakBubbleEl.style.maxWidth = "60vw"

        } else {
            this.speakBubbleEl = document.createElement('p');
            this.speakBubbleEl.innerText = this.message.replace('&quot;', '"');
        }
        this.speakBubbleEl.classList.add('speakBubble_container', 'box-triangle', this.isBot ? 'bot' : 'person');



        const nameEl = document.createElement('p');
        nameEl.classList.add('userName');
        nameEl.innerText = `${name  } :`;
        if (this.message.match(/jpeg$|jpg$|png$|gif$/)) {
            nameEl.prepend(this.speakBubbleEl)
        } else {
            this.speakBubbleEl.prepend(nameEl)
        }
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
    getEl = () => this.speakBubbleEl;

}