const GHPages = require('gh-pages')
require('dotenv').config()

const { GATSBY_DEMO_DEPLOY_REPO } = process.env.GATSBY_DEMO_DEPLOY_REPO
console.log(GATSBY_DEMO_DEPLOY_REPO)
if (!GATSBY_DEMO_DEPLOY_REPO) {
  console.warn('no env vars')
  process.exit(1)
}

// replace with your repo url
GHPages.publish(
  'public',
  {
    branch: 'gh-pages',
    repo: `https://github.com/archilton/${GATSBY_DEMO_DEPLOY_REPO}.git`,
  },
  err => {
    if (err) {
      console.warn(err)
      process.exit(1)
    }
    console.log(
      `Deploy Complete! check it out here https://archilton.github.io/${GATSBY_DEMO_DEPLOY_REPO}`
    )
  }
)
