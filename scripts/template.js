function getBookHtml (i, commentIndex) {
    return /*html*/`
<div id="book">
        <h2 class="titles">${books[i].name}</h2>
    <div class="book_picture">
        <img class="mini-book" src="./img/book-1294406_1280.png">
    </div>
    <div class="price_and_like">
          <div class="price">
            ${books[i].price.toFixed(2).replace(".", ",")}€
          </div>
          
        <div class="like">
            ${books[i].likes}
            <img class="heart-liked" id="liked" src="./img/heart-liked.png"> 
            <img  class="heart d-none" src="./img/heart-unliked.png">
        </div>
    </div>
    <div class="book-info">
     <div>
        <span>Author :
        ${books[i].author} <br>
        Erscheinungsjahr : ${books[i].publishedYear} <br>
        Genre : ${books[i].genre}
        </span>
     </div>
    </div>
    <div>
    <h2>Kommentare</h2>
     <div id="createComments(${i})">
        <span>${books[i].comments[commentIndex]}
    </span> 
    <div class="btn-comment">
        <input id="comment-input" type="text">
        <button  onclick="saveData()">Speichern</button>
    </div>

     </div>
     </div>
</div>
    `
}

 