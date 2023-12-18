function shakeMagic8Ball() {
    const question = prompt('Ask the Magic 8-Ball a question:');
    if (question === null) {
        document.getElementById('response-text').innerText = 'Please ask a question!'
        document.getElementById('response-text').classList = 'text-danger'
        document.getElementById('response-image').src = '#BAD/BROKENIMAGE' //FIX THIS
        return
    }

    if (!question.trim()) {
        alert('Please enter a valid question!')
        return
    }

    const randomNumber = Math.floor(Math.random() * 8);
    let answer, image, color;

    switch (randomNumber) {
        case 0:
            answer = "Yes";
            image = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Thumbs_up_icon.svg/1877px-Thumbs_up_icon.svg.png" //change this!!;
            color = "text-success";
            break;
        case 1:
            answer = "No";
            image = "https://creazilla-store.fra1.digitaloceanspaces.com/emojis/57970/thumbs-down-emoji-clipart-xl.pngg" //change this!!;
            color = "text-danger";
            break;
        case 2:
            answer = "Ask again later";
            image = "https://www.teambonding.com/wp-content/uploads/2014/07/ticking-clock-frame-6-hi.png" //change this!!;
            color = "text-secondary";
            break;
        case 3:
            answer = "Maybe";
            image = "https://static-00.iconduck.com/assets.00/shrug-plain-emoji-2048x1343-b8dusqnf.png";//change this!!;
            color = "text-warning";
            break;
        case 4:
            answer = "Cannot predict now";
            image = "cannot-predict-image.jpg";//change this!!;
            color = "text-muted";
            break;
        case 5:
            answer = "Don't count on it";
            image = "dont-count-on-it-image.jpg";//change this!!;
            color = "text-danger";
            break;
        case 6:
            answer = "Most likely";
            image = "most-likely-image.jpg";//change this!!;
            color = "text-success";
            break;
        case 7:
            answer = "Outlook not so good";
            image = "outlook-not-good-image.jpg";//change this!!;
            color = "text-danger";
            break;
        default:
            break;
    }

const responseText = document.getElementById('response-text');
responseText.innerText = answer;
responseText.classList = `display-4 ${color}`;
document.getElementById('response-image').src = image;

}

