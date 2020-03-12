export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e6aad80d6cba2659f09eeaf',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-vk8yyf9s',
                  apiId: 'da251f76-bfb2-4a11-b851-a42b810a187d'
                },
                {
                  buildHookId: '5e6aad8079febd6ccdd15eb6',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-j6iwe4cu',
                  apiId: '5494f31d-6055-4895-9372-b86c32148ce2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/borsyadam/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-j6iwe4cu.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
