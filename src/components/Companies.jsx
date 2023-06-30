import { partners } from "../assets/partners"

const Partners = () => {
    return (
        <div className="h-[70vh] bg-slate-900">
            <h2 className=" text-center font-extrabold md:text-5xl text-3xl py-4">Companies we have partnered with</h2>
            {partners.map((partner) => {
                <div key={partner.id}>
                    <img src={partner.logo} alt="logo" />
                    <p>{partner.name}</p>
                </div>
            })}
        </div>
    )
}

export default Partners

