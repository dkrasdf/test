import React from "react"

const search = () =>(
    <form id="search" class="header-search">
        <label>
            <input id="search-input" placeholder="Search Novels..." title="Search docs" type="search" class="header-search__input"/>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="search-icon feather feather-search">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
        </label>
    </form>
)
export default search