import { Box, Fade, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import { Parallax } from "@react-spring/parallax";

import { ColumnBox, LayoutBox, ParallaxPage } from "../components/styledComponents";

const imageOne = 'first.png'
const imageTwo = 'second.png'
const imageThree = 'third.png'
const imageFour = 'fourth.png'
const imageFive = 'fifth.png'
const imageSix = 'sixth.png'
const imageSeven = 'seventh.png'


// WELCOME TO MY DIGITAL PROOF OF WORK!!

export default function Homepage() {
    return (
        <Box sx={{ margin: '0px', padding: '0px', position: 'realtive'}}>   
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
                offset={0.3}
                speed={-.2}
                />
                <ParallaxPage BGI={imageThree} 
                offset={0.4}
                speed={0.2}
                />
                <ParallaxPage BGI={imageSix} 
                offset={1}
                speed={.5}
                />
                <ParallaxPage BGI={imageFour} 
                offset={0.5}
                speed={0.2}
                />
                <ParallaxPage BGI={imageFive} 
                offset={0.6}
                speed={.4}
                />
                <ParallaxPage BGI={imageSix} 
                offset={1.5}
                speed={.1}
                />
                <ParallaxPage BGI={imageSix} 
                offset={2}
                speed={0}
                />
                <ParallaxPage BGI={imageSeven} 
                offset={2}
                speed={0}
                style={{backgroundColor: 'black'}}
                >
                    <Typography variant="h2" sx={{
                        pt: '30vh',
                        transition: 'opacity 1s ease',
                        color: 'white'
                    }} >
                        Welcome to my digital proof of work 
                    </Typography>
                </ParallaxPage>
            </Parallax>
            <Navbar />
        </Box>
    )
}