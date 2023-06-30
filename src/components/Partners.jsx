import { partners } from "../assets/partners"


const Partners = () => {
    return (
        <div className=" md:h-[70vh] py-8 bg-slate-900 flex items-center justify-center flex-col">
            <h2 className=" text-center font-extrabold md:text-5xl text-3xl py-8">Companies we have partnered with</h2>
                <div className="flex flex-wrap px-4  items-center gap-8 text-center">
                {partners.map((partner) => (
                    <div key={partner.id} >
                        <img src={partner.logo} alt="" className=" w-24 h-24 md:w-56 md:h-56"/>
                        <p className=" mt-6">{partner.name}</p>
                    </div>
                ))}
            </div>
           
    </div>
    )
}

export default Partners