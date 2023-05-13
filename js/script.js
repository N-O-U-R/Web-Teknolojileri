$(document).ready(function() {
    var apiKey = "90d7e97a"; 
    var movies = ["The Godfather", "Dune", "The Dark Knight", "Breaking Bad", "Game of Thrones", "better call saul", "Mr Robot", "Dark", "interstellar", "Joker", "Berserk", "Lord of the rings", "inception", "Memento", "Se7en", "The Prestige","The Revenant", "Blade Runner 2049", "Fight Club", "1917", "Zodiac", "Vinland Saga", "The Matrix", "Shutter island", "Mad max fury road", "Dunkirk", "Django unchained", "The Batman"]; 
    for (var i = 0; i < movies.length; i++) {
      $.ajax({
        url: "http://www.omdbapi.com/",
        data: {
          t: movies[i],
          apikey: apiKey
        },
        success: function(data) {
          var poster = data.Poster;
          var title = data.Title;
          $("#movies").append("<div><img src='" + poster + "' alt='" + title + "'><p>" + title + "</p></div>");
        }
      });
    }
  });
  