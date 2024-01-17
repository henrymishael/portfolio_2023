import React from 'react'
import food from '@/public/assets/works/logonew.png'
import cover from '@/public/assets/works/black.png'
import calc from '@/public/assets/works/icon-512.png'
import piggy from '@/public/assets/works/piggy.png'
import port from '@/public/assets/works/portfolio.ico'
import spotify from '@/public/assets/works/spotify.png'
import tv from '@/public/assets/works/tv.png'
import acme from '@/public/assets/works/Acme.png'
import AcmeLogo from './Acmelogo'






const projects = { previousWork : [
    {
        name:"Food App",
        id: 1,
        slug: "food_app",
        image: food,
        link:'https://getfood.vercel.app/',
    
    },
    {
        name:"Piggy Vest",
        id: 2,
        slug: "piggy_vest",
        image: piggy,
        link:'https://my-projects-bay-nine.vercel.app',
       
        
    },
    {
        name:"Movie website",
        id: 3,
        slug: "Movie",
        image: tv,
        link: 'https://moviebox-weld.vercel.app',
       
        
        
    },
    {
        name:"Image gallery",
        id: 4,
        slug: "cover",
        image: cover,
        link:'https://image-gallery-vert-gamma.vercel.app',
        
       
        
    },
    {
        name:"Calculator",
        id: 5,
        slug: "calc",
        image: calc,
        link: 'https://henrymishael.github.io/responsive_calculator',
      
    },
    {
        name:"Spotify clone",
        id: 6,
        slug: "spotify",
        image: spotify,
        link:'https://spotify-clone-henrymishael.vercel.app',
       
        
    },
    {
        name:"portfolio v2",
        id: 7,
        slug: "portfoliov2",
        image: port,
        link:'https://main--genuine-bublanina-013bba.netlify.app',
        
    },
    {
        name:"Acme",
        id: 8,
        slug: "Acme",
        image: acme,
        link:'https://acme-rust.vercel.app/',
        
    }

]
}

export default projects

