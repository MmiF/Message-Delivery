const btn = document.getElementById('btn');
const msgIn = document.querySelector('#messageIn');
const msgOut = document.querySelector('#messageOut');
const closeAlertBtn = document.querySelector('.empty-input button')
const modalContainer = document.querySelector('.modal-container')



function sendMsg() {
    let inputVal = msgIn.value;

    if (!inputVal) {
        openAlert()
    }

    msgOut.textContent = inputVal;

    msgIn.value = ''
    msgIn.focus();
}


function openAlert() {
    modalContainer.classList.add('active-alert')
}

function closeAlert() {
    modalContainer.classList.remove('active-alert')
}



btn.addEventListener('click', sendMsg);
closeAlertBtn.addEventListener('click', closeAlert);
msgIn.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        sendMsg();
    }
})