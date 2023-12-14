function shakeMagic8Ball() {

const question = prompt (`Ask the Magic 8 Ball a Question`);

if (question === null){
    document.getElementById(`response-text`).innerText = `Ask a question!`
    document.getElementById(`response-text`).classList = `text-danger`
    document.getElementById(`response-image`).src = `#BAD/BROKENIMAGE` // FIX THIS IMG

}

}