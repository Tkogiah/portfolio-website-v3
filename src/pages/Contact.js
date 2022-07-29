import { Typography } from "@mui/material";
import Navbar from "../components/Navbar";

import { LayoutBox } from "../components/styledComponents";

export default function Contact() {
    return (
        <LayoutBox>
            <Navbar />
            <Typography variant="h2">
                Contact
            </Typography>
        </LayoutBox>
    )
}