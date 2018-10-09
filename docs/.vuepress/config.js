module.exports = {
  title: "ClusterWS",
  description: "Need fix",
  themeConfig: {
    nav: [
      { text: 'GitHub', link: 'https://github.com/ClusterWS/ClusterWS' }
    ],
    sidebar: [
      {
        title: 'Home',
        collapsable: false,
        // children: '/'
      },
      {
        title: 'Server Docs',
        collapsable: false,
        children: [['/server/BASIC', 'Basic']]
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
    // sidebar: [
    //   '/',
    //   ['/clients/java', 'Java Client'],
    //   '/clients/javascript',
    //   '/clients/swift'
    //   // ['/clients', 'Explicit link text']
    // ]
  }
};