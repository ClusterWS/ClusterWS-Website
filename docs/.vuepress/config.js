module.exports = {
  title: "ClusterWS",
  description: "Need fix",
  themeConfig: {
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
          ['/clients/javascript', 'JavaScript'],
          ['/clients/java', 'Java'],
          ['/clients/swift', 'Swift'],
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