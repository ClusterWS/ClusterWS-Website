module.exports = {
  title: "ClusterWS",
  description: "Lightweight, fast and powerful framework for building scalable WebSocket applications in Node.js",
  ga: "UA-127398674-1",
  sitemap: {
    filename: 'sitemap.txt',
    domain: 'https://clusterws.github.io/'
  },
  themeConfig: {
    search: false,
    nav: [
      { text: 'GitHub', link: 'https://github.com/ClusterWS/ClusterWS' }
    ],
    sidebar: [
      ["/guide/", "Home"],
      {
        title: 'Server',
        collapsable: true,
        children: [
          ['/server/Basic', 'Basic']
        ]
      },
      {
        title: 'Clients',
        collapsable: true,
        children: [
          ['/clients/Java', 'Java'],
          ['/clients/Swift', 'Swift'],
          ['/clients/JavaScript', 'JavaScript'],
        ]
      }
    ]
  }
};