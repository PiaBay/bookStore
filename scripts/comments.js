let user = [];
let comment = [];

function saveDataUser() {
  let inputRef = document.getElementById("input-name");
  if (inputRef.value != "") {
    user.push(inputRef.value);
  }

  saveToLocalStorage();
  renderComments();
  inputRef.value = "";
}
function saveDataComment() {
  let commentRef = document.getElementById("input-comment");
  if (commentRef.value != "") {
    comment.push(commentRef.value);
  }

  saveToLocalStorage();
  renderComments();
  commentRef.value = "";
}

function saveToLocalStorage() {
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("comment", JSON.stringify(comment));
}

function getFromLocalStorage() {
  user = JSON.parse(localStorage.getItem("user"));
  if (user == 0) {
    user = user;
  }
  comment = JSON.parse(localStorage.getItem(comment));
  if (comment == 0) {
    comment = comment;
  }
}
