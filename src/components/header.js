import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from '../../static/Index.svg'
import Headerlogo from "./header/homelogo"
import Headerlist from "./header/headerlist"

const Header = ({ siteTitle }) => (
  <header >
    <div class="header-bar"></div>
    <div class="header-inner container flex gap-30">
      <Headerlogo/>
      <Headerlist/>
      <form id="search" class="header-search">
        <label>
            <input id="search-input" placeholder="Search Novels..." title="Search docs" type="search" class="header-search__input"/>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="search-icon feather feather-search">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
        </label>
      </form>
      <nav class="header-search flex gap-15 flex-fit">
        <Link role="button" aria-label="Toggle sepia" title="Toggle sepia" class="toggle-theme">
            <span data-theme="light"></span><span data-theme="dark"></span><span data-theme="sepia"></span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
        </Link>

      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
