import { useRef, useEffect } from "react";
import { Typography } from "@mui/material";
import Navbar from "../components/Navbar";

import { ColumnBox, LayoutBox, RowBox, MAIN_COLOR, ProjectBox, ICON_STYLES } from "../components/styledComponents";
import { projectList } from "./ProjectList";


export default function Projects() {
    const myRef = useRef()
    useEffect(() => {
        console.log('myRef', myRef.current)
    }, [])

    return (
        <LayoutBox>
            <Navbar />
            <LayoutBox sx={{justifyContent: 'center', padding: '6vw'}}>
                <Typography variant="h2" sx={{padding: '10vh 15vw'}}>
                    Recent Projects
                </Typography>
                <ColumnBox sx={{
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    padding: '6vw'
                }}>
                    {projectList.map(project => 
                        {
                        return (
                            <ProjectBox key={project.id} ref={myRef} BGC={'#2b2a33'}
                            className='project-display'
                            >
                                <ColumnBox className="project-description" sx={{
                                    width: '50%', 
                                    alignItems: 'center', 
                                    justifyContent: 'center',
                                    padding: '25px 15px 0px 15px'
                                }}>
                                    
                                    <Typography sx={{ 
                                        fontSize: '40px',
                                        '&:hover': {
                                            textShadow: `1px 1px ${MAIN_COLOR}`
                                        }}}>
                                       <a href={project.github} target='#blank' style={{
                                        textDecoration: 'none',
                                        color: 'inherit'
                                    }} >
                                            {project.title}
                                        </a> 
                                    </Typography>


                                    <Typography sx={{ padding: '5% 0% 10% 0%' }}>
                                        {project.description}
                                    </Typography>

                                    <RowBox sx={{ justifyContent: 'space-evenly', width: '100%' }}>
                                        {project.tags.map(tag => 
                                            <div className="flip-card">
                                            <div className="flip-card-inner">
                                              <div className="flip-card-front">
                                                <img 
                                                src={tag.icon} 
                                                alt={tag.title} 
                                                style={ICON_STYLES} />
                                              </div>
                                              <div className="flip-card-back">
                                                <h4>{tag.title}</h4>
                                              </div>
                                            </div>
                                          </div> 
                                        )}
                                    </RowBox>
                                </ColumnBox>
                                <ColumnBox sx={{ 
                                width: '50%',
                                height: '100%', 
                                alignItems: 'center', 
                                justifyContent: 'center',
                                paddingTop: '25px' 
                                }}>
                                    <iframe className="video" width="432" height="243" src={project.video[0]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                                    <Typography className="video-mobile" sx={{display: 'none', fontSize: '30px'}}>
                                      {project.video[0] ? <a href={project.video[1]} target='_blank'>See Video</a>: ''}  
                                        
                                    </Typography>
                                </ColumnBox>
                            </ProjectBox>
                        )}
                    )}  
                </ColumnBox>
            </LayoutBox>
        </LayoutBox>
    )
}