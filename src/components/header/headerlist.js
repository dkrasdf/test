import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Test = styled.div`
margin-right: auto;
font-size: 150%;
padding: 12px 16px;

`
const headerlist = () =>(
    <nav class="main-nav flex gap-15 flex-fit">
        <Link to="/test/" >
          <span class="main-nav__label" >Popular</span>
        </Link>
        <Link to="/test/" >
          <span class="main-nav__label">Library</span>
        </Link>
        <Link to="/test/" >
          <span class="main-nav__label">Categories</span>
        </Link>
        <Link to="/" >
          <span class="main-nav__label">Upcoming</span>
        </Link>       
        <Link to="/" >
          <span class="main-nav__label">Random</span>
        </Link>
      </nav>
)

export default headerlist