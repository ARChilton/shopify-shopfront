import React from 'react'
import BlockText from './BlockText/BlockText'

const MainPageProductBlock = ({
  textColor = 'primary',
  textBgColor = 'white',
  product: {
    title,
    description,
    fields: { shopifyThemePath, firstImage },
  },
}) => {
  return (
    <BlockText
      textColor={textColor}
      textBgColor={textBgColor}
      title={title}
      description={description}
      shopifyThemePath={shopifyThemePath}
      image={firstImage}
    />
  )
}

export default MainPageProductBlock
