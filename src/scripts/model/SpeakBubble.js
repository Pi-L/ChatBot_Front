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
            mainContentEl.setAttribute("src", this.message);
            mainContentEl.classList.add('image');

        } else {

            this.speakBubbleEl.classList.add('box-triangle');

            mainContentEl = document.createElement('p');

            mainContentEl.innerText = this.decodeHtml(message);
            mainContentEl.classList.add('text');
        }

        this.speakBubbleEl.append(mainContentEl);

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
