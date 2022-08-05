import { Typography } from "@mui/material";
import Navbar from "../components/Navbar";

import { ColumnBox, LayoutBox, RowBox, MAIN_COLOR } from "../components/styledComponents";
import { aboutInfo } from "./AboutInfo";


export default function AboutMe() {
    return (
        <LayoutBox sx={{justifyContent: 'center', paddingTop: '0px 6vw 6vw 6vw'}}>
            <Navbar />
            <Typography className='mobile-title' variant="h2" sx={{padding: '10vh 15vw'}}>
                {aboutInfo.Main.Title}
            </Typography>
            <ColumnBox sx={{justifyContent: "center"}}>
                <ColumnBox sx={{padding: '6vw 12vw'}}>
                    <Typography variant="h5">
                    {aboutInfo.Main.Description}
                    </Typography>
                    <Typography variant="h3" paddingTop={'7vw'}>
                    Core Values
                    </Typography>
                </ColumnBox>
                <RowBox className="core-values" sx={{
                    backgroundColor: MAIN_COLOR,
                    color: 'black',
                    justifyContent: 'space-evenly',
                    alignItems: 'top',
                    textAlign: 'center'
                }}>
                    <ColumnBox className="value" sx={{color: 'black', padding: '5vh 3vw', width: '50%'}}>
                        <Typography variant="h4" sx={{padding: '5vh'}}>
                            Honesty
                        </Typography >
                        <Typography variant="h5">
                            {aboutInfo.Values.Honesty}
                        </Typography >
                    </ColumnBox>
                    <ColumnBox className="value" sx={{color: 'black', padding: '5vh 3vw', width: '50%'}}>
                        <Typography variant="h4" sx={{padding: '5vh'}}>
                            Communication
                        </Typography >
                        <Typography variant="h5">
                            {aboutInfo.Values.Communication}
                        </Typography >
                    </ColumnBox>
                    
                </RowBox>
            </ColumnBox>
        </LayoutBox>
    )
}