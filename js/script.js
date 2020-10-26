console.log(`It's working!`)

/*----- constants -----*/
$.ajax({
    url:'https://api.themoviedb.org/3/movie/425001-the-war-with-grandpa?api_key=9813870ae074d390419314b3cbc61171&language=en-US'
  }).then(
    (data) => {
     console.log(data.genres);
    },
    (error) => {
     console.log('bad request', error);
    }
  );

/*----- app's state (variables) -----*/

/*----- cached element references -----*/

/*----- event listeners -----*/

/*----- functions -----*/