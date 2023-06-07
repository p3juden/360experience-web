import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import FullWidthImage from "../components/FullWidthImage";
import ReactPannellum from "react-pannellum";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  image2,
  image3,
  image4,
  title,
  title2,
  title3,
  title4,
  subheading,
  subheading2,
  subheading3,
  subheading4,
  heading,
  mainpitch,
  description,
  intro,
}) => {
  const heroImage = getImage(image) || image;
  const heroImage2 = getImage(image2) || image2;
  const heroImage3 = getImage(image3) || image3;
  const heroImage4 = getImage(image4) || image4;

  const config = {
    autoLoad: true,
    autoRotate: -5,
    showFullscreenCtrl: false,
    keyboardZoom: false,
    hotspotDebug:true,
    mouseZoom: false,
    showFullscreenCtrl: false,
    showControls: false,
    orientationOnByDefault:true,
    hfov: 150,
    pitch: -30,
  };

  return (
    <div>
      <ReactPannellum
        id="1"
        sceneId="firstScene"
        imageSource="https://heinolan-kaupunki.s3.eu-west-1.amazonaws.com/pictures/360/satama-md.jpg"
        config={config}
        style={{ width: '100vw', height: '60vh', marginBottom: "0.5em", display: "grid", alignItems: "center",}}
      >
        <div
            style={{
              // By using the same grid area for both, they are stacked on top of each other
              //marginTop: "0.5rem",
              gridArea: "1/1",
              position: "relative",
              // This centers the other elements inside the hero component
              placeItems: "center",
              display: "grid",
              zIndex: 1,
            }}
          >
              {title && (
              <h1
                className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
                style={{
                  boxShadow:
                    "rgb(185,66,96) 0.5rem 0px 0px, rgb(185,66,96) -0.5rem 0px 0px",
                  backgroundColor: "rgb(185,66,96)",
                  color: "white",
                  lineHeight: "1",
                  padding: "0.25em",
                }}
              >
                {title}
              </h1>
            )}
            {subheading && (
              <h3
                className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
                style={{
                  boxShadow:
                    "rgb(185,66,96) 0.5rem 0px 0px, rgb(185,66,96) -0.5rem 0px 0px",
                  backgroundColor: "rgb(185,66,96)",
                  color: "white",
                  lineHeight: "1",
                  padding: "0.25rem",
                  marginTop: "0.5rem",
                }}
              >
                {subheading}
              </h3>
            )}
          </div>
        </ReactPannellum>
      
      <FullWidthImage img={heroImage} title={title} subheading={subheading} />
      <FullWidthImage
        img={heroImage2}
        title={title2}
        subheading={subheading2}
      />
      <FullWidthImage
        img={heroImage3}
        title={title3}
        subheading={subheading3}
      />
      <FullWidthImage
        img={heroImage4}
        title={title4}
        subheading={subheading4}
      />

      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="content">
                    <div className="tile">
                      <h1 className="title">{mainpitch.title}</h1>
                    </div>
                    <div className="tile">
                      <h3 className="subtitle">{mainpitch.description}</h3>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2">
                        {heading}
                      </h3>
                      <p>{description}</p>
                    </div>
                  </div>
                  <Features gridItems={intro.blurbs} />
                  <div className="columns">
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/products">
                        See all products
                      </Link>
                    </div>
                  </div>
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      Latest stories
                    </h3>
                    <BlogRoll />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/blog">
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  image4: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  title2: PropTypes.string,
  title3: PropTypes.string,
  title4: PropTypes.string,
  subheading: PropTypes.string,
  subheading2: PropTypes.string,
  subheading3: PropTypes.string,
  subheading4: PropTypes.string,
  heading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        image2={frontmatter.image2}
        image3={frontmatter.image3}
        image4={frontmatter.image4}
        title={frontmatter.title}
        title2={frontmatter.title2}
        title3={frontmatter.title3}
        title4={frontmatter.title4}
        subheading={frontmatter.subheading}
        subheading2={frontmatter.subheading2}
        subheading3={frontmatter.subheading3}
        subheading4={frontmatter.subheading4}
        heading={frontmatter.heading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        title2
        title3
        title4
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        image2 {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        image3 {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        image4 {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
        subheading2
        subheading3
        subheading4
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
