import { Box, Typography } from "@mui/material";
import Navbar from "../components/Navbar";

import { LayoutBox } from "../components/styledComponents";

export default function Homepage() {
    return (
        <Box sx={{ margin: '0px', padding: '0px'}}>
            <Navbar />
            <LayoutBox sx={{position: 'relative'}}>
                
            </LayoutBox>
        </Box>
    )
}