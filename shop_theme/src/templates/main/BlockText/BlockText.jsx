/** @jsx jsx */
/*eslint no-unused-vars: 0*/
import React from 'react'
import GatsbyImage from 'gatsby-image'
import { Link as GatsbyLink } from 'gatsby'
import { jsx } from 'theme-ui'
import styled from '@emotion/styled/macro'
import { Flex, Box, Text, Heading } from 'rebass'
import substrDescription from '../../../utils/substrDescription'

const Image = styled(GatsbyImage)``

const StyledBox = styled(Box)`
  ${Image} {
    transition-property: all;
    transition-duration: 0.6s;
    transition-timing-function: ease-in-out;
    transition-delay: 0s;
  }

  :hover ${Image} {
    transform: scale(1.05);
    transition-property: all;
    transition-duration: 0.6s;
    transition-timing-function: ease-in-out;
    transition-delay: 0s;
  }
`

const BlockText = ({
  shopifyThemePath,
  image,
  title,
  description,
  textBgColor = 'white',
  textColor = 'primary',
}) => {
  return (
    <GatsbyLink
      to={shopifyThemePath}
      sx={{
        color: textColor,
        textDecoration: 'none',
        ':hover,:focus,.active': {
          color: textColor,
          textDecoration: 'none',
        },
      }}
    >
      <StyledBox sx={{ position: 'relative' }}>
        <Box sx={{ overflow: 'hidden' }}>
          {image && image.localFile ? (
            <Image fluid={image.localFile.childImageSharp.fluid} alt={title} />
          ) : (
            <Box pt="60%" />
          )}
        </Box>

        <Box
          sx={{
            position: ['absolute'],
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <Flex
            sx={{
              flexDirection: ['column'],
              justifyContent: 'flex-end',
              alignItems: 'center',
              width: '100%',
              height: '100%',
            }}
          >
            <Box
              sx={{
                mx: 'auto',
                my: 'auto',
                backgroundColor: textBgColor,
                opacity: 0.8,
                px: '3%',
                py: '2%',
              }}
            >
              <Heading
                as="h2"
                fontSize={[30, 36, 42]}
                textAlign="center"
                sx={{
                  textTransform: 'capitalize',
                }}
              >
                {title}
              </Heading>
              <Text
                fontSize={[1, 2, 3]}
                sx={{ display: ['none', 'none', 'block'] }}
              >
                {substrDescription(description, 80)}
              </Text>
            </Box>
          </Flex>
        </Box>
      </StyledBox>
    </GatsbyLink>
  )
}

BlockText.propTypes = {}

export default BlockText
