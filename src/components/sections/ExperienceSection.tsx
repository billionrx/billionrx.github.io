"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  RiBriefcase4Fill,
  RiCalendar2Fill,
  RiArrowRightSFill,
} from "react-icons/ri";

export default function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      company: "AssetDash",
      role: "Senior Frontend Web3 Developer",
      period: "May 2024",
      achievements: [
        "Architected and developed cross-platform mobile portfolio tracking application supporting multiple blockchains including Solana, Ethereum, and Flow",
        "Implemented real-time NFT portfolio tracking with live floor prices across multiple chains (ETH, SOL, Ordinals)",
        "Built and optimized token swap interface integrated with Jupiter protocol, achieving sub-$1 transaction fees",
        "Developed rewards system (AssetDash Gold) with marketplace integration for NFTs, gaming items, and whitelist access",
        "Created real-time whale tracking dashboard to monitor large-scale memecoin transactions",
        "Integrated multi-chain DeFi portfolio tracking across 10+ blockchains including Avalanche, BSC, and Polygon",
        "Built responsive cross-platform UI supporting iOS and Android using React Native",
        "Implemented secure wallet connection and transaction signing across multiple chains",
        "Achieved 99.9% uptime for critical portfolio tracking features",
      ],
      techStack:
        "React Native, Web3.js, Ethers.js, GraphQL, TypeScript, Jupiter SDK",
    },
    {
      id: 2,
      company: "Ithaca Protocol",
      role: "Web3 Developer",
      period: "Dec 2024 - Mar 2024",
      achievements: [
        "Implemented new features and improved the UI/UX of the company website, utilizing React and hooks",
        "Replicated a complex trading feature into a Telegram bot using node-telegram-bot-api and various graph libraries",
        "Leveraged Ethers, Web3, and Next.js to seamlessly implement the staking flow, ensuring smooth and secure transactions for users",
        "Developed interactive staking graphs with react-chartjs, providing users with a visual representation of their staking status and historical data",
      ],
      techStack: "React, Next.js, Web3.js, Ethers.js, TypeScript, Chart.js",
    },
    {
      id: 3,
      company: "ParagonsDAO",
      role: "Full-Stack Web3 Developer",
      period: "Sep 2022 - Nov 2023",
      achievements: [
        "Designed, developed, and maintained the company's official website, employing Next.js, TypeScript, and TailwindCSS",
        "Seamlessly integrated third-party tools and platforms such as ConnectKit, Wagmi, and Viem to enhance website functionality",
        "Leveraged Ethers, Web3, and Next.js to implement the staking flow, ensuring a smooth and secure transaction process",
        "Developed interactive staking graphs using react-chartjs, offering users a visual representation of their staking status",
        "Utilized GraphQL for efficient on-chain data extraction, ensuring timely and accurate reading of transaction records",
        "Engineered a sophisticated player management system, enabling users to purchase NFTs and update metadata",
      ],
      techStack:
        "Next.js, TypeScript, TailwindCSS, Ethers.js, Web3.js, GraphQL, ConnectKit, Wagmi",
    },
    {
      id: 4,
      company: "Self-Employed",
      role: "Full-Stack Developer",
      period: "June 2016 – Sep 2022",
      achievements: [
        "Created smart contracts, built and deployed NFT marketplaces using Web3",
        "Utilized Solidity, Infura.io, OpenZeppelin libraries for blockchain development",
        "Built frontends using React.js and TypeScript with Metamask integration using web3-react",
        "Implemented swap UI using pancakeswap/uikit and interfaces to access smart contracts using ethers.js",
        "Created smart contracts for NFT minting, transferring ERC-721 tokens, airdrops and more",
        "Developed community-based mobile apps, event ticketing apps, and delivery apps",
        "Integrated payment systems using Stripe and Plaid APIs, configured subscription models",
      ],
      techStack:
        "React.js, Next.js, TypeScript, Solidity, Web3.js, Ethers.js, OpenZeppelin, Infura, React Native, Flutter",
    },
    {
      id: 5,
      company: "Bosswap Finance",
      role: "Full-stack Web3 Engineer",
      period: "Sep 2021 – Feb 2022",
      achievements: [
        "Created a DeFi platform that runs on Harmony Ethereum compatible network",
        "Built frontend UI using React.js and TypeScript with Metamask wallet integration",
        "Implemented chat UI to display different token price history",
        "Developed smart contracts for mining farming tokens using Solidity",
      ],
      techStack:
        "React.js, TypeScript, Solidity, Infura, ERC-20/721/1155, DeFi, Ethereum, Hardhat, Truffle",
    },
    {
      id: 6,
      company: "VendingMachine NFT",
      role: "Full-stack Web3 Developer",
      period: "May 2021 – Oct 2021",
      achievements: [
        "Created NFT minting website and NFT marketplace using React.js/TypeScript",
        "Integrated connect wallet functionality for seamless user experience",
        "Implemented minting engine using ERC-20, 721, 721A standards targeted to the Avalanche network",
        "Built smart contracts for minting, airdrop, giveaway, presale, and minting rewards",
        "Designed and implemented user-friendly interfaces for NFT browsing and transactions",
      ],
      techStack:
        "React.js, TypeScript, Solidity, Infura, Moralis API, IPFS, Ethers.js, Hardhat, Truffle, Ganache",
    },
    {
      id: 7,
      company: "DCSL GuideSmiths",
      role: "Mobile Application Developer",
      period: "June 2014 – Mar 2016",
      achievements: [
        "Built several mobile applications using Android, iOS, React Native, and Flutter",
        "Implemented Authentication Flow using Google, Apple, Facebook, and SSO (Single Sign-On)",
        "Integrated various Google APIs into the app - Google Map API, Translation API, Cloud API, Retail API",
        "Developed responsive and intuitive user interfaces following platform-specific design guidelines",
        "Collaborated with design and backend teams to ensure seamless app functionality",
      ],
      techStack:
        "React Native, Flutter, Android (Java/Kotlin), iOS (Swift/Objective-C), Google APIs, Firebase",
    },
    {
      id: 8,
      company: "Codetribe",
      role: "Software Developer",
      period: "Apr 2013 – May 2014",
      achievements: [
        "Developed mobile apps from the ground up using React Native and Flutter",
        "Configured project structure and application skeleton for optimal performance",
        "Implemented Login/Register flow with Facebook, Google, Apple, Twitter login and OAuth",
        "Built complex mobile apps with 20+ screens and various functionalities",
        "Collaborated with design team to implement responsive UI components",
      ],
      techStack:
        "React Native, Flutter, JavaScript, TypeScript, RESTful APIs, OAuth, Firebase",
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 md:py-28 bg-gradient-to-b from-indigo-50 to-pink-50 dark:from-indigo-950 dark:to-purple-950 overflow-hidden relative"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-blue-300 dark:bg-blue-700 rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute bottom-40 left-20 w-16 h-16 bg-purple-300 dark:bg-purple-700 rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute bottom-60 right-40 w-12 h-12 bg-pink-300 dark:bg-pink-700 rounded-full opacity-30 animate-bounce"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="text-lg bg-indigo-300 dark:bg-indigo-600 text-indigo-900 dark:text-white px-6 py-2 rounded-full inline-block transform rotate-2 shadow-md mb-4"
            initial={{ rotate: 0 }}
            animate={{ rotate: [2, -2, 2] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
            style={{
              fontFamily:
                "'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif",
            }}
          >
            My Journey!
          </motion.span>

          <h2
            className="text-3xl md:text-5xl font-bold text-indigo-600 dark:text-indigo-300 mb-4"
            style={{
              textShadow:
                "2px 2px 0px #6366F1, 4px 4px 0px rgba(99, 102, 241, 0.3)",
              fontFamily:
                "'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif",
            }}
          >
            Work Experience
          </h2>

          <div className="w-32 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-6 rounded-full"></div>

          <p
            className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-lg"
            style={{
              fontFamily:
                "&apos;Comic Sans MS&apos;, &apos;Chalkboard SE&apos;, &apos;Comic Neue&apos;, sans-serif",
            }}
          >
            Here&apos;s what I&apos;ve been up to in my professional adventures!
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-4 bg-gradient-to-b from-indigo-400 to-purple-400 rounded-full opacity-30 dark:opacity-20 hidden md:block"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div
                  className={`flex flex-col md:flex-row ${
                    index % 2 === 0 ? "" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content Card */}
                  <motion.div
                    className={`bg-white dark:bg-indigo-900/40 rounded-3xl p-6 shadow-xl border-2 border-indigo-100 dark:border-indigo-800 md:w-[calc(50%-2rem)] relative z-10 mx-auto md:mx-0 ${
                      index % 2 === 0
                        ? "md:mr-auto transform rotate-1"
                        : "md:ml-auto transform -rotate-1"
                    }`}
                    whileHover={{ rotate: index % 2 === 0 ? -1 : 1 }}
                  >
                    {/* Company bubble */}
                    <div className="absolute -top-5 left-8 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-xl shadow-md">
                      <p
                        className="font-bold"
                        style={{
                          fontFamily:
                            "'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif",
                        }}
                      >
                        {exp.company}
                      </p>
                    </div>

                    <div className="mt-6">
                      <h3
                        className="text-xl font-bold text-indigo-600 dark:text-indigo-300 mb-1"
                        style={{
                          fontFamily:
                            "'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif",
                        }}
                      >
                        {exp.role}
                      </h3>

                      <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                        <RiCalendar2Fill className="mr-2" />
                        <span
                          style={{
                            fontFamily:
                              "'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif",
                          }}
                        >
                          {exp.period}
                        </span>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {exp.achievements.map((item, i) => (
                          <li
                            key={i}
                            className="flex text-gray-700 dark:text-gray-300"
                          >
                            <RiArrowRightSFill className="text-indigo-500 dark:text-indigo-400 flex-shrink-0 mt-1" />
                            <span
                              style={{
                                fontFamily:
                                  "'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif",
                              }}
                            >
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-4 pt-4 border-t-2 border-indigo-100 dark:border-indigo-800">
                        <p className="text-sm text-indigo-600 dark:text-indigo-400 font-bold">
                          <span
                            style={{
                              fontFamily:
                                "&apos;Comic Sans MS&apos;, &apos;Chalkboard SE&apos;, &apos;Comic Neue&apos;, sans-serif",
                            }}
                          >
                            Tech Magic: {exp.techStack}
                          </span>
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Timeline dot for md screens */}
                  <div className="hidden md:block absolute left-1/2 top-10 transform -translate-x-1/2 w-10 h-10 bg-indigo-500 dark:bg-indigo-400 rounded-full z-20 border-4 border-white dark:border-indigo-950">
                    <RiBriefcase4Fill className="text-white dark:text-indigo-950 w-5 h-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
