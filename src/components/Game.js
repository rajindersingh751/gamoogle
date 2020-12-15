import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { popIn } from "../animations";
//redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
//Routing
import { Link } from "react-router-dom";

//utils
import { smallImage } from "../utils";

function Game({ name, released, image, id }) {
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };
  return (
    <StyledGame
      variants={popIn}
      initial="hidden"
      animate="show"
      layoutId={id}
      onClick={loadDetailHandler}
    >
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={"title" + id}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img
          layoutId={"main" + id}
          src={smallImage(image, 640)}
          alt={name}
        />
      </Link>
    </StyledGame>
  );
}

const StyledGame = styled(motion.div)`
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  min-height: 30vh;
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 50vh;
    object-fit: cover;
  }
`;

export default Game;
