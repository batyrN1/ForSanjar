import React from 'react'; 
import '../Header/Header.scss' 
import { Link } from 'react-router-dom'; 
import img from "../../assests/images/Rectangle 1.svg";
import heart from '../../assests/images/heart-svgrepo-com.f52cc3000558c3485cb018d09bad9cd6.svg';
import person from '../../assests/images/person-4.121a96583cafb4b6022a005510ceed79.svg'
import search from "../../assests/images/download.png";
const Header = () => { 
    return ( 
            <div className='container'> 
                <div className='box-logo'> 
                    <img src={img} alt="" /> 
                    <h1>inema</h1> 
                </div> 
                            <div className='header-nav'> 
                                <ul className='header-menu'> 
                                    <Link className='link' to="/home">Home</Link> 
                                    <Link className='link' to="/about-us">AboutUs</Link> 
                                    <input type="text" className="search" placeholder='search'/> 
                                    <button className='btn'><img src={search} alt="" /> </button>
                                </ul> 

                              </div> 

                <div className="icons-link"> 
                    <Link to="/save"><img className='svg' src={heart} alt="" /></Link> 
                    <Link to="/register"><img className='svg' src={person} alt="" /></Link> 
                </div> 
            </div> 
    ); 
} 
 
export default Header;