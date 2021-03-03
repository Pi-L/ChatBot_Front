import SpeakBubble from './SpeakBubble';

export default class Message {

  id = null;

  userName = '';

  userMessage = '';

  botMessage = '';

  option = '';

  userMessageEl = '';

  botMessageEl = '';

  constructor({ id = null, userName = '', userMessage = '', botMessage = '', option = '' } = {}) {

    this.id = id;
    this.userName = userName;
    this.userMessage = userMessage;
    this.botMessage = botMessage;
    this.option = option;

    const speakBBUser = new SpeakBubble(userName, userMessage, false);
    const speakBBBot = new SpeakBubble('Mr bot', botMessage, true);
    this.userMessageEl = speakBBUser.getEl();
    this.botMessageEl = speakBBBot.getEl();
  }

}
