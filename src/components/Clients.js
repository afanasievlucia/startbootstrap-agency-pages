import { useState } from "react";
import ClientItem from "./ClientItem";

const Clients = () => {
    const [clients] = useState([
        {
            href: '#!',
            imgSrc: "assets/img/logos/microsoft.svg"
        },
        {
            href: '#!',
            imgSrc: "assets/img/logos/google.svg"
        },
        {
            href: '#!',
            imgSrc: "assets/img/logos/facebook.svg"
        },
        {
            href: '#!',
            imgSrc: "assets/img/logos/ibm.svg"
        }
    ])
    return (
        <div className="py-5">
            <div className="container">
                <div className="row align-items-center">
                    {clients.map(client => (
                        <ClientItem client={client} />
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Clients