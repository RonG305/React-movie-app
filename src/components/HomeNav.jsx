import  {Link} from 'react-router-dom'


const HomeNavbar = () => {
    return (
        <div className=" px-5 h-20 bg-[#000] flex items-center justify-between">
            <Link to='/'><h1 className=' font-bold text-3xl text-blue-500 italic cursor-pointer'>VideoMate</h1></Link>
            <Link to='/movies'><button className=" px-5 py-2 rounded bg-gradient-to-r from-blue-800 to-blue-950 hover:bg-blue-500">Watch</button></Link>
            
            <div className=" flex gap-4">
                <button className="px-5 py-2 rounded-full border border-white hover:bg-red-500">Sign Up</button>
                <button className="px-5 py-2 rounded-full border border-white hover:bg-red-500">Sign Up</button>
            </div>
        </div>
        
    )
}

export default HomeNavbar