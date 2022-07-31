import { Box, Divider, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import { ColumnBox, LayoutBox, RowBox, MAIN_COLOR } from "../components/styledComponents";
const hex = 'MarcusIcon.png'
const imageOne = 'sunset.jpeg'


// WELCOME TO MY DIGITAL PROOF OF WORK!!

export default function Homepage() {
    return (
        <Box sx={{ margin: '0px', padding: '0px'}}>
            <Navbar />
            <LayoutBox>
                {/* <ColumnBox sx={{pt: '10vh'}}>
                    <Typography variant="h1" sx={{fontSize: '50px'}}>
                    Hi, I'm Marcus
                    </Typography>
                    <Divider><br/></Divider>
                    <Divider><br/></Divider>
                    <Typography variant="h2" sx={{fontSize: '40px'}}>
                        Welcome
                    </Typography>
                    <Typography variant="h2" sx={{fontSize: '40px'}}>
                        to my digital
                    </Typography>
                    <Typography variant="h2" sx={{fontSize: '40px'}}>
                        proof of work
                    </Typography>

                
                </ColumnBox> */}
                <Parallax pages={3} style={{backgroundColor: 'black'}}>
                    <ParallaxLayer offset={0} factor={2} speed={.1} style={{
                        backgroundImage: `url(${imageOne})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'repeat'
                    }} />
                    <ParallaxLayer offset={1.8} factor={1} speed={.1} style={{
                        backgroundImage: `url(${imageOne})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'repeat'
                    }} />
                    <ParallaxLayer  offset={0} factor={.8}  style={{backgroundColor: 'black'}}>
                        <Typography variant="h2" sx={{pt: '20vh'}} >
                            Hello, I am Marcus 
                        </Typography>
                    </ParallaxLayer>
                    <ParallaxLayer  offset={1.5} factor={.5}  style={{backgroundColor: 'black'}}>
                        <Typography variant="h2" sx={{pt: '20vh'}} >
                            to my digital proof of work 
                        </Typography>
                    </ParallaxLayer>
                    <ParallaxLayer offset={1} factor={1}  style={{backgroundColor: 'none'}}>
                        <Typography variant="h2" sx={{pt: '20vh'}} >
                            Welcome
                        </Typography>
                    </ParallaxLayer>
                    

                </Parallax>
                
            </LayoutBox>
        </Box>
    )
}