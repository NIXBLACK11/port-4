export const blogs = [
  {
    blogTitle: 'gRPC',
    description: [
      "One of the best technologies I've encountered recently! This might be because I'm relatively new to microservices, but gRPC is absolutely incredible.",
      'gRPC easily allows different systems in different languages to communicate with each other, irrespective of the programming language they use.',
      'Complete tutorial from installation to implementation with Go server, Go client, and TypeScript client examples.',
    ],
    links: [{ type: 'site', url: '/blogs/grpc' }],
    blogPhotoDark: '/blogs/GRPC/darkMode.png',
    blogPhotoLight: '/blogs/GRPC/lightMode.png',
    blogSlug: 'grpc',
    skills: [
      { icon: '/skills/go.png', text: 'Golang' },
      { icon: '/skills/ts.png', text: 'TypeScript' },
      { icon: '/skills/grpc.png', text: 'gRPC' },
      { icon: '/skills/bun.svg', text: 'Bun' },
    ],
  },
  // {
  //   blogTitle: 'Meilisearch MCP',
  //   description: [
  //     'A tiny movie search app where Meilisearch indexes the data, MCP exposes search as a tool, and AI chat uses it.',
  //     'Brief implementation notes for setup, indexing, updating, searching, and calling the MCP tool from chat.',
  //   ],
  //   links: [{ type: 'site', url: '/blogs/meilisearch-mcp' }],
  //   blogPhotoDark: '/blogs/Meili/darkMode.png',
  //   blogPhotoLight: '/blogs/Meili/lightMode.png',
  //   blogSlug: 'meilisearch-mcp',
  //   skills: [
  //     { icon: '/skills/ts.png', text: 'TypeScript' },
  //     { icon: '/skills/next.png', text: 'Next.js' },
  //     { icon: '/skills/docker.png', text: 'Docker' },
  //     { icon: '/skills/gemini.png', text: 'Gemini' },
  //   ],
  // },
];
