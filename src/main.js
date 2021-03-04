import getMessage from "./scripts/api/api";

const mainEl = document.getElementById('root');
const loaderElBase = document.querySelector('.loader');

const pseudoPopinEl = document.querySelector('.pseudo_popin');
const pseudoPopinFormEl = pseudoPopinEl.querySelector('.pseudo_popin_container');
const pseudoPopinInputEl = pseudoPopinEl.querySelector('#pseudo')

const sendMessageFormEl = document.querySelector('.messageForm');
const sendMessageInputEl = sendMessageFormEl.querySelector('#message')

let userName;
let timer = 0;
let timerInterval;

const scrollToBottom = () => document.body.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});

const addLoader = () => {
    const loaderEl = loaderElBase.cloneNode(true);
    loaderEl.classList.add('bot');
    loaderEl.classList.remove('hidden');
    mainEl.appendChild(loaderEl);
    scrollToBottom();
}

const removeLoader = () => {
    const loaders = [...document.querySelectorAll('.loader.bot')];
    loaders.map(loader => loader.remove());
}

const deliverMessage = (messageHolderList = [], index = 0) => {

    removeLoader();

    if(index >= messageHolderList.length) return;

    mainEl.appendChild(messageHolderList[index].element);
    scrollToBottom();

    if(++index >= messageHolderList.length) return;

    addLoader();

    setTimeout(() => deliverMessage(messageHolderList, index), messageHolderList[index].timeDelayMs);
}

const startInterval = () => {
    timerInterval = setInterval(() => {
        timer++;

        if(timer > 25) {
            sendMessage(userName, 'unevachedansunpresquimangedesfourmisarcenciel');
            timer = 0;
        }
    }, 1000);
}

const sendMessage = (userName, userMessage) => {
    getMessage(userName, userMessage)
        .then(message => {

            if(message.userMessageHolder.message !== ''
                && message.userMessageHolder.message !== 'unevachedansunpresquimangedesfourmisarcenciel') {

                mainEl.appendChild(message.userMessageHolder?.element);
                scrollToBottom();
            }

            if(message.botMessageHolderList.length > 0) {
                addLoader();
                timer = 0;
                setTimeout(() => {
                    timer = 0;
                    deliverMessage(message.botMessageHolderList, 0);
                }, message.botMessageHolderList[0].timeDelayMs);
            }
        });
}

pseudoPopinFormEl.addEventListener('submit', (e) => {
    e.preventDefault();

    if(pseudoPopinInputEl.value === '') pseudoPopinInputEl.value = "Pseudo Obligatoire";
    else {
        userName = pseudoPopinInputEl.value;
        pseudoPopinEl.remove();

        startInterval();
    }
})

sendMessageFormEl.addEventListener('submit', (e) => {
    e.preventDefault();

    if(sendMessageInputEl.value === '') return;

    timer = 0;

    const userMessage = sendMessageInputEl.value;

    sendMessageInputEl.value = '';

    sendMessage(userName, userMessage);
})








