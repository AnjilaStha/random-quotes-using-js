function generate(){
    var quotes ={
"- Dalai Lama":"The purpose of our lives is to be happy",
"-Albert Einstein" : "If you want to live a happy life, tie it to a goal, not to people or things",

"- Babe Ruth" : "Never let the fear of striking out keep you from playing the game",

 "-Will Smith": '"Money and success don’t change people; they merely amplify what is already there."' ,

    }
    var authors = Object.keys(quotes); 
      var author =authors[Math.floor(Math.random()* authors.length)];
      var quote = quotes[author];
      document.getElementById("quote").innerHTML = quote;
      document.getElementById("author").innerHTML = author;
    }