const BASE_URL = 'https://moviesminidatabase.p.rapidapi.com/movie'


const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '0c0df0cb9dmshed0cbd632a1c2aap11b3a4jsn48df56d7d4b4',
    'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
  }
};



export const fetchAPI = async () => {
    const getMovieData = await fetch(`${BASE_URL}`, options)
    const data = await getMovieData.json()
}
