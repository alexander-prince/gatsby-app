import React from "react"
import Link from "gatsby-link"

const Header = ({ siteTitle }) => (
    <div className="Header">
        <div className="HeaderGroup">
            <Link to="/"><img src={require("../images/gatsby-icon.png")} width="30" /></Link>
            <Link to="/work">Work</Link>
            <Link to="/blog">Notes</Link>
            <Link to="https://www.dribbble.com">Dribbble</Link>
            <Link to="https://www.twitter.com">Twitter</Link>
        </div>
    </div>
)

export default Header