module.exports = {
  siteMetadata: {
    // edit below
    title: `Hackerspace Mumbai Technical Blog`,
    author: {
      name: `Hackerspace Mumbai`,
      summary: `Aamchi Mumbai's largest OSS community`,
    },
    description: `A blog chronicling while at the same time sharing our learning and experience in building the largest OSS community in Bombay`,
    siteUrl: `https://tech.hackmum.in/`,
    social: {
      twitter: `hackmum`,
    },
    keywords : [
      `blog`,
      `hackerspace`,
      `mumbai`,
      `technology`,
      `community`,
      `oss`,
      `people`,
      `meetup`,
      `bootcamps`,
      `workshops`,
    ],
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-remark-images`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets`,
        name: `assets`,
      },
    },
    
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,

        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // edit below
        trackingId: `UA-43044929-7`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hackerspace Mumbai blog`,
        short_name: `hackmum`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // edit below
        icon: `src/assets/hm-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
