import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import BackgroundImage from "gatsby-background-image"

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  return (
    <BackgroundImage
      className="hero-bg"
      Tag="section"
      fluid={fluid}
      backgroundColor={`#040e18`}
      preserveStackingContext={true}
    >
      <div>
        <div>
          <h1>Camping Forest</h1>
          <h3>Best place to spend your free time</h3>
        </div>
      </div>
    </BackgroundImage>
  )
}

const query = graphql`
  {
    file(relativePath: { eq: "camping.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Hero
