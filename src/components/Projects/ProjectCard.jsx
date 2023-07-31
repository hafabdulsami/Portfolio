import React from "react";
import Card from "react-bootstrap/Card";

const ProjectCard = (props) => {
  return (
    <a href={props.URL} target="_blank" rel="noreferrer noopener">
    <Card >
      <Card.Img className="ProjectCard" src={props.imgPath} alt="card-img" />
    </Card>
    </a>
  );
};

export default ProjectCard;
