function addlike(indexBook) {
  let addlike = books[indexBook];
  if (addlike.liked) {
    addlike.likes--;
    addlike.liked = false;
  } else {
    addlike.likes++;
    addlike.liked = true;
  }
}
