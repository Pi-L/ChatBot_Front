export default class SpeakBubble {

  name = '';

  message = '';

  isBot = true;

  speakBubbleEl = null;

  constructor(name = 'Mr Bot', message = '', isBot = true) {
        this.name = name;
        this.message = message;
        this.isBot = isBot;

        this.speakBubbleEl = document.createElement('p');
        this.speakBubbleEl.classList.add('speakBubble_container', 'box-triangle', this.isBot ? 'bot' : 'person');
        this.speakBubbleEl.textContent = this.message;

        const nameEl = document.createElement('p');
        nameEl.classList.add('userName');
        nameEl.textContent = `${name  } :`;
        this.speakBubbleEl.prepend(nameEl);
  }

  getEl = () => this.speakBubbleEl;

}
