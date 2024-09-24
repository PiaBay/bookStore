function addComments(indexBook) {
  let commentInputRef = document.getElementById("input-comment" + indexBook);
  let nameInputRef = document.getElementById("input-name" + indexBook);
  let commentInput = commentInputRef.value;
  let nameInput = nameInputRef.value;

  if (commentInput !== "" && nameInput !== "") {
    let newComment = {
      name: nameInput,
      comment: commentInput,
    };

    books[indexBook].comments.push(newComment);
  }

  commentInputRef.value = "";
  nameInputRef.value = "";

  renderBooks();
}

/*function saveDataUser() {
  let inputRef = document.getElementById("input-name");
  {
    user.push(inputRef.value);
  }
  if (inputRef.value != "") {
  }

  saveToLocalStorage();
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
*/
