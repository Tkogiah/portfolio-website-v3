import { Typography, FormControl, InputAdornment } from "@mui/material";
import Navbar from "../components/Navbar";
import { AccountCircle } from "@mui/icons-material";

import { ColumnBox, LayoutBox, ProjectBox, PrimaryButton, PrimaryInput } from "../components/styledComponents";



export default function Contact() {

    return (
        <LayoutBox>
            <Navbar />
            <LayoutBox sx={{justifyContent: 'center', padding: '0px 6vw 6vw 6vw'}}>
                <Typography variant="h2" sx={{padding: '10vh 15vw'}}>
                    Contact Me
                </Typography>
                <ColumnBox sx={{
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    padding: '6vw'
                }}> 
                    <ProjectBox BGC={'#2b2a33'}
                    className='project-display'
                    >
                        <ColumnBox className="project-description" sx={{
                            width: '100%', 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            padding: '5px 30px 0px 30px'
                        }}>
                            <Typography sx={{fontSize: '40px', paddingBottom: '20px'}} variant="h3">
                                Input your info below to send me an email
                            </Typography>
                            <ColumnBox className="form-text" sx={{
                                width: '100%', 
                                textAlign: 'left',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <form action="https://submit-form.com/QHR7MUAr"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '100%',
                                }}>
                                    <PrimaryInput sx={{
                                        display: 'felx',
                                        textAlign: 'left',
                                        justifyContent: 'left',
                                        marginTop: '2vw'
                                    }}
                                        placeholder="Name"
                                        id="name"
                                        name="name"
                                        startAdornment={
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    }
                                    />
                                    <PrimaryInput sx={{marginTop: '1vw'}}
                                        placeholder="Email"
                                        id="email"
                                        name="email"
                                        startAdornment={
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    }
                                    />
                                    <PrimaryInput sx={{marginTop: '1vw'}}
                                        placeholder="message"
                                        id="message"
                                        name="message"
                                        rows={4}
                                    />
                                    <PrimaryButton sx={{marginTop: '1vw'}}
                                        variant="contained"
                                        type="submit"
                                        
                                    >
                                        send email
                                    </PrimaryButton>
                                </form>
                            </ColumnBox>
                        </ColumnBox> 
                    </ProjectBox>
                </ColumnBox>
            </LayoutBox>
        </LayoutBox>
    )
}