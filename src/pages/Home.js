import { Box, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import { ColumnBox, LayoutBox } from "../components/styledComponents";
const hex = 'MarcusIcon.png'

export default function Homepage() {
    return (
        <Box sx={{ margin: '0px', padding: '0px'}}>
            <Navbar />
            <LayoutBox>
                <Parallax pages={4} style={{backgroundColor: 'gray'}}>
                    <ParallaxLayer factor={1.5} offset={0} speed={0} 
                    style={{
                        backgroundImage: `url(${hex})`,
                        backgroundSize: '25%',
                        backgroundPosition: 'top',
                        backgroundColor: 'black',
                        
                        }}>
                        <Box sx={{pt: '25%'}}>
                            <Typography variant="h2">
                                My name is Marcus
                            </Typography>
                        </Box>
                        
                    </ParallaxLayer>
                        <Typography variant="h2"> hello I am here</Typography>
                    <ParallaxLayer factor={1} offset={.9} speed={.7}
                    style={{
                        backgroundColor: 'blue',
                        height: '20vh'
                        }}>
                        <Box>
                            <Typography variant="h2">
                                Developer
                            </Typography>
                        </Box> 
                    </ParallaxLayer>
                    <ParallaxLayer offset={1} speed={0}
                    style={{
                        backgroundColor: 'red',
                        
                        }}>
                        <ColumnBox sx={{justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
                            <Typography variant="h2" sx={{ backgroundColor: 'green'}}>
                                how's it going?
                            </Typography>
                        </ColumnBox> 
                    </ParallaxLayer>
                </Parallax>
            </LayoutBox>
        </Box>
    )
}