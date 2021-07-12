import React from 'react'
import "./Home.css"
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="img/amazon hero.jpg" alt="amazon hero banner" ></img>

                <div className="home__row">
                    <Product id="123123" title='React Cookbook: Create dynamic web apps with React using Redux' price={289.99} rating={5} image="img/prod1.jpg"/>

                    <Product id="123124" title='Samsung Galaxy M42 5G (Prism Dot Black, 6GB RAM, 128GB Storage)' price={300.60} rating={4} image="img/prod2.jpg"/>
                </div>

                <div className="home__row">
                    <Product id="123125" title="Women's Formal Regular Fit Blazer" price={19.12} rating={4} image="img/prod3.jpg" />

                    <Product id="123126" title="Mattel Uno Playing Card Game" price={1.35} rating={4} image="img/prod4.jpg" />

                    <Product id="123127" title="Parachute Advansed Aloe Vera Enriched Coconut Hair Oil, 250ml (Free 75ml)" price={1.56} rating={4} image="img/prod5.jpg"/>
                </div>

                <div className="home__row">
                    <Product id="123128" title="TOYQO Programming Language Software Geek Vinyl Skin Stickers for Laptops, Scrapbooks, Gadgets, Car n Bikes- Set of 50" price={5.56} rating={4} image="img/prod6.jpg"/>
                    
                </div>
            </div>
        </div>
    )
}

export default Home
