import { Box, Icon } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ParallaxLayer } from "@react-spring/parallax";


export const MAIN_COLOR = '#ffc754'
export const ICON_STYLES = {
    height: '45px',
    width: '45px',
    padding: '5px',
    border: '1px solid #b6b6bb',
    backgroundColor: '#42414d',
    borderRadius: '8px'
}

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
export const ProjectBox = styled(Box)(({BGC}) => ({
    display: 'flex',
    flexDirection: 'row',
    background: BGC,
    boxSizing: 'border-box',
    color: 'white',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: '6vw 1vw',
    margin: '5px 4vw',
    borderRadius: '16px',
}))

export const ParallaxPage = styled(ParallaxLayer)(({BGI}) => ({
    backgroundImage: `url(${BGI})`,
    minWidth: '100vw',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
}))