import { Box, Fade, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import { Parallax } from "@react-spring/parallax";

import { ParallaxPage } from "../components/styledComponents";

const imageOne = 'first.png'
const imageTwo = 'second.png'
const imageThree = 'third.png'
const imageFour = 'fourth.png'
const imageFive = 'fifth.png'
// const imageSix = 'sixth.png'
// const imageSeven = 'seventh.png'


// WELCOME TO MY DIGITAL PROOF OF WORK!!

export default function Homepage() {
    return (
        <Box sx={{ margin: '0px', padding: '0px', position: 'realtive', textAlign: 'center'}}>   
            <Parallax pages={3} style={{backgroundColor: 'black'}}>
                <ParallaxPage BGI={imageOne} 
                offset={0}  
                speed={-1}
                >
                <Fade in={true} timeout={1500} >
                    <Typography variant="h2" sx={{
                        pt: '30vh',
                        transition: 'opacity 1s ease',
                        fontWeight: 'bold'
                    }} >
                        Hello, I am Marcus 
                    </Typography>
                </Fade>
                </ParallaxPage>
                <ParallaxPage BGI={imageTwo} 
                offset={0.4}
                speed={-.2}
                sx={{display: { xs: 'none', sm: 'block' }}}
                />
                <ParallaxPage BGI={imageThree} 
                offset={0.4}
                speed={0.2}
                />
                <ParallaxPage 
                offset={1}
                speed={.5}
                style={{backgroundColor: 'black'}}
                />
                <ParallaxPage BGI={imageFour} 
                offset={0.5}
                speed={0.2}
                />
                <ParallaxPage BGI={imageFive} 
                factor={2}
                offset={0.4}
                speed={.4}
                sx={{backgroundPosition: 'top'}}
                />
                <ParallaxPage  
                offset={1.5}
                speed={.1}
                style={{backgroundColor: 'black'}}
                />
                <ParallaxPage  
                offset={2}
                speed={0}
                style={{backgroundColor: 'black'}}
                />
                <ParallaxPage 
                offset={2}
                speed={0}
                style={{backgroundColor: 'black'}}
                >
                    <Typography variant="h2" sx={{
                        pt: '30vh',
                        transition: 'opacity 1s ease',
                        color: 'white'
                    }} >
                        Feel free to <br/>check out my work 
                    </Typography>
                </ParallaxPage>
            </Parallax>
            <Navbar />
        </Box>
    )
}