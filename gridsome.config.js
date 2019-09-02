// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: 'ArefZ',
    siteDescription: 'Aref works from A to Z!',

    plugins: [
        {
            // Create posts from markdown files
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Project',
                path: 'content/projects/*.md',
                route: '/:slug',
                refs: {
                    // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
                    tags: {
                        typeName: 'Tag',
                        route: '/tag/:id',
                        create: true
                    }
                }
            }
        },
        {
            // Create resumes from markdown files
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Resume',
                path: 'content/resumes/*.md',
                route: '/:slug',
            }
        }
    ],

    transformers: {
        //Add markdown support to all file-system sources
        remark: {
            externalLinksTarget: '_blank',
            externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
            anchorClassName: 'icon icon-link',
            plugins: [
                '@gridsome/remark-prismjs'
            ]
        }
    },
}