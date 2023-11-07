import React from 'react';
import  './Home.css'
import Product from './Product';
import Checkout from './Checkout';
function Home()
{
    return(
            <div className='continer'>
            <div className='home_continer'>
                <img className='home_image'
                        src='https://images-na.ssl-images-amazon.com/images/G/01/Gateway/Events/2016/PrimeDay/LeadUp/Desktop/PD16_GW_en_3000x600_leadup._CB270052908_.jpg'
                />
                
                <div className='home_row'>
                <Product
               
                title= "Nunn Bush Men's 1912 Plain Toe Chukka Lace Leather Boot with Scotchguard Defender"
                rating = {4}
                price = {343}
                img = "https://m.media-amazon.com/images/I/71uGmBw6hiL._AC_SX675_.jpg"
                pro = ""
              

                />
                
                <Product
                title= "Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not! Mass Market"
                rating = {5}
                price = {16}
                img = "https://m.media-amazon.com/images/I/512s5BZLJxL.jpg"
                /> 
                 <Product
               
                title= "Apple 2020 MacBook Air Laptop M1 Chip, 13” Retina Display,Works with iPhone/iPad; Space Gray"
                rating = {4}
                price = {343}
                img = "https://m.media-amazon.com/images/I/71jG+e7roXL._AC_SL1500_.jpg"

                />
                <Product
                title= "Acer Aspire 3 A314-23P-R3QA Slim Laptop | 14.0 Full HD IPS Display  | 512GB NVMe SSD | Wi-Fi 6 | Windows 11 Home,Silver"
                rating = {5}
                price = {406}
                img = "https://m.media-amazon.com/images/I/81EWtB70npL._AC_SX466_.jpg"
                /> 
                </div>
                <div className='home_row'>
                <Product
                    title= "Apple iPhone 15 Pro (512 GB) - Blue Titanium | [Locked] | Boost Infinite plan required starting at $60/mo. | Unlimited Wireless | No trade-in needed to start | Get the latest iPhone every year"
                    rating = {4}
                    price = {349.95}
                    img = "https://m.media-amazon.com/images/I/81KOaMd4-6L.__AC_SY445_SX342_QL70_FMwebp_.jpg"
                />
                <Product
                    title= " adidas Men's Superlite Relaxed Fit Performance Hat adidas Men's Superlite Relaxed Fit Performance Hat"
                    rating = {4}
                    price = {23.9}
                    img = "https://m.media-amazon.com/images/I/71eHXFsetiS._AC_SX679_.jpg"/> 
                   <Product
                    title= " LOVEVOOK Laptop Backpack Purse for Women ,Business Travel Computer Backpack, Beige-Black"
                    rating = {5}
                    price = {103.9}
                    img = "https://m.media-amazon.com/images/I/71mbZX-DawL._AC_SX466_.jpg"
                    
                    /> 
                   
                </div>
                <div className='home_row'>
                <Product 
                    title= " BASICPOWER Travel Duffel Gym Yoga Workout Tote Bag, Waterproof Overnight Weekender Bag, Dry-Wet Separated, with Yoga Mat Storage"
                    rating = {5}
                    price = {103.9}
                    img = "https://m.media-amazon.com/images/I/61dDGZDxPTL._AC_UL480_FMwebp_QL65_.jpg"
                />
                  <Product 
                    title= " Signature Fitness Multifunctional Home Gym System Workout Station, Multiple Style"
                    rating = {4}
                    price = {0}
                    img = "https://m.media-amazon.com/images/I/81Lu98MlisL._AC_UL480_FMwebp_QL65_.jpg"
                    />
                      <Product 
                    title= " Andongnywell Men's Slim Straight Leg Jeans Straight Stretch Denim Pocket Jean Trousers Fashion Denim Pa"
                    rating = {3}
                    price = {103.9}
                    img = "https://m.media-amazon.com/images/I/61XydGSxPFL._AC_SY550_.jpg"
                />
                  <Product 
                    title= " Ethiopian Kirare (Traditional Guitar) Hand Made Out of Genuine Goat Skin and Polished Wood. Brown"
                    rating = {5}
                    price = {0}
                    img = "https://m.media-amazon.com/images/I/71SvTHmtdGL._AC_SY679_.jpg"
                    />
                      <Product 
                    title= "Ethiopian Rastafarian Lion Flag Polo Shirts for Men Zippered Short Sleeve Tactical Shirts Pique Jersey Golf Shirt Tops"
                    rating = {5}
                    price = {103.9}
                    img = "https://m.media-amazon.com/images/I/61vRGf+TCjL._AC_SX679_.jpg"
                />
                  <Product 
                    title= " 100% Bamboo Eco Friendly Ethiopian Eritrean Scarf with Tilet Design, African head Wrap hijab, Blue"
                    rating = {5}
                    price = {0}
                    img = "https://m.media-amazon.com/images/I/71C-eIdFwYL._AC_SX569_.jpg"
                    />
                
                </div>

            </div>  
            
            </div>
            
            
    );
}
export default Home;
