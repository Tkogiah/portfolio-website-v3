import { Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import { Divider } from "@mui/material"

import { ColumnBox, LayoutBox, RowBox, MAIN_COLOR } from "../components/styledComponents";

export default function Projects() {
    return (
        <LayoutBox>
            <Navbar />
            <LayoutBox sx={{justifyContent: 'center', padding: '6vw'}}>
                <Typography variant="h2" sx={{padding: '10vh 15vw'}}>
                    Projects
                </Typography>
                <ColumnBox sx={{justifyContent: 'center', alignItems: 'center', padding: '6vw'}}>
                    <RowBox BGC={'#2b2a33'} sx={{
                        justifyContent: 'space-evenly',
                        flexWrap: 'wrap', 
                        alignItems: 'center',
                        padding: '6vw',
                        margin: '4vw',
                        borderRadius: '16px'
                    }}>
                        <ColumnBox  sx={{
                            width: '50%',
                            padding: '0 5%'
                            
                        }}>
                            <Typography sx={{fontSize: '40px'}}>Title</Typography>
                            <Typography sx={{padding: '5% 0%'}}>description is going to be fairly descriptive about the specific project that I did. I think I will probably put some decent text in here to try and explain things. I will also talk about what I learned and how I struggled.</Typography>
                            
                            <RowBox sx={{justifyContent: 'space-around'}}>
                                <Typography>tag</Typography>
                                <Typography>tag</Typography>
                                <Typography>tag</Typography>
                            </RowBox>
                        </ColumnBox >
                        <ColumnBox sx={{width: '50%'}}>

                        <iframe width="432" height="243" src="https://www.youtube.com/embed/rwSDZo6h7B4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        
                        </ColumnBox>
                    </RowBox>
                </ColumnBox>
            </LayoutBox>
        </LayoutBox>
    )
}