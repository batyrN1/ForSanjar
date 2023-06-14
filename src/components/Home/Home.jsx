import React from 'react'; 

import '../Home/Home.scss' 

import img from "../../assests/images/horor.jpeg";
import comedy from '../../assests/images/dumb.png';
import multfilm from "../../assests/images/minions.png";
import anime from "../../assests/images/anime.png";
import detective from "../../assests/images/sherlock.png";
import fantasy from "../../assests/images/potter.png";
import war from '../../assests/images/war.png';
import romance from '../../assests/images/romance.png';
import sport from '../../assests/images/pele.png';
import history from '../../assests/images/sparta.png';
import crime from '../../assests/images/uik.png';
import thriller from '../../assests/images/seven.png';

const films = [ 
   
    { 
        id:1, 
        img:img,
        name:'Horrors', 
        year:'16+'
        
    }, 
    { 
        id:2, 
        img:comedy,
        name:'Comedy', 
        year:'14+'
        
    }, 
    { 
        id:3, 
        img:multfilm,
        name:'Multfilms', 
        year:'6+'
        
    }, 
    { 
        id:4, 
        img:anime,
        name:'Anime', 
        year:'14+'
        
    }, 
     { 
        id:5, 
        img:detective,
        name:'Detective', 
        year:'16+'
        
    }, 
    { 
        id:6, 
        img:fantasy,
        name:'Fantasy', 
        year:'16+'
        
    }, 
    { 
        id:7, 
        img:war,
        name:'War Films', 
        year:'16+'
        
    }, 
    { 
        id:8, 
        img:romance,
        name:'Romance Films', 
        year:'14+'
        
    }, 
    { 
        id:9, 
        img:sport,
        name:'Sport Films', 
        year:'14+'
        
    }, 
    { 
        id:10, 
        img:history,
        name:'History Films', 
        year:'16+'
        
    }, 
    { 
        id:11, 
        img:crime,
        name:'Crime Films', 
        year:'16+'
        
    }, 
    { 
        id:12, 
        img:thriller,
        name:'Thrillers', 
        year:'16+'
        
    }, 
    
    
 
] 
 
const Home = () => { 
    return ( 
        films.map((i) => { 
            return( 
                <div className='home-container'>
                <div className='home-box'> 
                <h1>{i.h1}</h1>
                    <div className='card'> 
                        <img className='img' src={i.img} alt="" />
                        <div className='card-box' >
                            <nav className='card-nav'>
                        <p className='text'>{i.name}</p>
                            </nav>
                            <nav className='home-nav'>
                        <p className='text'>({i.year})</p> 
                            </nav>
                        </div>
                    </div> 
                </div> 
                </div>
            ) 
        }) 
    ) 
} 
 
export default Home;