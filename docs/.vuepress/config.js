module.exports = {
  title: "ClusterWS",
  description: "Lightweight, fast and powerful framework for building scalable WebSocket applications in Node.js",
  ga: "UA-127398674-1",
  sitemap: {
    filename: 'sitemap.txt',
    domain: 'https://clusterws.github.io/'
  },
  themeConfig: {
    nav: [
      { text: 'GitHub', link: 'https://github.com/ClusterWS/ClusterWS' }
    ],
    sidebar: [
      "/guide/",
      {
        title: 'Server',
        collapsable: true,
        children: [
          ['/guide/server/Basic', 'Basic']
        ]
      },
      {
        title: 'Clients',
        collapsable: true,
        children: [
          '/guide/clients/Java',
          '/guide/clients/Swift',
          '/guide/clients/JavaScript'
        ]
      }
    ]
  }
};