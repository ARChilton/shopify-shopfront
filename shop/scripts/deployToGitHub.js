const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'gh-pages',
    repo: `https://github.com/archilton/${process.env.GATSBY_DEMO_DEPLOY_REPO}.git`,
  },
  () => {
    console.log(
      `Deploy Complete! check it out here https://archilton.github.io/${process.env.GATSBY_DEMO_DEPLOY_REPO}`
    )
  }
)
