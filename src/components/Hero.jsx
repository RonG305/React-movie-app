import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Hero = () => {
    return (
        <Splide className=' w-full opacity-80 relative'
            options={{
                height: '80vh',
                slide: true
            }}
        >
       
                <SplideSlide>
                 
                    <img src="../../public/dragon fire.jpg" alt="" className='w-full h-full' />
                    <div className=" absolute bottom-12 left-8 flex items-center justify-center flex-col text-center w-[70%] m-auto">
                        <h2 className=" text-xl font-bold">Enjoy movies and series</h2>
                        <p className=" w-[70%] m-auto">The Dragon of Fire was one of the five Elemental Dragons, and would often appear as a serpent of endless coiling flame. Its eyes glowed hot as coals and its breath reeked of sulfur and smoke. It attacked by shooting great gouts of fire from its mouth.</p>
                    </div>
            </SplideSlide>  

            <SplideSlide>
                 
                 <img src="../../public/soccer-players-action-professional-stadium.jpg" alt="" className=' w-full h-full' />
                 <div className=" absolute bottom-12 left-4 flex items-center justify-center flex-col text-center">
                     <h2 className=" text-xl font-bold">For the Football Fanatics</h2>
                     <p className=" w-[70%] m-auto">Watch your favourite live matches with in real time which gives you a high resolution and nice taste of your favourite matches</p>
                 </div>
            </SplideSlide>  
            
            <SplideSlide>
                 
                 <img src="../../public/music.jpg" alt="" className=' w-full h-full' />
                 <div className=" absolute bottom-12 left-12 flex items-center justify-center flex-col text-center">
                     <h2 className=" text-xl font-bold">Want to watch your favourite music videos</h2>
                     <p className=" w-[70%] m-auto">EXperience high quality music on our platform</p>
                 </div>
         </SplideSlide>  
        </Splide>    
            
            
            
       
    )
}

export default Hero