import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <IndexPageTemplate
        image={getAsset(data.image)}
        image2={getAsset(data.image2)}
        image3={getAsset(data.image3)}
        image4={getAsset(data.image4)}
        title={data.title}
        title2={data.title2}
        title3={data.title3}
        title4={data.title4}
        subheading={data.subheading}
        subheading2={data.subheading2}
        subheading3={data.subheading3}
        subheading4={data.subheading4}
        heading={data.heading}
        description={data.description}
        intro={data.intro || { blurbs: [] }}
        mainpitch={data.mainpitch || {}}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
