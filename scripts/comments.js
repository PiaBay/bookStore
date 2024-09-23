let user = [];
let comment = [];

function saveDataUser() {
  let inputRef = document.getElementById("input-name");
  if (localStorage.getItem("user") !== null) {
    user.push(inputRef.value);
    console.log("geht nichzt");
  }
  //if (inputRef.value != "") {

  //}

  //saveToLocalStorage();
  renderComments();
  inputRef.value = "";
}
function saveDataComment() {
  let commentRef = document.getElementById("input-comment");

  if (commentRef.value != "") {
    comment.push(commentRef.value);
  }

  //saveToLocalStorage();
  renderComments();
  commentRef.value = "";
}

/*function saveToLocalStorage() {
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
}*/
