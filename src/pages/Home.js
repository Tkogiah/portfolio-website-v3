import { Box, Divider, Typography } from "@mui/material";
import Navbar from "../components/Navbar";

import { ColumnBox, LayoutBox, RowBox, MAIN_COLOR } from "../components/styledComponents";
const hex = 'MarcusIcon.png'
const imageOne = 'sunset.jpeg'


// WELCOME TO MY DIGITAL PROOF OF WORK!!

export default function Homepage() {
    return (
        <Box sx={{ margin: '0px', padding: '0px'}}>
            <Navbar />
            <LayoutBox>
                <ColumnBox sx={{pt: '10vh'}}>
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
                
                </ColumnBox>
            </LayoutBox>
        </Box>
    )
}