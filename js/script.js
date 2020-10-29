// Constants and State Variables (Data)

// Constant Data
const key = '9813870ae074d390419314b3cbc61171'
const baseUrl = 'https://api.themoviedb.org/3'
const imgUrl = 'https://image.tmdb.org/t/p/w500'

// Attached Event Listeners
$('form').on("submit", handleGetData)

// Functions
$.ajax({
        url: `${baseUrl}/genre/movie/list?api_key=${key}&language=en-US&`
    })
    .then(
        (data) => {
            if (Boolean(data) && (data.genres || []).length) {
                for (let i = 0; i < data.genres.length; i++) {
                    const genre = data.genres[i]
                    $('#genre').append(new Option(genre.name, genre.id))
                }
            }
        }
    )
    function handleGetData(event) {
        event.preventDefault()
      
        //Load in the value of the search textbox
        const searchText = $('#genre').val()
        console.log(searchText)
        const q = encodeURI(`?with_genres=${searchText}&api_key=${key}&language=en-US`)
        $.ajax({
          url: `${baseUrl}/discover/movie${q}`
        }).then(
          data => {
            if (Boolean(data) && data.total_results > 0) {
              const index = Math.floor(Math.random() * Math.floor(data.results.length - 1))
              const movie = data.results[index]
              $('#title').text(movie.title)
              $('#year').text(movie.release_date)
              $('#overview').text(movie.overview)
              $('#user-rating').text(movie.vote_average)
      
              // Use jQuery to grab the image node from the dom
              const imgNode = $('#poster_image')
              const imgpos =  `${imgUrl}${movie.poster_path}`
              // if we get a result (ie: it's already been added to the dom previously) just update the src
              if (imgNode.length) {
                imgNode.attr('src', imgpos)
              } else {
                // Else create the image and add it to the dom (next time it's clicked it will be there so it will just update the src attribute)
                // notice the ID here - this is what we're using the grab the element and do the check above
                const image = `<img id="poster_image" src=${imgpos} alt="poster"/>`
                $('#poster').append(image)
              }
            } else {
              alert('No results')
            }
          },
          error => {
            console.log('bad request: ', error)
          }
        )
      }