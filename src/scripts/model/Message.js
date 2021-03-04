import SpeakBubble from './SpeakBubble';

class MessageHolder {
    userName;
    message;
    element;
    timeDelayMs;

    constructor(userName, message, element, timeDelayMs = 0) {
        this.userName = userName;
        this.message = message;
        this.element = element;
        this.timeDelayMs = timeDelayMs;
    }
}

export default class Message {

  id = null;

  userName = '';

  botName = '';


  userMessageHolder = {};

  botMessageHolderList = [];

  option = '';

  constructor({ id = null,
                  botName = 'Nono',
                  userName = '',
                  userMessage = '',
                  botMessage = [],
                  option = '' } = {}) {

    this.id = id;
    this.userName = userName;
    this.botName = botName;
    this.option = option;

    if(userMessage !== '') {
        this.userMessageHolder = this.getMessageHolder(userName, userMessage, false, false);
    }

    if(botMessage.length > 0) {
        this.botMessageHolderList = botMessage.map(mess => this.getMessageHolder(botName, mess, true, option === "shifumi"));
    }
  }

  getRandomMSSleepTime = (message = '') => (Math.random() + 1) * 1000 + (message.length ?  message.length * 20 : 0);

  getMessageHolder = (userName, message, isBot, isShifumi) => {

      const speakBB = new SpeakBubble(userName, message, isBot);
      const el = speakBB.getEl();
      const timeDelay = isShifumi ? 0 : this.getRandomMSSleepTime(message);

      return new MessageHolder(userName, message, el, timeDelay);
  }

}
