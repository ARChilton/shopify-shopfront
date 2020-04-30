import React from 'react'
import BlockText from './BlockText/BlockText'

const MainPageCollectionBlock = ({
  textColor = 'primary',
  textBgColor = 'white',
  collection: {
    title,
    description,
    image,
    fields: { shopifyThemePath },
  },
}) => {
  return (
    <BlockText
      textColor={textColor}
      textBgColor={textBgColor}
      title={title}
      description={description}
      shopifyThemePath={shopifyThemePath}
      image={image}
    />
  )
}

export default MainPageCollectionBlock
