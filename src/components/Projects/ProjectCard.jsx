import React from "react";
import Card from "react-bootstrap/Card";

const ProjectCard = (props) => {
  return (
    <a href={props.URL} target="_blank" rel="noreferrer noopener">
    <Card className="ProjectCard" >
      <Card.Img className="ProjectCard" variant="top" src={props.imgPath} alt="card-img" />
    </Card>
    </a>
  );
};

export default ProjectCard;
