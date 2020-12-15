import React, { useState } from "react";

import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn } from "../animations";

//Redux and routes
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";
export default function Nav() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const inputHandler = (e) => {
    setText(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(text));
    setText("");
  };
  const clearSearched = () => {
    dispatch({
      type: "CLEAR_SEARCHED",
    });
  };
  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <Logo onClick={clearSearched}>Gamoogle</Logo>
      <form className="search">
        <input value={text} onChange={inputHandler} type="text" />
        <button onClick={submitSearch}>Submit </button>
      </form>
    </StyledNav>
  );
}

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    outline: none;
    font-weight: bold;
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background-color: #ff7676;
    color: white;
  }
`;

const Logo = styled(motion.h1)`
  font-size: 1.5rem;
  cursor: pointer;
`;
