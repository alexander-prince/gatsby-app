import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <div className="Hero">
        <div className="HeroGroup">
          <h1>Hi I'm Alexander,</h1>
          <p>an aspiring product designer, developer, architect
       working towards build something great.</p>
          <Link to="/page-2/">Go to page 2</Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
