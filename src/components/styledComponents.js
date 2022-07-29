import {Box, Toolbar, Typography} from "@mui/material";
import { styled } from "@mui/material/styles";

export const MAIN_COLOR = '#ffc754'


export const LayoutBox = styled(Box)(({BGC}) => ({
    background: 'black',
    boxSizing: 'border-box',
    width: '100%',
    color: 'white',

}))
export const ColumnBox = styled(Box)(({BGC}) => ({
    display: 'flex',
    flexDirection: 'column',
    background: BGC,
    boxSizing: 'border-box',
    color: 'white'
}))
export const RowBox = styled(Box)(({BGC}) => ({
    display: 'flex',
    flexDirection: 'row',
    background: BGC,
    boxSizing: 'border-box',
    color: 'white'
}))