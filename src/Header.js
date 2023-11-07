import React from 'react';
import Header from './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Heade()
{
    const [{basket},dispatch] = useStateValue();
    return(
        <div className='header'>
             <a href='/'>
            <img className='header_logo' 
         
            src='https://th.bing.com/th/id/R.6a9960af418c59ef673b4a9d7ffa40ba?rik=sG2MVQZABBb5Tg&riu=http%3a%2f%2fwww.cheats.co%2fblog%2fwp-content%2fuploads%2f2013%2f08%2famazon-logo.jpg&ehk=N4miVzP4eY%2bHRnbh2FIPQKWB1fDuM%2ffX3whzb7xgPSY%3d&risl=&pid=ImgRaw&r=0'/>
            </a>
            <div className='header_search'>
                <input className='input_search' type='text'/>
                <SearchIcon className='search_icon'/>
            </div>
            <div className='headernave'>
                <div className='header_option'>
                    <span className='header_option_one'> Hello Guest </span>

                    <span className='header_option_two'> Sign IN </span>
                </div>
                <div className='header_option'>
                    <span className='header_option_one'> Return </span>

                    <span className='header_option_two'> &Orders </span>
                </div>
                <div className='header_option'>
                    <span className='header_option_one'> Your</span>

                    <span className='header_option_two'> Prime</span>
                </div>
                <a href='/checkout'>
                    <div className='header_ShoppingBasket'>
                        <ShoppingBasketIcon />
            
                    </div>
                </a>
                <div className='basket_count'>
                    <span className='header_option_one'>{basket.length}</span>
                </div>
                
                
            </div>
        </div>
    );
    
}
export default Heade;