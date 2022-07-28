import {Box, Toolbar, Typography} from "@mui/material";
import { styled } from "@mui/material/styles";


export const LayoutBox = styled(Box)(({BGC}) => ({
    background: BGC,
    boxSizing: 'border-box'
}))
export const ColumnBox = styled(Box)(({BGC}) => ({
    display: 'flex',
    flexDirection: 'column',
    background: BGC,
boxSizing: 'border-box'
}))
export const RowBox = styled(Box)(({BGC}) => ({
    display: 'flex',
    flexDirection: 'row',
    background: BGC,
    boxSizing: 'border-box'
}))