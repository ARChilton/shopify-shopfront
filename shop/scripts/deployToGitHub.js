const GHPages = require('gh-pages')
require('dotenv').config({ path: `.env` })

const repo = process.env.GATSBY_DEMO_DEPLOY_REPO
console.log(repo)
if (!repo) {
  console.warn('no env vars')
  process.exit(1)
}
// replace with your repo url
GHPages.publish(
  'public',
  {
    branch: 'gh-pages',
    repo: `https://github.com/archilton/${repo}.git`,
  },
  () => {
    console.log(
      `Deploy Complete! check it out here https://archilton.github.io/${repo}`
    )
  }
)
