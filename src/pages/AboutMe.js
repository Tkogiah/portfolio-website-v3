import { Typography } from "@mui/material";
import Navbar from "../components/Navbar";

import { LayoutBox } from "../components/styledComponents";

export default function AboutMe() {
    return (
        <LayoutBox>
            <Navbar />
            <Typography variant="h1">
                ABOUT ME
            </Typography>
        </LayoutBox>
    )
}