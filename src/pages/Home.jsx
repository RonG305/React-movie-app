import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Partners from "../components/Partners";



const Home = () => {
    return (
        <div className=" bg-slate-950 text-white">
            
             <Hero />
            <div className='flex flex-col text-white items-center justify-center h-[40vh] text-center px-3'>
                <h1 className=' font-extrabold md:text-5xl text-3xl mb-3 '>Enjoy your <span className=" text-red-400">favourite movies and series</span>  with videoMate</h1>
                <p>Every movie, series and podcasts at the comfort of your hand</p>
            </div> 

            <Partners />

            
                <div className=" bg-slate-800  ">
                    <div className=" md:flex items-center justify-between md:w-[80%] m-auto px-3 md:h-[80vh] py-12 gap-8">
                        <div className=" md:w-1/2 mb-5">
                            <img src="../../public/Thumbnail.png" alt="Thumbnail" className=" rounded-xl " />
                        </div>
                        <div className=" leading-6">
                            <h2 className=" font-bold text-2xl mb-4">We provide the highest resolution videos</h2>
                            <p>Watch movies from your TV screen or laptop with best resolution you will ever find</p>
                        </div>
                    </div>
                </div>
           


                <div>
                    <div className=" md:flex flex-row-reverse items-center justify-between md:w-[80%] m-auto px-3 md:h-[80vh] py-12 gap-8">
                        <div className=" md:w-1/2 mb-5">
                            <img src="../../public/moviephone.png" alt="Thumbnail" className=" rounded-xl" />
                        </div>
                        <div className=" leading-6">
                            <h2 className=" font-bold text-2xl mb-4">Dont have big screen ? Use your phone</h2>
                            <p>Use your phone to view tour favourite movie, series or real time football</p>
                        </div>
                    </div>
                </div>


                <div className=" bg-slate-800  ">
                    <div className=" md:flex items-center justify-between md:w-[80%] m-auto px-3 md:h-[80vh] py-12 gap-8">
                        <div className=" md:w-1/2 mb-5">
                            <img src="../../public/soccer-players-action-professional-stadium.jpg" alt="Thumbnail" className=" rounded-xl" />
                        </div>
                        <div className=" leading-6">
                            <h2 className=" font-bold text-2xl mb-4">Want to watch real tme footal ? Look any futher</h2>
                            <p>Get your favourite games from our application which gives you best experience with high resolution pixels</p>
                        </div>
                    </div>
                </div>


        <Footer />
        </div>
    )
}

export default Home