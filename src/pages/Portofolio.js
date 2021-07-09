import { useState } from "react";
import PortfolioItem from "../components/PorfolioItem";

const Portofolio = () => {
    const [items] = useState([
        {
            href: "#portfolioModal1",
            imgSrc: "assets/img/portfolio/1.jpg",
            title: 'Threads',
            subtitle: 'Illustration'
        }, 
        {
            href: "#portfolioModal2",
            imgSrc: "assets/img/portfolio/2.jpg",
            title: 'Explore',
            subtitle: 'Graphic Design'
        },
        {
            href: "#portfolioModal3",
            imgSrc: "assets/img/portfolio/3.jpg",
            title: 'Finish',
            subtitle: 'Identity'
        },
        {
            href: "#portfolioModal4",
            imgSrc: "assets/img/portfolio/4.jpg",
            title: 'Lines',
            subtitle: 'Branding'
        },
        {
            href: "#portfolioModal5",
            imgSrc: "assets/img/portfolio/5.jpg",
            title: 'Southwest',
            subtitle: 'Website Design'
        },
        {
            href: "#portfolioModal6",
            imgSrc: "assets/img/portfolio/6.jpg",
            title: 'Window',
            subtitle: 'Photography'
        },
    ])
    return (
        <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Portfolio</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-sm-6 col-md-4">
                        {items.map(item => (
                            <PortfolioItem item={item}/>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portofolio