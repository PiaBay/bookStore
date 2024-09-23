let comment = [];
function addComments() {
  let commentInputRef = document.getElementById("input-comment");
  let commentInput = commentInputRef.value;
  comment.push(commentInput);
  renderComments(indexBook);
  commentInputRef.value = "";
}

function saveDataUser() {
  let inputRef = document.getElementById("input-name");
  {
    user.push(inputRef.value);
  }
  if (inputRef.value != "") {
  }

  saveToLocalStorage();
  renderComments(indexBook);
  inputRef.value = "";
}
function saveDataComment() {
  let commentRef = document.getElementById("input-comment");

  if (commentRef.value != "") {
    comment.push(commentRef.value);
  }

  saveToLocalStorage();
  renderComments(indexBook);
  commentRef.value = "";
}

function saveToLocalStorage() {
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("comment", JSON.stringify(comment));
}

function getFromLocalStorage() {
  user = JSON.parse(localStorage.getItem("user"));
  if (user == null) {
    user = user;
  }
  comment = JSON.parse(localStorage.getItem(comment));
  if (comment == null) {
    comment = comment;
  }
}
