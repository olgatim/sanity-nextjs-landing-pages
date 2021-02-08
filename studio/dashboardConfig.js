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
                  buildHookId: '60216407bf0a36ddf4eb050f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-hp3wy7xr',
                  apiId: '00d848b4-3583-4baf-802f-a89708f09cb5'
                },
                {
                  buildHookId: '602164072e628933149b3f7b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-g18cjspm',
                  apiId: '39b243d8-f028-44bc-97ed-43dd349e1891'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/olgatim/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-g18cjspm.netlify.app', category: 'apps'}
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
