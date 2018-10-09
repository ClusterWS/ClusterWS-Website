module.exports = {
  title: "ClusterWS",
  description: "Lightweight, fast and powerful framework for building scalable WebSocket applications in Node.js",
  themeConfig: {
    nav: [
      { text: 'GitHub', link: 'https://github.com/ClusterWS/ClusterWS' }
    ],
    sidebar: [
      ["/guide/", "Home"],
      {
        title: 'Server Docs',
        collapsable: false,
        children: [
          ['/server/BASIC', 'Basic']
        ]
      },
      {
        title: 'Clients Docs',
        collapsable: false,
        children: [
          ['/clients/JS', 'JavaScript'],
          ['/clients/JAVA', 'Java'],
          ['/clients/SWIFT', 'Swift'],
        ]
      }
    ]
  }
};