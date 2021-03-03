import getMessage from "./scripts/api/api";

const mainEl = document.getElementById('root');

const pseudoPopinEl = document.querySelector('.pseudo_popin');
const pseudoPopinFormEl = pseudoPopinEl.querySelector('.pseudo_popin_container');
const pseudoPopinInputEl = pseudoPopinEl.querySelector('#pseudo')

const sendMessageFormEl = document.querySelector('.messageForm');
const sendMessageInputEl = sendMessageFormEl.querySelector('#message')

let userName;

const scrollToBottom = () => {
    document.body.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}

pseudoPopinFormEl.addEventListener('submit', (e) => {
    e.preventDefault();

    if(pseudoPopinInputEl.value === '') pseudoPopinInputEl.value = "Pseudo Obligatoire";
    else {
        userName = pseudoPopinInputEl.value;
        pseudoPopinEl.remove();
    }
})

sendMessageFormEl.addEventListener('submit', (e) => {
    e.preventDefault();

    if(sendMessageInputEl.value !== '') {
        const userMessage = sendMessageInputEl.value;

        sendMessageInputEl.value = '';

        getMessage(userName, userMessage)
            .then(message => {
                mainEl.appendChild(message.userMessageEl);
                scrollToBottom();
                setTimeout(() => {
                    mainEl.appendChild(message.botMessageEl);
                    scrollToBottom();
                },1000)
            });
    }
})







