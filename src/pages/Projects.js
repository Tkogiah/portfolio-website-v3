import { Typography } from "@mui/material";
import Navbar from "../components/Navbar";

import { LayoutBox } from "../components/styledComponents";

export default function Projects() {
    return (
        <LayoutBox>
            <Navbar />
            <Typography variant="h1">
                Projects
            </Typography>
        </LayoutBox>
    )
}