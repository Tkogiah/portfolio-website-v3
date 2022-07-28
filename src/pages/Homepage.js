import { Typography } from "@mui/material";
import Navbar from "../components/Navbar";

import { LayoutBox } from "../components/styledComponents";

export default function Homepage() {
    return (
        <LayoutBox>
            <Navbar />
            <Typography variant="h1">
                Homepage
            </Typography>
        </LayoutBox>
    )
}