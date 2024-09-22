
    function getBookHtml (indexBook) {
        return /*html*/`
    <div id="book">
            <h2 class="titles">${books[indexBook].name}</h2>
        <div class="book_picture">
            <img class="mini-book" src="./img/book-1294406_1280.png">
        </div>
        <div class="price_and_like">
              <div class="price">
                ${books[indexBook].price.toFixed(2).replace(".", ",")}€
              </div>
              
            <div class="like">
                ${books[indexBook].likes}
                <img class="heart-liked" id="liked" src="./img/heart-liked.png"> 
                <img  class="heart d-none" src="./img/heart-unliked.png">
            </div>
        </div>
         <div class="book-info">
         
                <span>Author :
                ${books[indexBook].author} <br>
                Erscheinungsjahr : ${books[indexBook].publishedYear} <br>
                Genre : ${books[indexBook].genre}
            </span>
         </div>
         <div id="comment-section">
         <h2>Kommentare</h2>
         <div>
           <input id="input-comment" type="text">
           <button class="btn">Speichern</button>
       </div>
       <div >

       </div>
            </div>
    </div>
        `
    }

 
   /* function getCommentTemplate(indexComment,indexBook) {
        
        return
        
    }
    */
 
 
 /* return html`
<div id="book">
        <h2 class="titles">${books[indexBook].name}</h2>
    <div class="book_picture">
        <img class="mini-book" src="./img/book-1294406_1280.png">
    </div>
    <div class="price_and_like">
          <div class="price">
            ${books[indexBook].price.toFixed(2).replace(".", ",")}€
          </div>
          
        <div class="like">
            ${books[indexBook].likes}
            <img class="heart-liked" id="liked" src="./img/heart-liked.png"> 
            <img  class="heart d-none" src="./img/heart-unliked.png">
        </div>
    </div>
    <div class="book-info">
     <div>
        <span>Author :
        ${books[indexBook].author} <br>
        Erscheinungsjahr : ${books[indexBook].publishedYear} <br>
        Genre : ${books[indexBook].genre}
        </span>
     </div>
    </div>
    <div>
    <h2>Kommentare</h2>
     <div id="createComments(${indexBook})">
        <span>${getComment(commentIndex)}</span>
        <!-- <span>${books[indexBook].comments[commentIndex]}
    </span>  -->
    <div class="btn-comment">
        <input id="comment-input" type="text">
        <button  onclick="saveData()">Speichern</button>
    </div>
     </div>
     </div>
</div>
    `
}
*/
