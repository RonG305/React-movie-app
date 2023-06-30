import {FiHeart} from "react-icons/fi"

const MovieShowcase = () => {
    return (
        <div className=" ">
                <div className=" md:h-72 w-full bg-gradient-to-r from-slate-950 to-slate-700 md:flex gap-12 px-10 py-8 items-center">
                    <div className=" md:w-72 h-auto">
                        <img src="../../public/Mockup.png" alt="" />
                    </div>
                    <div>
                        <h1 className=" font-extrabold text-4xl from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent my-5">Enjoy best movies and series of your choice</h1>
                        <p>Watch now <span className=" text-red-700"><FiHeart /></span></p>
                    </div>
                   
                </div>
                
            </div>
    )
}

export default MovieShowcase