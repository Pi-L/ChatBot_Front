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
            this.speakBubbleEl.setAttribute("src", this.message)
            this.speakBubbleEl.style.maxWidth = "2000px"

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

    getEl = () => this.speakBubbleEl;

}