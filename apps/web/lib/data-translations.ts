type SupportedLanguage = "hi" | "ja"

export const dataPhraseTranslations: Record<
  SupportedLanguage,
  Record<string, string>
> = {
  hi: {
    "NFT Marketplace": "NFT Marketplace",
    "Ludo Game": "Ludo Game",
    "Go Link Tree": "Go Link Tree",
    "Linux Container Developed Using Golang":
      "Golang se develop kiya gaya Linux Container",
    "Telegram Chat Bot for Bank Users":
      "Bank users ke liye Telegram Chat Bot",
    "MERN Stack-based Chat Application":
      "MERN Stack based Chat Application",
    "NIMBLE Chat Application": "NIMBLE Chat Application",
    "Research Paper on IOT malware detection":
      "IoT malware detection par research paper",
    "Sentiment Analysis using LASER": "LASER ka use karke Sentiment Analysis",
    "Java based Student Management Desktop Application":
      "Java based Student Management Desktop Application",
    "Portfolio V1": "Portfolio V1",
    "Chrome Extension for Text Summarization using BERT":
      "BERT se text summarization ke liye Chrome Extension",
    "Instagram Hashtag Finder": "Instagram Hashtag Finder",
    "Full Stack Engineer": "Full Stack Engineer",
    "Founder & Full Stack Engineer": "Founder & Full Stack Engineer",
    "Software Engineering Intern": "Software Engineering Intern",
    Founder: "Founder",
    "Remote, Europe": "Remote, Europe",
    Remote: "Remote",
    "Remote, New York, NY": "Remote, New York, NY",
    "Remote, India": "Remote, India",
    "May 2026 — Present": "May 2026 — Present",
    "March 2025 — May 2026": "March 2025 — May 2026",
    "December 2025 — Present": "December 2025 — Present",
    "September 2023 — December 2023": "September 2023 — December 2023",
    "September 2024 — February 2025": "September 2024 — February 2025",
    "2009 — 2021": "2009 — 2021",
    "2021 — 2025": "2021 — 2025",
    Nainital: "Nainital",
    Dehradun: "Dehradun",
    "Founded and developed Nixarcade, a Solana-powered multiplayer gaming platform.":
      "Nixarcade ko found aur develop kiya, jo Solana-powered multiplayer gaming platform hai.",
    "Architected Nixarcade using Solana libraries, enabling decentralized transactions for a gaming dApp.":
      "Solana libraries ke saath Nixarcade ka architecture banaya, jisse gaming dApp mein decentralized transactions enable hue.",
    "Secured funding from Solana Foundation and CoinDCX for development of the platform.":
      "Platform development ke liye Solana Foundation aur CoinDCX se funding secure ki.",
    "Built a completely on-chain fundraising platform for creating, sharing, and donating to campaigns.":
      "Campaigns create, share, aur donate karne ke liye completely on-chain fundraising platform banaya.",
    "Developed Solana programs for launching campaigns and receiving USDC donations directly on-chain.":
      "Campaign launch karne aur USDC donations directly on-chain receive karne ke liye Solana programs develop kiye.",
    "Enabled transparent fundraising with campaign and donation activity verifiable entirely on-chain.":
      "Campaign aur donation activity ko entirely on-chain verifiable bana kar transparent fundraising enable ki.",
    "Developed Stratus, a monitoring tool in Golang to track Website Performance and Security Issues.":
      "Stratus develop kiya, Golang mein ek monitoring tool jo website performance aur security issues track karta hai.",
    "Implemented as a command-line tool that accepts configuration files for setup.":
      "Isse command-line tool ke roop mein implement kiya jo setup ke liye configuration files accept karta hai.",
    "Integrated with automated email notifications to alert users of website issues.":
      "Website issues ke liye users ko alert karne ke liye automated email notifications integrate ki.",
    "Developed a notes app that stores data locally, ensuring privacy and offline accessibility.":
      "Ek notes app develop kiya jo data locally store karta hai, privacy aur offline access ensure karte hue.",
    "Integrated AI-powered real-time web search to fetch relevant topics dynamically.":
      "Relevant topics dynamically fetch karne ke liye AI-powered real-time web search integrate ki.",
    "Added AI-driven corrections and suggestions to improve content quality.":
      "Content quality improve karne ke liye AI-driven corrections aur suggestions add kiye.",
    "Developed a decentralized polling application powered by Rust smart contracts on the Solana blockchain.":
      "Solana blockchain par Rust smart contracts se powered decentralized polling application develop ki.",
    "Enabled secure and tamper-proof polls, leveraging blockchain decentralization.":
      "Blockchain decentralization ka use karke secure aur tamper-proof polls enable kiye.",
    "Designed a seamless sharing feature, allowing polls to be shared via simple links for user convenience.":
      "User convenience ke liye simple links se polls share karne wali seamless sharing feature design ki.",
    "Built a crypto payment gateway with multi-token payments, analytics, webhooks, and merchant notifications.":
      "Multi-token payments, analytics, webhooks, aur merchant notifications ke saath crypto payment gateway banaya.",
    "Integrated the Jupiter Swap API to automatically convert supported Solana tokens into USDC.":
      "Supported Solana tokens ko automatically USDC mein convert karne ke liye Jupiter Swap API integrate ki.",
    "Developed and published an NPM SDK to simplify payment integration for external applications.":
      "External applications ke liye payment integration simple banane ke liye NPM SDK develop aur publish ki.",
    "A document signer using the Dropbox API.":
      "Dropbox API ka use karne wala document signer.",
    "Allows users to send documents to multiple recipients, stores them in a database, and provides current document status.":
      "Users ko multiple recipients ko documents bhejne, database mein store karne, aur current document status dekhne deta hai.",
    "A marketplace for NFTs, powered by Tensor .trade API and Metaplex.":
      "NFTs ke liye marketplace, Tensor .trade API aur Metaplex se powered.",
    "Allows users to create NFTs and trade them in a decentralized marketplace.":
      "Users ko NFTs create karne aur decentralized marketplace mein trade karne deta hai.",
    "Developed a job search tool to provide relevant jobs according to the user resume and preferences.":
      "User resume aur preferences ke hisaab se relevant jobs dikhane ke liye job search tool develop kiya.",
    "Integrated Gemini for resume parsing and Google Search API for fetching job listings.":
      "Resume parsing ke liye Gemini aur job listings fetch karne ke liye Google Search API integrate ki.",
    "Complemented with a frontend that displays job headings, links, descriptions, and images.":
      "Frontend add kiya jo job headings, links, descriptions, aur images display karta hai.",
    "Built a simple faucet to transfer solana on the devnet to a users account.":
      "Devnet par users ke account mein Solana transfer karne ke liye simple faucet banaya.",
    "Mostly focused on the UI giving the website a mono-chorome theme.":
      "Mostly UI par focus kiya, website ko monochrome theme dete hue.",
    "Developed a multiplayer Ludo game with real-time actions using WebSockets.":
      "WebSockets ka use karke real-time actions wala multiplayer Ludo game develop kiya.",
    "Structured the project with Turborepo for efficient Monorepo management.":
      "Efficient monorepo management ke liye project ko Turborepo se structure kiya.",
    "Implemented Recoil for Efficient Global State Management, Enhancing Program Clarity.":
      "Efficient global state management aur better program clarity ke liye Recoil implement kiya.",
    "Personalized Linktree for storing social media links for fast access.":
      "Fast access ke liye social media links store karne wala personalized Linktree.",
    "Developed with Golang, featuring JWT for Secure Login, and Optimized for Speed.":
      "Golang se develop kiya, secure login ke liye JWT aur speed ke liye optimization ke saath.",
    "Deployed using Vercel, complemented by Golang backend on Render.":
      "Vercel par deploy kiya, Render par Golang backend ke saath.",
    "Developed a Linux container using Golang to enable isolated command execution.":
      "Isolated command execution enable karne ke liye Golang se Linux container develop kiya.",
    "Utilized a root file directory to create an Ubuntu image for a containerized operating system.":
      "Containerized operating system ke liye Ubuntu image create karne mein root file directory ka use kiya.",
    "Multi-language chatbot, with text encodings built using LASER.":
      "LASER se built text encodings wala multi-language chatbot.",
    "Provides easy 24/7 access with human-like support to users leveraging the Telegram API.":
      "Telegram API ka use karke users ko human-like support ke saath easy 24/7 access deta hai.",
    "Enhanced security through Telegram IDs with seamless integration facilitated by Docker.":
      "Docker se facilitated seamless integration ke saath Telegram IDs ke through security enhance ki.",
    "Video analysis tool for content creators, providing personalized video feedback.":
      "Content creators ke liye video analysis tool, personalized video feedback ke saath.",
    "Compare videos against creations from top 1% creators based on audio and visual elements.":
      "Audio aur visual elements ke basis par videos ko top 1% creators ke creations se compare karta hai.",
    "Deployed on AWS using Docker for Queue-based Worker Selection, and the Service on Vercel.":
      "Queue-based worker selection ke liye Docker ke saath AWS par deploy kiya, aur service Vercel par.",
    "Chat application with personal and group chat.":
      "Personal aur group chat wala chat application.",
    "Enabled with real-time communication using Websockets.":
      "WebSockets ka use karke real-time communication enable kiya.",
    "Implemented secure login standards in Node.js to ensure user security.":
      "User security ensure karne ke liye Node.js mein secure login standards implement kiye.",
    "Developed a Python-based chatbot desktop application with face recognition capabilities.":
      "Face recognition capabilities ke saath Python-based chatbot desktop application develop kiya.",
    "Facial recognition helps identify users and provide personalized greetings and interactions.":
      "Facial recognition users ko identify karne aur personalized greetings/interactions dene mein help karta hai.",
    "Designed a secure task management system that associates tasks with individual user profiles.":
      "Individual user profiles ke saath tasks associate karne wala secure task management system design kiya.",
    "Led IoT malware research using image models like VGG16, achieving 95.6% accuracy and 85% precision.":
      "VGG16 jaise image models ka use karke IoT malware research lead ki, 95.6% accuracy aur 85% precision achieve ki.",
    "Implemented Keras pre-trained models for enhanced image classification. Proficient in IoT security, deep learning, Keras, and Python.":
      "Enhanced image classification ke liye Keras pre-trained models implement kiye. IoT security, deep learning, Keras, aur Python mein proficient.",
    "Implemented a multilingual model that predicts sentiments.":
      "Sentiments predict karne wala multilingual model implement kiya.",
    "Trained using twiiter sentiment data, uses LASER for multilingual training.":
      "Twitter sentiment data par train kiya, multilingual training ke liye LASER use kiya.",
    "Developed a desktop application for educational institutions, serving as an information portal.":
      "Educational institutions ke liye information portal ke roop mein desktop application develop kiya.",
    "Implemented user management and access levels for enhanced data security.":
      "Enhanced data security ke liye user management aur access levels implement kiye.",
    "Designed separate login systems for administrators and users to ensure privacy.":
      "Privacy ensure karne ke liye administrators aur users ke liye separate login systems design kiye.",
    "This is the first personal portfolio I made":
      "Yeh mera pehla personal portfolio tha.",
    "Utilized Google BERT for real-time text summarization, enhancing user productivity.":
      "User productivity improve karne ke liye real-time text summarization mein Google BERT ka use kiya.",
    "Integrated as a Chrome extension for easy and accessible text summarization.":
      "Easy aur accessible text summarization ke liye Chrome extension ke roop mein integrate kiya.",
    "Search Engine to find the hashtag related to topics in instagram.":
      "Instagram topics se related hashtags find karne ke liye search engine.",
    "Built products end-to-end as one of 2 engineers across web, mobile, backend, and AI systems.":
      "Web, mobile, backend, aur AI systems across 2 engineers mein se ek ke roop mein products end-to-end build kiye.",
    "Developed Go workers for processing and analyzing application data, documents, and workflows.":
      "Application data, documents, aur workflows process/analyze karne ke liye Go workers develop kiye.",
    "Built real-time Next.js dashboards and a cross-platform Expo app for data visualization and operations.":
      "Data visualization aur operations ke liye real-time Next.js dashboards aur cross-platform Expo app banaya.",
    "Developed AI chat interfaces using MCP, enabling users to interact with data using natural language.":
      "MCP ka use karke AI chat interfaces develop kiye, jisse users natural language mein data se interact kar sakein.",
    "Built and shipped Expo applications for iOS and Android as part of a small 2-3 engineer team.":
      "Small 2-3 engineer team ka hissa hote hue iOS aur Android ke liye Expo applications build aur ship kiye.",
    "Developed Go workers for AI-powered data enrichment and automated image generation workflows.":
      "AI-powered data enrichment aur automated image generation workflows ke liye Go workers develop kiye.",
    "Built Next.js web applications and internal dashboards for managing and monitoring operations.":
      "Operations manage aur monitor karne ke liye Next.js web applications aur internal dashboards banaye.",
    "Developed serverless TypeScript backend services for application workflows and third-party integrations.":
      "Application workflows aur third-party integrations ke liye serverless TypeScript backend services develop ki.",
    "Founded and built Amatra, an AI-powered fashion social platform for discovering and sharing outfits.":
      "Amatra found aur build kiya, outfits discover/share karne ke liye AI-powered fashion social platform.",
    "Built and launched the Expo app with social features, virtual wardrobes, and AI virtual try-on.":
      "Social features, virtual wardrobes, aur AI virtual try-on ke saath Expo app build aur launch ki.",
    "Integrated Apple subscriptions with verification for managing paid plans and generation limits.":
      "Paid plans aur generation limits manage karne ke liye verification ke saath Apple subscriptions integrate ki.",
    "Developed the Go backend for authentication, payments, media storage, social feeds, and moderation.":
      "Authentication, payments, media storage, social feeds, aur moderation ke liye Go backend develop kiya.",
    "Contributed to Meta open-source projects Laser and Sacremoses, utilized by numerous companies.":
      "Meta ke open-source projects Laser aur Sacremoses mein contribute kiya, jo kai companies use karti hain.",
    "Rectified issues within language lists, enhancing user accessibility and comprehension.":
      "Language lists mein issues fix kiye, user accessibility aur comprehension improve karte hue.",
    "Attained full parity between Perl and Python scripts in the Sacremoses 0.1.0 release.":
      "Sacremoses 0.1.0 release mein Perl aur Python scripts ke beech full parity achieve ki.",
    "Conducted user demonstrations showcasing the functionalities of the Laser project.":
      "Laser project ki functionalities showcase karne ke liye user demonstrations conduct kiye.",
    "Founded Nixarcade, a Solana-powered multiplayer gaming platform.":
      "Nixarcade found kiya, jo Solana-powered multiplayer gaming platform hai.",
    "Architected the platform using Solana libraries, enabling decentralized transactions for the gaming dApp.":
      "Solana libraries ka use karke platform architect kiya, gaming dApp ke liye decentralized transactions enable karte hue.",
    "Secured funding from the Solana Foundation and CoinDCX for the platform's development.":
      "Platform development ke liye Solana Foundation aur CoinDCX se funding secure ki.",
    "Secondary (ICSE) and Higher Secondary (ISC)":
      "Secondary (ICSE) aur Higher Secondary (ISC)",
    "Bachelor of Technology in Computer Science and Engineering":
      "Computer Science and Engineering mein Bachelor of Technology",
    "One of the best technologies I've encountered recently! This might be because I'm relatively new to microservices, but gRPC is absolutely incredible.":
      "Recent mein mili best technologies mein se ek! Shayad kyunki main microservices mein relatively new hoon, lekin gRPC sach mein incredible hai.",
    "gRPC easily allows different systems in different languages to communicate with each other, irrespective of the programming language they use.":
      "gRPC different languages mein bane systems ko easily communicate karne deta hai, chahe programming language kuch bhi ho.",
    "Complete tutorial from installation to implementation with Go server, Go client, and TypeScript client examples.":
      "Installation se implementation tak complete tutorial, Go server, Go client, aur TypeScript client examples ke saath.",
    "Tech Lead at FAIR (Meta AI Research)":
      "FAIR (Meta AI Research) mein Tech Lead",
    "I am grateful for the opportunity to have co-mentored Siddharth during his MLH fellowship with Meta AI. Over the course of the program, Siddharth established himself as a core contributor of the laser_encoders¹ package, and made significant contributions to the AI research community. One such contribution was the resolution of a hard-to-find and longstanding bug with an existing open-sourced and widely used Python library in ML research. Siddharth not only found the solution, but also quickly sent a pull request to the project, and landed it! It was a pleasure to work with Siddharth, and I'm hoping that our paths will cross again sometime in the near future!":
      "Meta AI ke saath MLH fellowship ke dauran Siddharth ko co-mentor karne ka mauka milna mere liye valuable tha. Program ke dauran Siddharth ne laser_encoders¹ package ke core contributor ke roop mein apni jagah banayi aur AI research community mein meaningful contributions kiye. Unmein se ek contribution ML research mein widely used open-source Python library ke ek long-standing aur hard-to-find bug ko resolve karna tha. Siddharth ne sirf solution nahi nikala, balki quickly pull request bhejkar usse land bhi kiya. Siddharth ke saath kaam karna pleasure tha, aur mujhe umeed hai humare paths future mein phir cross honge!",
  },
  ja: {
    "NFT Marketplace": "NFT Marketplace",
    "Ludo Game": "Ludo Game",
    "Go Link Tree": "Go Link Tree",
    "Linux Container Developed Using Golang":
      "Golang で開発した Linux Container",
    "Telegram Chat Bot for Bank Users":
      "銀行ユーザー向け Telegram Chat Bot",
    "MERN Stack-based Chat Application":
      "MERN Stack ベースの Chat Application",
    "NIMBLE Chat Application": "NIMBLE Chat Application",
    "Research Paper on IOT malware detection":
      "IoT malware detection に関する Research Paper",
    "Sentiment Analysis using LASER": "LASER を使った Sentiment Analysis",
    "Java based Student Management Desktop Application":
      "Java ベースの Student Management Desktop Application",
    "Portfolio V1": "Portfolio V1",
    "Chrome Extension for Text Summarization using BERT":
      "BERT による Text Summarization 用 Chrome Extension",
    "Instagram Hashtag Finder": "Instagram Hashtag Finder",
    "Full Stack Engineer": "Full Stack Engineer",
    "Founder & Full Stack Engineer": "Founder & Full Stack Engineer",
    "Software Engineering Intern": "Software Engineering Intern",
    Founder: "Founder",
    "Remote, Europe": "Remote, Europe",
    Remote: "Remote",
    "Remote, New York, NY": "Remote, New York, NY",
    "Remote, India": "Remote, India",
    "May 2026 — Present": "May 2026 — Present",
    "March 2025 — May 2026": "March 2025 — May 2026",
    "December 2025 — Present": "December 2025 — Present",
    "September 2023 — December 2023": "September 2023 — December 2023",
    "September 2024 — February 2025": "September 2024 — February 2025",
    "2009 — 2021": "2009 — 2021",
    "2021 — 2025": "2021 — 2025",
    Nainital: "Nainital",
    Dehradun: "Dehradun",
    "Founded and developed Nixarcade, a Solana-powered multiplayer gaming platform.":
      "Solana を活用したマルチプレイヤーゲームプラットフォーム Nixarcade を創業し、開発しました。",
    "Architected Nixarcade using Solana libraries, enabling decentralized transactions for a gaming dApp.":
      "Solana ライブラリを使って Nixarcade を設計し、ゲーム dApp で分散型トランザクションを可能にしました。",
    "Secured funding from Solana Foundation and CoinDCX for development of the platform.":
      "プラットフォーム開発のため、Solana Foundation と CoinDCX から資金を獲得しました。",
    "Built a completely on-chain fundraising platform for creating, sharing, and donating to campaigns.":
      "キャンペーンの作成、共有、寄付を行う完全オンチェーンの資金調達プラットフォームを構築しました。",
    "Developed Solana programs for launching campaigns and receiving USDC donations directly on-chain.":
      "キャンペーン開始と USDC 寄付のオンチェーン受け取りのための Solana プログラムを開発しました。",
    "Enabled transparent fundraising with campaign and donation activity verifiable entirely on-chain.":
      "キャンペーンと寄付履歴をオンチェーンで検証できる、透明性の高い資金調達を実現しました。",
    "Developed Stratus, a monitoring tool in Golang to track Website Performance and Security Issues.":
      "Web サイトの性能とセキュリティ問題を追跡する Golang 製モニタリングツール Stratus を開発しました。",
    "Implemented as a command-line tool that accepts configuration files for setup.":
      "設定ファイルを受け取るコマンドラインツールとして実装しました。",
    "Integrated with automated email notifications to alert users of website issues.":
      "Web サイトの問題をユーザーへ通知する自動メール通知を統合しました。",
    "Developed a notes app that stores data locally, ensuring privacy and offline accessibility.":
      "データをローカルに保存し、プライバシーとオフライン利用を確保するノートアプリを開発しました。",
    "Integrated AI-powered real-time web search to fetch relevant topics dynamically.":
      "関連トピックを動的に取得する AI 搭載のリアルタイム Web 検索を統合しました。",
    "Added AI-driven corrections and suggestions to improve content quality.":
      "コンテンツ品質を高める AI ベースの修正と提案を追加しました。",
    "Developed a decentralized polling application powered by Rust smart contracts on the Solana blockchain.":
      "Solana 上の Rust スマートコントラクトで動く分散型投票アプリを開発しました。",
    "Enabled secure and tamper-proof polls, leveraging blockchain decentralization.":
      "ブロックチェーンの分散性を活かし、安全で改ざんに強い投票を実現しました。",
    "Designed a seamless sharing feature, allowing polls to be shared via simple links for user convenience.":
      "シンプルなリンクで投票を共有できる、使いやすい共有機能を設計しました。",
    "Built a crypto payment gateway with multi-token payments, analytics, webhooks, and merchant notifications.":
      "複数トークン決済、分析、Webhook、加盟店通知を備えた暗号資産決済ゲートウェイを構築しました。",
    "Integrated the Jupiter Swap API to automatically convert supported Solana tokens into USDC.":
      "Jupiter Swap API を統合し、対応する Solana トークンを自動的に USDC へ変換しました。",
    "Developed and published an NPM SDK to simplify payment integration for external applications.":
      "外部アプリの決済統合を簡単にする NPM SDK を開発・公開しました。",
    "A document signer using the Dropbox API.":
      "Dropbox API を使ったドキュメント署名ツールです。",
    "Allows users to send documents to multiple recipients, stores them in a database, and provides current document status.":
      "複数の受信者へ文書を送信し、データベースに保存し、現在の文書ステータスを表示できます。",
    "A marketplace for NFTs, powered by Tensor .trade API and Metaplex.":
      "Tensor .trade API と Metaplex を利用した NFT マーケットプレイスです。",
    "Allows users to create NFTs and trade them in a decentralized marketplace.":
      "ユーザーが NFT を作成し、分散型マーケットプレイスで取引できます。",
    "Developed a job search tool to provide relevant jobs according to the user resume and preferences.":
      "履歴書と希望条件に合わせて関連求人を提示する求人検索ツールを開発しました。",
    "Integrated Gemini for resume parsing and Google Search API for fetching job listings.":
      "履歴書解析に Gemini、求人取得に Google Search API を統合しました。",
    "Complemented with a frontend that displays job headings, links, descriptions, and images.":
      "求人タイトル、リンク、説明、画像を表示するフロントエンドを追加しました。",
    "Built a simple faucet to transfer solana on the devnet to a users account.":
      "devnet 上の Solana をユーザーアカウントへ送るシンプルな faucet を構築しました。",
    "Mostly focused on the UI giving the website a mono-chorome theme.":
      "主に UI に注力し、サイトにモノクロテーマを与えました。",
    "Developed a multiplayer Ludo game with real-time actions using WebSockets.":
      "WebSockets を使ったリアルタイム操作のマルチプレイヤー Ludo ゲームを開発しました。",
    "Structured the project with Turborepo for efficient Monorepo management.":
      "効率的なモノレポ管理のため Turborepo でプロジェクトを構成しました。",
    "Implemented Recoil for Efficient Global State Management, Enhancing Program Clarity.":
      "明確な状態管理のため Recoil を実装しました。",
    "Personalized Linktree for storing social media links for fast access.":
      "ソーシャルリンクへ素早くアクセスするための個人用 Linktree です。",
    "Developed with Golang, featuring JWT for Secure Login, and Optimized for Speed.":
      "Golang で開発し、安全なログインのため JWT を使い、速度も最適化しました。",
    "Deployed using Vercel, complemented by Golang backend on Render.":
      "Vercel にデプロイし、Render 上の Golang バックエンドと組み合わせました。",
    "Developed a Linux container using Golang to enable isolated command execution.":
      "隔離されたコマンド実行を可能にする Linux コンテナを Golang で開発しました。",
    "Utilized a root file directory to create an Ubuntu image for a containerized operating system.":
      "コンテナ化された OS のために root ファイルディレクトリから Ubuntu イメージを作成しました。",
    "Multi-language chatbot, with text encodings built using LASER.":
      "LASER によるテキストエンコーディングを使った多言語チャットボットです。",
    "Provides easy 24/7 access with human-like support to users leveraging the Telegram API.":
      "Telegram API を使い、24 時間いつでも人間らしいサポートを提供します。",
    "Enhanced security through Telegram IDs with seamless integration facilitated by Docker.":
      "Docker による統合と Telegram ID によってセキュリティを高めました。",
    "Video analysis tool for content creators, providing personalized video feedback.":
      "コンテンツ制作者向けに、個別の動画フィードバックを提供する動画分析ツールです。",
    "Compare videos against creations from top 1% creators based on audio and visual elements.":
      "音声と映像要素に基づき、上位 1% クリエイターの作品と動画を比較します。",
    "Deployed on AWS using Docker for Queue-based Worker Selection, and the Service on Vercel.":
      "キューベースのワーカー選択には Docker と AWS を使い、サービスは Vercel にデプロイしました。",
    "Chat application with personal and group chat.":
      "個人チャットとグループチャットに対応したチャットアプリです。",
    "Enabled with real-time communication using Websockets.":
      "WebSockets によりリアルタイム通信を実現しました。",
    "Implemented secure login standards in Node.js to ensure user security.":
      "ユーザーの安全のため Node.js で安全なログイン標準を実装しました。",
    "Developed a Python-based chatbot desktop application with face recognition capabilities.":
      "顔認識機能を備えた Python ベースのデスクトップチャットボットを開発しました。",
    "Facial recognition helps identify users and provide personalized greetings and interactions.":
      "顔認識でユーザーを識別し、個別の挨拶ややり取りを提供します。",
    "Designed a secure task management system that associates tasks with individual user profiles.":
      "個々のユーザープロファイルとタスクを紐付ける安全なタスク管理システムを設計しました。",
    "Led IoT malware research using image models like VGG16, achieving 95.6% accuracy and 85% precision.":
      "VGG16 などの画像モデルを用いた IoT マルウェア研究を主導し、95.6% の精度と 85% の precision を達成しました。",
    "Implemented Keras pre-trained models for enhanced image classification. Proficient in IoT security, deep learning, Keras, and Python.":
      "画像分類を強化するため Keras の事前学習モデルを実装しました。IoT セキュリティ、深層学習、Keras、Python に精通しています。",
    "Implemented a multilingual model that predicts sentiments.":
      "感情を予測する多言語モデルを実装しました。",
    "Trained using twiiter sentiment data, uses LASER for multilingual training.":
      "Twitter の感情データで学習し、多言語学習に LASER を使用しました。",
    "Developed a desktop application for educational institutions, serving as an information portal.":
      "教育機関向けの情報ポータルとしてデスクトップアプリを開発しました。",
    "Implemented user management and access levels for enhanced data security.":
      "データセキュリティ向上のため、ユーザー管理とアクセスレベルを実装しました。",
    "Designed separate login systems for administrators and users to ensure privacy.":
      "プライバシー確保のため、管理者とユーザーで別々のログインシステムを設計しました。",
    "This is the first personal portfolio I made":
      "これは私が初めて作った個人ポートフォリオです。",
    "Utilized Google BERT for real-time text summarization, enhancing user productivity.":
      "Google BERT を用いてリアルタイム要約を行い、ユーザーの生産性を高めました。",
    "Integrated as a Chrome extension for easy and accessible text summarization.":
      "簡単に使えるテキスト要約のため Chrome 拡張として統合しました。",
    "Search Engine to find the hashtag related to topics in instagram.":
      "Instagram のトピックに関連するハッシュタグを探す検索エンジンです。",
    "Built products end-to-end as one of 2 engineers across web, mobile, backend, and AI systems.":
      "2 人のエンジニアの一人として、Web、モバイル、バックエンド、AI システムを横断してプロダクトを end-to-end で構築しました。",
    "Developed Go workers for processing and analyzing application data, documents, and workflows.":
      "アプリケーションデータ、文書、ワークフローを処理・分析する Go worker を開発しました。",
    "Built real-time Next.js dashboards and a cross-platform Expo app for data visualization and operations.":
      "データ可視化と運用のため、リアルタイム Next.js ダッシュボードとクロスプラットフォーム Expo アプリを構築しました。",
    "Developed AI chat interfaces using MCP, enabling users to interact with data using natural language.":
      "MCP を使った AI チャットインターフェースを開発し、自然言語でデータとやり取りできるようにしました。",
    "Built and shipped Expo applications for iOS and Android as part of a small 2-3 engineer team.":
      "2〜3 人の小さなエンジニアチームで iOS/Android 向け Expo アプリを構築・出荷しました。",
    "Developed Go workers for AI-powered data enrichment and automated image generation workflows.":
      "AI によるデータ拡張と自動画像生成ワークフローのため Go worker を開発しました。",
    "Built Next.js web applications and internal dashboards for managing and monitoring operations.":
      "運用管理と監視のため Next.js Web アプリと内部ダッシュボードを構築しました。",
    "Developed serverless TypeScript backend services for application workflows and third-party integrations.":
      "アプリケーションワークフローと外部連携のため、serverless TypeScript バックエンドサービスを開発しました。",
    "Founded and built Amatra, an AI-powered fashion social platform for discovering and sharing outfits.":
      "服装の発見と共有を行う AI 搭載ファッションソーシャルプラットフォーム Amatra を創業・構築しました。",
    "Built and launched the Expo app with social features, virtual wardrobes, and AI virtual try-on.":
      "ソーシャル機能、仮想ワードローブ、AI バーチャル試着を備えた Expo アプリを構築・公開しました。",
    "Integrated Apple subscriptions with verification for managing paid plans and generation limits.":
      "有料プランと生成上限を管理するため、検証付き Apple サブスクリプションを統合しました。",
    "Developed the Go backend for authentication, payments, media storage, social feeds, and moderation.":
      "認証、決済、メディア保存、ソーシャルフィード、モデレーションのための Go バックエンドを開発しました。",
    "Contributed to Meta open-source projects Laser and Sacremoses, utilized by numerous companies.":
      "多くの企業で使われる Meta の open-source projects Laser と Sacremoses に貢献しました。",
    "Rectified issues within language lists, enhancing user accessibility and comprehension.":
      "言語リストの問題を修正し、ユーザーのアクセシビリティと理解しやすさを改善しました。",
    "Attained full parity between Perl and Python scripts in the Sacremoses 0.1.0 release.":
      "Sacremoses 0.1.0 release で Perl と Python scripts の完全な parity を達成しました。",
    "Conducted user demonstrations showcasing the functionalities of the Laser project.":
      "Laser project の機能を示すユーザーデモを実施しました。",
    "Founded Nixarcade, a Solana-powered multiplayer gaming platform.":
      "Solana を活用したマルチプレイヤーゲームプラットフォーム Nixarcade を創業しました。",
    "Architected the platform using Solana libraries, enabling decentralized transactions for the gaming dApp.":
      "Solana libraries を使って platform を設計し、gaming dApp の decentralized transactions を可能にしました。",
    "Secured funding from the Solana Foundation and CoinDCX for the platform's development.":
      "Platform development のため Solana Foundation と CoinDCX から funding を獲得しました。",
    "Secondary (ICSE) and Higher Secondary (ISC)":
      "Secondary (ICSE) と Higher Secondary (ISC)",
    "Bachelor of Technology in Computer Science and Engineering":
      "Computer Science and Engineering の Bachelor of Technology",
    "One of the best technologies I've encountered recently! This might be because I'm relatively new to microservices, but gRPC is absolutely incredible.":
      "最近出会った中でも最高の技術の一つです。microservices にまだ慣れていないからかもしれませんが、gRPC は本当に素晴らしいです。",
    "gRPC easily allows different systems in different languages to communicate with each other, irrespective of the programming language they use.":
      "gRPC は、使っているプログラミング言語に関係なく、異なる言語のシステム同士を簡単に通信させます。",
    "Complete tutorial from installation to implementation with Go server, Go client, and TypeScript client examples.":
      "インストールから実装まで、Go server、Go client、TypeScript client の例を含む完全なチュートリアルです。",
    "Tech Lead at FAIR (Meta AI Research)":
      "FAIR (Meta AI Research) の Tech Lead",
    "I am grateful for the opportunity to have co-mentored Siddharth during his MLH fellowship with Meta AI. Over the course of the program, Siddharth established himself as a core contributor of the laser_encoders¹ package, and made significant contributions to the AI research community. One such contribution was the resolution of a hard-to-find and longstanding bug with an existing open-sourced and widely used Python library in ML research. Siddharth not only found the solution, but also quickly sent a pull request to the project, and landed it! It was a pleasure to work with Siddharth, and I'm hoping that our paths will cross again sometime in the near future!":
      "Meta AI での MLH fellowship 中に Siddharth を共同メンターできたことを嬉しく思います。プログラムを通じて、Siddharth は laser_encoders¹ package の core contributor として存在感を示し、AI research community に大きく貢献しました。その一つが、ML research で広く使われる open-source Python library の、長年見つけにくかった bug を解決したことです。Siddharth は解決策を見つけただけでなく、すぐに pull request を送り、それを land させました。Siddharth と働けたことは喜びであり、近い将来また道が交わることを願っています。",
  },
}
