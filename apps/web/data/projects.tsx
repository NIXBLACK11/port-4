export const projects = [
  {
    projectTitle: 'Nixarcade',
    description: [
      'Founded and developed Nixarcade, a Solana-powered multiplayer gaming platform.',
      'Architected Nixarcade using Solana libraries, enabling decentralized transactions for a gaming dApp.',
      'Secured funding from Solana Foundation and CoinDCX for development of the platform.',
    ],
    links: [
      { type: 'site', url: 'https://nixarcade.vercel.app' },
      { type: 'twitter', url: 'https://twitter.com/NIXARCADE' },
    ],
    projPhoto: '/projects/nixarcade.png',
    skills: [
      { icon: '/skills/solana.png', text: 'Solana-web3.js' },
      { icon: '/skills/ts.png', text: 'TypeScript' },
      { icon: '/skills/react.png', text: 'React' },
      { icon: '/skills/ws.svg', text: 'Web-Socket' },
      { icon: '/skills/express.png', text: 'Express' },
    ],
  },
  {
    projectTitle: 'CrowdVault',
    description: [
      'Built a completely on-chain fundraising platform for creating, sharing, and donating to campaigns.',
      'Developed Solana programs for launching campaigns and receiving USDC donations directly on-chain.',
      'Enabled transparent fundraising with campaign and donation activity verifiable entirely on-chain.',
    ],
    links: [{ type: 'site', url: 'https://fund.nixblack.com/' }],
    projPhoto: '/projects/crowdvault.png',
    skills: [
      { icon: '/skills/solana.png', text: 'Solana' },
      { icon: '/skills/ts.png', text: 'TypeScript' },
      { icon: '/skills/react.png', text: 'React' },
      { icon: '/skills/solana.png', text: 'USDC' },
      { icon: '/skills/tailwind.png', text: 'Tailwind' },
    ],
  },
  {
    projectTitle: 'Stratus',
    description: [
      'Developed Stratus, a monitoring tool in Golang to track Website Performance and Security Issues.',
      'Implemented as a command-line tool that accepts configuration files for setup.',
      'Integrated with automated email notifications to alert users of website issues.',
    ],
    links: [{ type: 'site', url: 'https://github.com/NIXBLACK11/stratus-core' }],
    projPhoto: '/projects/stratus.png',
    skills: [
      { icon: '/skills/go.png', text: 'Golang' },
      { icon: '/skills/mux.png', text: 'Mux' },
    ],
  },
  {
    projectTitle: 'Animos',
    description: [
      'Developed a notes app that stores data locally, ensuring privacy and offline accessibility.',
      'Integrated AI-powered real-time web search to fetch relevant topics dynamically.',
      'Added AI-driven corrections and suggestions to improve content quality.',
    ],
    links: [{ type: 'site', url: 'https://animos-ten.vercel.app/' }],
    projPhoto: '/projects/animos.png',
    skills: [
      { icon: '/skills/vercel.png', text: 'Vercel-AI SDK' },
      { icon: '/skills/ts.png', text: 'TypeScript' },
      { icon: '/skills/react.png', text: 'React' },
      { icon: '/skills/tailwind.png', text: 'Tailwind' },
      { icon: '/skills/supabase.png', text: 'Supabase' },
      { icon: '/skills/razorpay.png', text: 'Razorpay' },
    ],
  },
  {
    projectTitle: 'Chain Poll',
    description: [
      'Developed a decentralized polling application powered by Rust smart contracts on the Solana blockchain.',
      'Enabled secure and tamper-proof polls, leveraging blockchain decentralization.',
      'Designed a seamless sharing feature, allowing polls to be shared via simple links for user convenience.',
    ],
    links: [{ type: 'site', url: 'https://polls.nixblack.com/' }],
    projPhoto: '/projects/polls.png',
    skills: [
      { icon: '/skills/rust.png', text: 'Rust' },
      { icon: '/skills/tailwind.png', text: 'Tailwind' },
      { icon: '/skills/ts.png', text: 'TypeScript' },
      { icon: '/skills/solana.png', text: 'Solana' },
    ],
  },
  {
    projectTitle: 'NixPay',
    description: [
      'Built a crypto payment gateway with multi-token payments, analytics, webhooks, and merchant notifications.',
      'Integrated the Jupiter Swap API to automatically convert supported Solana tokens into USDC.',
      'Developed and published an NPM SDK to simplify payment integration for external applications.',
    ],
    links: [{ type: 'site', url: 'https://pay.nixblack.site/' }],
    projPhoto: '/projects/nixpay.png',
    skills: [
      { icon: '/skills/ts.png', text: 'TypeScript' },
      { icon: '/skills/next.png', text: 'Next.js' },
      { icon: '/skills/solana.png', text: 'Solana' },
      { icon: '/skills/jupiter.png', text: 'Jupiter API' },
    ],
  },
  {
    projectTitle: 'Dropbox Easy Signer',
    description: [
      'A document signer using the Dropbox API.',
      'Allows users to send documents to multiple recipients, stores them in a database, and provides current document status.',
    ],
    links: [{ type: 'site', url: 'https://drop-fe-nine.vercel.app/' }],
    projPhoto: '/projects/dropbox.png',
    skills: [
      { icon: '/skills/dropbox.png', text: 'Dropbox-API' },
      { icon: '/skills/ts.png', text: 'TypeScript' },
      { icon: '/skills/react.png', text: 'React' },
      { icon: '/skills/tailwind.png', text: 'Tailwind' },
    ],
  },
  {
    projectTitle: 'NFT Marketplace',
    description: [
      'A marketplace for NFTs, powered by Tensor .trade API and Metaplex.',
      'Allows users to create NFTs and trade them in a decentralized marketplace.',
    ],
    links: [{ type: 'site', url: 'https://tasks-ten-nu.vercel.app/' }],
    projPhoto: '/projects/nft.png',
    skills: [
      { icon: '/skills/tensor.png', text: 'Tensor .trade API' },
      { icon: '/skills/metaplex.jpeg', text: 'Metaplex, UMI' },
      { icon: '/skills/ts.png', text: 'TypeScript' },
      { icon: '/skills/react.png', text: 'React' },
    ],
  },
  {
    projectTitle: 'JobLinker',
    description: [
      'Developed a job search tool to provide relevant jobs according to the user resume and preferences.',
      'Integrated Gemini for resume parsing and Google Search API for fetching job listings.',
      'Complemented with a frontend that displays job headings, links, descriptions, and images.',
    ],
    links: [{ type: 'site', url: 'https://jobs.nixblack.com' }],
    projPhoto: '/projects/joblinker.png',
    skills: [
      { icon: '/skills/go.png', text: 'Golang' },
      { icon: '/skills/react.png', text: 'React' },
      { icon: '/skills/ts.png', text: 'TypeScript' },
      { icon: '/skills/gemini.png', text: 'Gemini' },
    ],
  },
  {
    projectTitle: 'Nix-Faucet',
    description: [
      'Built a simple faucet to transfer solana on the devnet to a users account.',
      'Mostly focused on the UI giving the website a mono-chorome theme.',
    ],
    links: [{ type: 'site', url: 'https://faucet.nixblack.com' }],
    projPhoto: '/projects/faucet.png',
    skills: [
      { icon: '/skills/solana.png', text: 'Solana-web3.js' },
      { icon: '/skills/ts.png', text: 'TypeScript' },
      { icon: '/skills/react.png', text: 'React' },
      { icon: '/skills/tailwind.png', text: 'Tailwind' },
    ],
  },
  {
    projectTitle: 'Ludo Game',
    description: [
      'Developed a multiplayer Ludo game with real-time actions using WebSockets.',
      'Structured the project with Turborepo for efficient Monorepo management.',
      'Implemented Recoil for Efficient Global State Management, Enhancing Program Clarity.',
    ],
    links: [{ type: 'site', url: 'https://ludofam.nixarcade.fun/' }],
    projPhoto: '/projects/ludo.png',
    skills: [
      { icon: '/skills/react.png', text: 'React' },
      { icon: '/skills/tailwind.png', text: 'Tailwind' },
      { icon: '/skills/ts.png', text: 'TypeScript' },
      { icon: '/skills/ws.svg', text: 'WebSocket' },
    ],
  },
  {
    projectTitle: 'Go Link Tree',
    description: [
      'Personalized Linktree for storing social media links for fast access.',
      'Developed with Golang, featuring JWT for Secure Login, and Optimized for Speed.',
      'Deployed using Vercel, complemented by Golang backend on Render.',
    ],
    links: [{ type: 'site', url: 'https://link.nixblack.com/' }],
    projPhoto: '/projects/linktree.jpeg',
    skills: [
      { icon: '/skills/go.png', text: 'Golang' },
      { icon: '/skills/react.png', text: 'React' },
      { icon: '/skills/ts.png', text: 'TypeScript' },
      { icon: '/skills/aws.png', text: 'AWS' },
    ],
  },
  {
    projectTitle: 'Linux Container Developed Using Golang',
    description: [
      'Developed a Linux container using Golang to enable isolated command execution.',
      'Utilized a root file directory to create an Ubuntu image for a containerized operating system.',
    ],
    links: [{ type: 'site', url: 'https://github.com/NIXBLACK11/DockerWithGo' }],
    projPhoto: '/projects/cont.png',
    skills: [
      { icon: '/skills/go.png', text: 'Golang' },
      { icon: '/skills/bash.png', text: 'Bash' },
    ],
  },
  {
    projectTitle: 'Telegram Chat Bot for Bank Users',
    description: [
      'Multi-language chatbot, with text encodings built using LASER.',
      'Provides easy 24/7 access with human-like support to users leveraging the Telegram API.',
      'Enhanced security through Telegram IDs with seamless integration facilitated by Docker.',
    ],
    links: [
      { type: 'site', url: 'https://github.com/NIXBLACK11/telegramOrganizationChatBot' },
    ],
    projPhoto: '/projects/chatbot.jpg',
    skills: [
      { icon: '/skills/python.png', text: 'Python' },
      { icon: '/skills/keras.png', text: 'Keras' },
      { icon: '/skills/docker.png', text: 'Docker' },
      { icon: '/skills/mlh.jpeg', text: 'LASER' },
    ],
  },
  {
    projectTitle: 'The Feedback Loop',
    description: [
      'Video analysis tool for content creators, providing personalized video feedback.',
      'Compare videos against creations from top 1% creators based on audio and visual elements.',
      'Deployed on AWS using Docker for Queue-based Worker Selection, and the Service on Vercel.',
    ],
    links: [{ type: 'site', url: 'https://github.com/NIXBLACK11/The-Feedback-Loop' }],
    projPhoto: '/projects/feedback.png',
    skills: [
      { icon: '/skills/react.png', text: 'React' },
      { icon: '/skills/javascript.png', text: 'JavaScript' },
      { icon: '/skills/node.png', text: 'Node' },
      { icon: '/skills/keras.png', text: 'Keras' },
      { icon: '/skills/flask.png', text: 'Flask' },
      { icon: '/skills/docker.png', text: 'Docker' },
    ],
  },
  {
    projectTitle: 'MERN Stack-based Chat Application',
    description: [
      'Chat application with personal and group chat.',
      'Enabled with real-time communication using Websockets.',
      'Implemented secure login standards in Node.js to ensure user security.',
    ],
    links: [{ type: 'site', url: 'https://github.com/NIXBLACK11/chatApp' }],
    projPhoto: '/projects/codechat.png',
    skills: [
      { icon: '/skills/react.png', text: 'React' },
      { icon: '/skills/javascript.png', text: 'JavaScript' },
      { icon: '/skills/node.png', text: 'Node' },
      { icon: '/skills/ws.svg', text: 'WebSocket' },
      { icon: '/skills/aws.png', text: 'AWS' },
      { icon: '/skills/vercel.png', text: 'Vercel' },
    ],
  },
  {
    projectTitle: 'NIMBLE Chat Application',
    description: [
      'Developed a Python-based chatbot desktop application with face recognition capabilities.',
      'Facial recognition helps identify users and provide personalized greetings and interactions.',
      'Designed a secure task management system that associates tasks with individual user profiles.',
    ],
    links: [{ type: 'site', url: 'https://github.com/NIXBLACK11/ChatBot-NIMBLE-' }],
    projPhoto: '/projects/nimble.png',
    skills: [
      { icon: '/skills/python.png', text: 'Python' },
      { icon: '/skills/keras.png', text: 'Keras' },
      { icon: '/skills/tensorflow.png', text: 'TensorFlow' },
    ],
  },
  {
    projectTitle: 'Research Paper on IOT malware detection',
    description: [
      'Led IoT malware research using image models like VGG16, achieving 95.6% accuracy and 85% precision.',
      'Implemented Keras pre-trained models for enhanced image classification. Proficient in IoT security, deep learning, Keras, and Python.',
    ],
    links: [
      {
        type: 'site',
        url: 'https://github.com/NIXBLACK11/Malware_analysis_using_image_recognition',
      },
    ],
    projPhoto: '/projects/vgg16.png',
    skills: [
      { icon: '/skills/python.png', text: 'Python' },
      { icon: '/skills/keras.png', text: 'Keras' },
      { icon: '/skills/tensorflow.png', text: 'TensorFlow' },
    ],
  },
  {
    projectTitle: 'Sentiment Analysis using LASER',
    description: [
      'Implemented a multilingual model that predicts sentiments.',
      'Trained using twiiter sentiment data, uses LASER for multilingual training.',
    ],
    links: [
      {
        type: 'site',
        url: 'https://github.com/NIXBLACK11/Malware_analysis_using_image_recognition',
      },
    ],
    projPhoto: '/projects/LASER.png',
    skills: [
      { icon: '/skills/python.png', text: 'Python' },
      { icon: '/skills/keras.png', text: 'Keras' },
      { icon: '/skills/tensorflow.png', text: 'TensorFlow' },
    ],
  },
  {
    projectTitle: 'Java based Student Management Desktop Application',
    description: [
      'Developed a desktop application for educational institutions, serving as an information portal.',
      'Implemented user management and access levels for enhanced data security.',
      'Designed separate login systems for administrators and users to ensure privacy.',
    ],
    links: [{ type: 'site', url: 'https://github.com/NIXBLACK11/DESKTOP_APP' }],
    projPhoto: '/projects/hiltron.jpg',
    skills: [
      { icon: '/skills/java.png', text: 'Java' },
      { icon: '/skills/mysql.png', text: 'MySQL' },
      { icon: '/skills/java.png', text: 'Java Swing' },
    ],
  },
  {
    projectTitle: 'Portfolio V1',
    description: ['This is the first personal portfolio I made'],
    links: [{ type: 'site', url: 'https://siddharth-dev-portfolio.netlify.app/' }],
    projPhoto: '/projects/v1.jpg',
    skills: [
      { icon: '/skills/react.png', text: 'React' },
      { icon: '/skills/javascript.png', text: 'JavaScript' },
      { icon: '/skills/bootstrap.png', text: 'Bootstrap' },
    ],
  },
  {
    projectTitle: 'Chrome Extension for Text Summarization using BERT',
    description: [
      'Utilized Google BERT for real-time text summarization, enhancing user productivity.',
      'Integrated as a Chrome extension for easy and accessible text summarization.',
    ],
    links: [{ type: 'site', url: 'https://github.com/NIXBLACK11/summarizationExtension' }],
    projPhoto: '/projects/bert.jpg',
    skills: [
      { icon: '/skills/html.png', text: 'HTML/CSS' },
      { icon: '/skills/javascript.png', text: 'JavaScript' },
      { icon: '/skills/django.png', text: 'Django' },
      { icon: '/skills/bert.jpg', text: 'BERT' },
      { icon: '/skills/python.png', text: 'Python' },
    ],
  },
  {
    projectTitle: 'Instagram Hashtag Finder',
    description: ['Search Engine to find the hashtag related to topics in instagram.'],
    links: [],
    projPhoto: '/projects/hashtag.png',
    skills: [
      { icon: '/skills/react.png', text: 'React' },
      { icon: '/skills/javascript.png', text: 'JavaScript' },
      { icon: '/skills/bootstrap.png', text: 'Bootstrap' },
      { icon: '/skills/mlh.jpeg', text: 'Facebook Graph Key' },
    ],
  },
];
