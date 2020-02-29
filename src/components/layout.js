/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import BrandBar from "../decanter/components/brandbar"
import LockUp from "../decanter/components/lockup"
import GlobalFooter from "../decanter/components/globalfooter"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title,
          school,
          line2,
          line3
        }
      }
    }
  `)

  return (
    <>
        <BrandBar />

        <header class="su-masthead su-masthead--right">
          <section>
            <LockUp school={data.site.siteMetadata.school} siteTitle={data.site.siteMetadata.title} line2={data.site.siteMetadata.line2} line3={data.site.siteMetadata.line3} />
          </section>
        </header>

        <div class="page-content">
          <div class="content">
              <main>{children}</main>
          </div>
        </div>

        <GlobalFooter />
    </>

  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
