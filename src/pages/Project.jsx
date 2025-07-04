import React from 'react'
import ProjectCard from '../componenet/ProjectCard'
import image from "/src/blogapp.png"
const Project = () => {
  return (
    <div>
      <ProjectCard image={image}
      name={"Blog App"} linkProject={<a href="https://myblogapp-reactjs.netlify.app/" target="_blank" rel="noopener noreferrer">
  Visit Blog
</a>}/>
    </div>
  )
}

export default Project
