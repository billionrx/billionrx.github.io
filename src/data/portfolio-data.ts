import { StaticImageData } from "next/image";

export type SocialLink = {
  platform: string;
  url: string;
  icon: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string | StaticImageData;
  liveUrl?: string;
  sourceUrl?: string;
  featured?: boolean;
};

export type PortfolioData = {
  name: string;
  title: string;
  bio: {
    short: string;
    long: string;
  };
  socialLinks: SocialLink[];
  projects: Project[];
};

const portfolioData: PortfolioData = {
  name: "Dylan Hayashi",
  title: "Full Stack Developer",
  bio: {
    short:
      "Senior Full Stack Developer specializing in blockchain and cross-chain solutions",
    long: `I'm a Senior Full Stack Developer with extensive experience in both frontend and backend technologies. 
    I specialize in creating robust, scalable applications using React, Next.js, Node.js, and TypeScript with a strong focus on blockchain integration.
    As a full stack developer, I handle everything from designing responsive user interfaces to implementing complex server-side logic and database structures.
    My expertise includes smart contract development, wallet integration, and multi-chain support across Ethereum, Solana, Avalanche, and more.
    I'm passionate about delivering end-to-end solutions that combine powerful backend systems with intuitive frontend experiences.
    My full stack approach allows me to build complete applications that excel in both performance and user experience.`,
  },
  socialLinks: [
    {
      platform: "Twitter",
      url: "https://twitter.com/yourusername",
      icon: "twitter",
    },
  ],
  projects: [
    {
      id: "project-1",
      title: "AssetDash",
      description:
        "Cross-platform mobile portfolio tracking application supporting multiple blockchains including Solana, Ethereum, and Flow. Features real-time NFT tracking with live floor prices, DeFi portfolio integration across 10+ blockchains, and a rewards system with marketplace integration.",
      tags: ["React Native", "Web3.js", "Multi-Chain", "NFT", "DeFi"],
      imageUrl: "/images/projects/assetdash.jpg",
      liveUrl: "https://assetdash.com",
      featured: true,
    },
    {
      id: "project-2",
      title: "AssetDash Swap",
      description:
        "Token swap interface integrated with Jupiter protocol for Solana tokens. Implemented sub-$1 transaction fees, rewards system earning AssetDash Gold, and a seamless user experience with robust security features. Available on both web and mobile platforms.",
      tags: ["Solana", "Jupiter Protocol", "React", "Swap", "DeFi"],
      imageUrl: "/images/projects/swap.jpg",
      liveUrl: "https://swap.assetdash.com",
      featured: true,
    },
    {
      id: "project-3",
      title: "ParagonsDAO",
      description:
        "Official platform for ParagonsDAO, a Web3 gaming ecosystem. Designed and built with Next.js, TypeScript, and TailwindCSS. Integrated ConnectKit, Wagmi, and Viem for enhanced wallet functionality. Implemented staking flow using Ethers and Web3.js with interactive graphs.",
      tags: ["Next.js", "Web3", "Gaming", "DAO", "TypeScript"],
      imageUrl: "/images/projects/paragons.jpg",
      liveUrl: "https://paragonsdao.com",
      featured: true,
    },
    {
      id: "project-4",
      title: "Ithaca Protocol",
      description:
        "Blockchain protocol with staking functionality. Implemented UI/UX improvements and seamless staking flow with Ethers and Web3.js. Created interactive staking graphs with react-chartjs and integrated a Telegram bot for trading functionality.",
      tags: ["React", "Ethers.js", "Staking", "Charts", "DeFi"],
      imageUrl: "/images/projects/ithaca.jpg",
      liveUrl: "https://www.ithacaprotocol.io/",
    },
    {
      id: "project-5",
      title: "Vending Machines NFT",
      description:
        "NFT marketplace focused on digital collectibles. Built with React.js/TypeScript and integrated wallet connectivity. Implemented minting engine using ERC-721/721A standards for the Avalanche network with smart contracts for minting, airdrops, and rewards.",
      tags: ["NFT", "Avalanche", "React", "Smart Contracts", "Marketplace"],
      imageUrl: "/images/projects/vendingmachines.jpg",
      liveUrl: "https://vendingmachinesnft.io",
    },
    {
      id: "project-6",
      title: "Kodoit",
      description:
        "Software development company website showcasing services in web and mobile application development, blockchain solutions, and custom software. Built with modern web technologies focusing on performance and responsive design.",
      tags: ["Corporate Website", "Next.js", "Responsive", "UI/UX"],
      imageUrl: "/images/projects/kodoit.jpg",
      liveUrl: "https://kodoit.com",
    },
    {
      id: "project-7",
      title: "Youth Pastor Diet",
      description:
        "Health and fitness platform specifically designed for youth pastors. Features personalized diet plans, fitness tracking, and community features. Built with React for a responsive and interactive user experience.",
      tags: ["Health", "Fitness", "React", "Mobile-First", "Community"],
      imageUrl: "/images/projects/youthpastordiet.jpg",
      liveUrl: "https://youthpastordiet.com",
    },
    {
      id: "project-8",
      title: "Bombfell",
      description:
        "E-commerce and subscription service platform with personalized shopping experience. Implemented secure payment processing, subscription management, and inventory systems.",
      tags: ["E-commerce", "Subscription", "React", "Payment Integration"],
      imageUrl: "/images/projects/bombfell.jpg",
      liveUrl: "https://bombfell.com",
    },
    {
      id: "project-9",
      title: "MIP Network",
      description:
        "Professional networking platform designed for specific industry segments. Features include user profiles, job listings, messaging system, and content sharing. Built with React and modern state management patterns.",
      tags: ["Networking", "Social Platform", "React", "User Management"],
      imageUrl: "/images/projects/mipnetwork.jpg",
      liveUrl: "https://mipnetwork.com",
    },

    // Mobile App Projects
    {
      id: "mobile-1",
      title: "Girl2Girl Wall",
      description:
        "Community mobile app for teenage girls with safe space for discussions, support, and resources. Features include posts, comments, user profiles, and moderated content for a positive community experience.",
      tags: ["iOS", "Social", "Community", "React Native", "API Integration"],
      imageUrl: "/images/projects/girl2girl.jpg",
      liveUrl: "https://apps.apple.com/us/app/girl2girl-wall/id1227495720",
    },
    {
      id: "mobile-2",
      title: "Fantasy Alpha",
      description:
        "Fantasy sports analytics application providing real-time statistics, player insights, draft recommendations, and performance tracking. Helps users make data-driven decisions for their fantasy teams.",
      tags: [
        "iOS",
        "Sports",
        "Analytics",
        "React Native",
        "Data Visualization",
      ],
      imageUrl: "/images/projects/fantasyalpha.jpg",
      liveUrl: "https://apps.apple.com/us/app/fantasy-alpha/id1468198404",
    },
    {
      id: "mobile-3",
      title: "JamBase",
      description:
        "Live music discovery platform for finding concerts, festivals and tour dates. Features artist tracking, ticket purchasing, personalized recommendations, and venue information across iOS and Android platforms.",
      tags: ["iOS", "Android", "Music", "Events", "Cross-Platform"],
      imageUrl: "/images/projects/jambase.jpg",
      liveUrl: "https://apps.apple.com/us/app/jambase/id291878172",
    },
    {
      id: "mobile-4",
      title: "Whim",
      description:
        "Lifestyle app for spontaneous activities and experiences. Helps users discover local events, restaurants, and entertainment options based on their preferences, location, and availability.",
      tags: ["Android", "Lifestyle", "Location-Based", "React Native"],
      imageUrl: "/images/projects/whim.jpg",
      liveUrl: "https://play.google.com/store/apps/details?id=com.whim.android",
    },
    {
      id: "mobile-5",
      title: "Tapp",
      description:
        "Mobile payment and digital wallet application with contactless payment, money transfer, and transaction tracking features. Secure and intuitive interface for managing personal finances.",
      tags: ["iOS", "Android", "FinTech", "Digital Wallet", "Payment"],
      imageUrl: "/images/projects/tapp.jpg",
      liveUrl: "https://apps.apple.com/us/app/tapp/id1501205634",
    },
    {
      id: "mobile-6",
      title: "Reveel - Discover, Save, Earn",
      description:
        "Shopping rewards app offering cashback, discounts, and personalized deals. Integrated with major retailers to provide users with savings opportunities and loyalty rewards when shopping online or in-store.",
      tags: ["iOS", "E-commerce", "Rewards", "Cashback", "Shopping"],
      imageUrl: "/images/projects/reveel.jpg",
      liveUrl:
        "https://apps.apple.com/us/app/reveel-discover-save-earn/id1576558381",
    },
    {
      id: "mobile-7",
      title: "Coalllite Wallet",
      description:
        "Secure cryptocurrency wallet for managing digital assets. Features include multi-currency support, transaction history, market statistics, and enhanced security protocols for protecting crypto investments.",
      tags: ["Android", "Crypto", "Wallet", "Blockchain", "Security"],
      imageUrl: "/images/projects/coallite.jpg",
      liveUrl:
        "https://play.google.com/store/apps/details?id=com.wisempay.coallitewallet",
    },
    {
      id: "mobile-8",
      title: "Dirt Cheap Deal Finder",
      description:
        "Shopping app for finding discounted products and deals. Aggregates sales and promotions from various retailers, allowing users to compare prices, set alerts for price drops, and discover limited-time offers.",
      tags: ["Android", "Shopping", "Deals", "E-commerce", "Price Tracking"],
      imageUrl: "/images/projects/dirtcheap.jpg",
      liveUrl:
        "https://play.google.com/store/apps/details?id=com.dirtcheap.dealfinder3",
    },
    {
      id: "mobile-9",
      title: "CCM California",
      description:
        "Church community mobile app with event calendar, sermon recordings, donation capabilities, and member resources. Designed to enhance communication and engagement within the church community.",
      tags: ["Android", "Community", "Religious", "Events", "Content"],
      imageUrl: "/images/projects/ccmcalifornia.jpg",
      liveUrl: "https://play.google.com/store/apps/details?id=com.ccmcali.app4",
    },
    {
      id: "mobile-10",
      title: "Nursing Admin",
      description:
        "Healthcare administration app for nursing professionals. Features include shift scheduling, patient management, treatment tracking, and secure communication between healthcare staff.",
      tags: ["Android", "Healthcare", "Admin", "Professional", "Scheduling"],
      imageUrl: "/images/projects/nursingadmin.jpg",
      liveUrl:
        "https://play.google.com/store/apps/details?id=com.nursing.admin",
    },
  ],
};

export default portfolioData;
