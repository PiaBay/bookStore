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
  saveToLocalStorage();
  renderBooks();
}

function saveToLocalStorage() {
  localStorage.setItem("books", JSON.stringify(books));
}
