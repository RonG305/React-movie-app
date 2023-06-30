import MovieShowcase from "./MovieShowcase"
import SearchBar from "./SearchBar"
import { useEffect, useState } from "react"
import Footer from "./Footer"


const Movies = () => {

    const [movies, setMovies] = useState({})
    const [searchTerm, setSearchTerm] = useState('')
    const API_URL = `http://www.omdbapi.com/?s=${searchTerm}&season=1&apikey=2391b27b`
   

    const fetchMovieData = async() => {
        try {
            const response = await fetch(API_URL)
            const data = await response.json()
            console.log(data.Search)
            if (searchTerm) {
                setMovies(data.Search)
            } else {
                setMovies([])
            }
          
            
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchMovieData()
    }, [searchTerm])
   
    return (
        <>
            {/* <Sidebar /> */}
            <MovieShowcase />
            <div className=" lg:w-[80%] m-auto">

                
                <div className=" flex items-center justify-center my-5">
                    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                </div>
                
                <h1 className=" font-bold my-4 text-2xl">Check out your favourite movies</h1>
                {movies?.length ? (
                     <div className=" md:grid grid-cols-4 flex  items-center gap-4 flex-shrink-0 flex-wrap mb-8 ">
                     {movies.map((movie, index) => (
                     <div key={index} className=" w-full md:w-64 md:h-96 bg-slate-800 rounded-xl relative opacity-80">
                             <img src={movie.Poster} alt="" className=" rounded-xl w-full h-full " />
                             <div className=" absolute bottom-0 left-0 bg-slate-900 p-4 rounded w-full" >
                                 <h3 className=" font-bold text-orange-700">{movie.Title}</h3>
                                 <p>Year: {movie.Year}</p>
                                 <p>{ movie.Genre}</p>
                             </div>
                            
                      </div>
                     ))}
             </div>
                ) : (
                        <div className=" w-full h-96 rounded-xl bg-slate-800 mb-8 ">
                        <img src="../../public/dragon fire.jpg" alt="" className=" w-full h-full rounded-xl" />
                        </div>
                )}
           
            
            </div>
            <Footer />
           
        </>
    )
}

export default Movies