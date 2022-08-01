import { Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import { Divider } from "@mui/material"
import { Box } from "@mui/system";

import { ColumnBox, LayoutBox, RowBox, MAIN_COLOR } from "../components/styledComponents";
import { projectList } from "./ProjectList";
import { Link } from "react-router-dom";


export default function Projects() {
    return (
        <LayoutBox>
            <Navbar />
            <LayoutBox sx={{justifyContent: 'center', padding: '6vw'}}>
                <Typography variant="h2" sx={{padding: '10vh 15vw'}}>
                    Projects
                </Typography>
                <ColumnBox sx={{justifyContent: 'center', alignItems: 'center', padding: '6vw'}}>
                    {projectList.map(project => 
                        {
                            return <RowBox BGC={'#2b2a33'} sx={{
                                justifyContent: 'space-evenly',
                                flexWrap: 'wrap',
                                alignItems: 'center',
                                padding: '6vw 4vw',
                                margin: '5px 4vw',
                                borderRadius: '16px'
                            }}>
                                <ColumnBox sx={{
                                    width: '50%',
                                    paddingRight: '5%',
                                    alignItems: 'left',
                                    justifyContent: 'left'
                                }}>

                                    <Typography sx={{ fontSize: '40px' }}>
                                       <a href={project.github} target='#blank' >
                                            {project.title}
                                        </a> 
                                    </Typography>


                                    <Typography sx={{ padding: '5% 0% 10% 0%' }}>
                                        {project.description}
                                    </Typography>

                                    <RowBox sx={{ justifyContent: 'space-around' }}>
                                        {project.tags.map(tag => <img alt={tag.title}
                                            src={tag.icon}
                                            style={{
                                                height: '45px',
                                                width: '45px',
                                                padding: '5px',
                                                border: '1px solid #b6b6bb',
                                                backgroundColor: '#42414d',
                                                borderRadius: '8px'
                                            }} />
                                        )}
                                    </RowBox>
                                </ColumnBox>
                                <ColumnBox sx={{ width: '50%' }}>
                                    <iframe width="432" height="243" src={project.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                                </ColumnBox>
                            </RowBox>;
                        }
                    )}  
                    



                </ColumnBox>
            </LayoutBox>
        </LayoutBox>
    )
}