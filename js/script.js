console.log("It's working!")


function handleGetData(event){
  event.preventDefault();

  //Load in the value of the search textbox
  const searchText = $("#search").val()
                $.ajax({
                    url: `https://api.themoviedb.org/3/search/movie?api_key=9813870ae074d390419314b3cbc61171&query=${searchText}`
                    
                })
                .then(
                    (data) => {
                        console.log(data.genres);
                        $("#genre").text(data.genres[1].name);
                        $("#title").text(data.title);
                        $("#tagline").text(data.tagline);
                        $("#year").text(data.release_date);
                        $("#overview").text(data.overview);
                        $("#user-rating").text(data.vote_average);
                        // $("#poster").attr("src",  data.poster_path)
                        
                    },
                    (error) => {
                        console.log("bad request: ", error)
                      }
                    )
                }
                $('form').on("submit", handleGetData)