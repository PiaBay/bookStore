function getBookHtml(indexBook) {
  let heartClass = books[indexBook].liked ? "heart_filled" : "heart_empty";
  return /*html*/ `
    <div id="book">
            <h2 class="titles">${books[indexBook].name}</h2>
        <div class="book_picture">
            <img class="mini-book" src="./img/book-1294406_1280.png">
        </div>
        <div class="price_and_like">
              <div class="price">
                ${books[indexBook].price.toFixed(2).replace(".", ",")}€
              </div>
              
            <div>
                <div class="heart-liked">${books[indexBook].likes}</div>
                <div id="liked_${indexBook}" class="heart ${heartClass}" onclick="addlike(${indexBook})">
                    <img src="./img/heart-liked.png" alt="">
                </div>
            </div>
        </div>
         <div class="book-info">
         
                <span>Author :
                ${books[indexBook].author} <br>
                Erscheinungsjahr : ${books[indexBook].publishedYear} <br>
                Genre : ${books[indexBook].genre}
            </span>
            </div>
        <h3>Kommentare:</h3>
            <div id="commentsForBook${indexBook}" class="comment-section">
            <div class="input-field">
                <input id="input-name" type="text" placeholder="User-name">
                <input class="input-comment" type="text" placeholder="dein Kommentar...">
                <button onclick="saveDataUser();saveDataComment(); "class="btn">Speichern</button>
            </div>
        </div>`;
}

function getCommentTemplate(indexComment, indexBook) {
  return /*html*/ `
            <div>
                ${books[indexBook].comments[indexComment].name} sagt dazu: <br>
                ${books[indexBook].comments[indexComment].comment}
            </div>

        `;
}
