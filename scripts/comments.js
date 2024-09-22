










let comments = [];

function saveData() {
    let inputRef = document.getElementById('comment-input');
    if (inputRef.value != "") {
        comments.push(inputRef.value);
    }
    renderBooks();
    getComment();
    inputRef.value = "";
}