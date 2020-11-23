import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from './Index.svg'


const Headerlogo =  () =>
(
    <div oncontextmenu="return false;" >
        <Link to="/"  title="Back to home" style={{textDecoration: `none`}}>
            CATNovels
        </Link>
    </div>
)
export default Headerlogo