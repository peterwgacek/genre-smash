console.log("It's working!")
const key = '9813870ae074d390419314b3cbc61171'
const baseUrl = 'https://api.themoviedb.org/3'

$.ajax({
    url: `${baseUrl}/genre/movie/list?api_key=${key}&language=en-US&`
})
.then (
    (data) => {
        // result need to insert options into a html select field
        // when suer selects an option and clikcs smash
        // take id and pass it into the ajax call
        const options = data.genres
    }
)
/
function handleGetData(event){
  event.preventDefault();
 
  console.log(genres)

  //Load in the value of the search textbox
  const searchText = $("#search").val()
  const q = encodeURI(`?query=${searchText}&api_key=${key}&language=en-US`)
                $.ajax({
                    url: `${baseUrl}/search/movie${q}`
                    
                })
                .then(
                    (data) => {
                        if(Boolean(data) && data.total_results > 0){
                        const index = Math.floor(Math.random() * Math.floor(data.results.length - 1));
                        const movie = data.results[index]
                        console.log('movie', movie);
                        } else{
                            alert('No results')
                        }
                        // $("#genre").text(data.genres[1].name);
                        // $("#title").text(data.title);
                        // $("#tagline").text(data.tagline);
                        // $("#year").text(data.release_date);
                        // $("#overview").text(data.overview);
                        // $("#user-rating").text(data.vote_average);
                        // // $("#poster").attr("src",  data.poster_path)
                            
                    },
                    (error) => {
                        console.log("bad request: ", error)
                      }
                    )
                }
                $('form').on("submit", handleGetData)