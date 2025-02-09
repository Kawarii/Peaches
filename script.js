const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Try again",
    "Try again c:",
    "Try again C:",
    "Try again >:(",
    "Try Again >:(.",
    "TRY AGAIN >:(",
    "TRY AAIGAIGIANG >:((((("
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
