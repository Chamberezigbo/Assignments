function find() {
 var book = document.getElementById("book").value;
  if(book == ""){
    alert("please enter avaid book discription")
  }else{
    fetch("https://www.googleapis.com/books/v1/volumes?q="+book)
    .then(res => {
      return res.json();
    })
    .then(result => {
      var html ="<p>";
      for (let index = 0; index < result.items.length; index++) {
        volun = result.items[index].volumeInfo;
        title = volun.title
        description = volun.description
        author = volun.authors
        html += "Book title: "+title +"<br><hr> Book Description: "+ description+ "<br><hr> Authors: "
        + author + "<hr>"
      }
      html+= "</p>";
      document.getElementById("Books").innerHTML = html;
    })
    .catch(error => {
      console.log(error)
    })
  } 
}