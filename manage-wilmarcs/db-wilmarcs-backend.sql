-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 07, 2026 at 06:57 AM
-- Server version: 11.8.3-MariaDB-log
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `u615275088_manage`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `uname` varchar(300) NOT NULL,
  `pass` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `uname`, `pass`) VALUES
(1, 'admin', '$2y$10$ChlYPrNYFhrnzlxm4YHmQ.I5FtOUwhGHCZyvZWRYNxw3Z84Vq/ATK');

-- --------------------------------------------------------

--
-- Table structure for table `blog`
--

CREATE TABLE `blog` (
  `bid` int(11) NOT NULL,
  `fkcid` int(11) DEFAULT NULL,
  `bltitle` varchar(255) DEFAULT NULL,
  `blimg` varchar(255) DEFAULT NULL,
  `bldesc` text DEFAULT NULL,
  `bldt` datetime DEFAULT NULL,
  `blslug` varchar(255) DEFAULT NULL,
  `bexcerpt` text DEFAULT NULL,
  `btags` text DEFAULT NULL,
  `seotitle` varchar(255) DEFAULT NULL,
  `seodesc` text DEFAULT NULL,
  `seokeywords` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Dumping data for table `blog`
--

INSERT INTO `blog` (`bid`, `fkcid`, `bltitle`, `blimg`, `bldesc`, `bldt`, `blslug`, `bexcerpt`, `btags`, `seotitle`, `seodesc`, `seokeywords`) VALUES
(1, 17, 'How to Create a Standout Corporate Video- Insights from our team', 'blog1.jpg', NULL, '2025-12-20 20:49:22', 'how-to-create-a-standout-corporate-video-insights-from-our-team', 'As a leading video production company in Bangalore, Wilmarcs Motion Pictures has extensive experience in crafting compelling corporate videos that captivate audiences and drive results....', NULL, 'How to Create a Standout Corporate Video- Insights from our team', 'As a leading video production company in Bangalore, Wilmarcs Motion Pictures has extensive experience in crafting compelling corporate videos that captivate audiences and drive results....', NULL),
(2, 17, 'Maximizing Brand Visibility with High-Impact Corporate Videos', 'blog2.jpg', NULL, '2025-12-20 20:49:22', 'maximizing-brand-visibility-with-high-impact-corporate-videos', 'In today’s digital age, standing out in a crowded market is crucial for businesses of all sizes. One of the most effective ways to enhance...', NULL, 'Maximizing Brand Visibility with High-Impact Corporate Videos', 'In today’s digital age, standing out in a crowded market is crucial for businesses of all sizes. One of the most effective ways to enhance...', NULL),
(3, 17, 'Corporate Videographer vs. Commercial Videographer: What’s the Difference?', 'blog3.jpg', NULL, '2025-12-20 20:49:22', 'corporate-videographer-vs-commercial-videographer-whats-the-difference', 'In the world of video production, understanding the roles of a corporate videographer and a commercial videographer is essential for businesses looking to create impactful...', NULL, 'Corporate Videographer vs. Commercial Videographer: What’s the Difference?', 'In the world of video production, understanding the roles of a corporate videographer and a commercial videographer is essential for businesses looking to create impactful...', NULL),
(4, 17, 'How a Video Production Company Transforms Corporate Communication?', 'blog4.jpg', NULL, '2025-12-20 20:49:22', 'how-a-video-production-company-transforms-corporate-communication', 'In today’s fast-paced corporate world, the need for streamlined and effective communication has never been more urgent. High-quality videos are no longer a luxury but...', NULL, 'How a Video Production Company Transforms Corporate Communication?', 'In today’s fast-paced corporate world, the need for streamlined and effective communication has never been more urgent. High-quality videos are no longer a luxury but...', NULL),
(5, 17, 'Why Startups Need High-Quality Product Demos to Stand Out in a Competitive Market', 'blog5.jpg', NULL, '2025-12-20 20:49:22', 'why-startups-need-high-quality-product-demos-to-stand-out-in-a-competitive-market', 'In today’s crowded marketplace, startups face the challenge of making their products stand out. One of the most effective ways to achieve this is through...', NULL, 'Why Startups Need High-Quality Product Demos to Stand Out in a Competitive Market', 'In today’s crowded marketplace, startups face the challenge of making their products stand out. One of the most effective ways to achieve this is through...', NULL),
(6, 17, 'The Role of Corporate Videos in Creating Effective Onboarding Programs', 'blog6.jpg', NULL, '2025-12-20 20:49:22', 'the-role-of-corporate-videos-in-creating-effective-onboarding-programs', 'In today’s fast-paced corporate world, onboarding plays a crucial role in setting the stage for new employees’ success. A well-structured onboarding program not only helps...', NULL, 'The Role of Corporate Videos in Creating Effective Onboarding Programs', 'In today’s fast-paced corporate world, onboarding plays a crucial role in setting the stage for new employees’ success. A well-structured onboarding program not only helps...', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `cid` int(11) NOT NULL,
  `cname` varchar(300) NOT NULL,
  `cdesc` text DEFAULT NULL,
  `ctype` int(11) NOT NULL DEFAULT 1 COMMENT '1-services, 2-portfolio, 3-blog',
  `cslug` varchar(255) DEFAULT NULL,
  `cimg` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`cid`, `cname`, `cdesc`, `ctype`, `cslug`, `cimg`) VALUES
(1, 'Live‑Action Production', 'Corporate narratives, brand films, documentaries, testimonials, event stories, and cause-driven cinema — crafted for real impact.', 1, 'live-action-production', 'live-action-production.jpg'),
(2, 'Animation & Motion', '2D and 3D explainers, product visualizations, motion titles, medical and tech animations — precision built for visual clarity and style.', 1, 'animation-motion', 'animation-motion.jpg'),
(3, 'Social & Performance', 'Reels, Shorts, TikToks, creator-led ads, teasers, and sizzles — built to stop thumbs and start conversations.', 1, 'social-performance', 'social-performance.jpg'),
(4, 'Innovation', 'AI-driven storyboards, virtual production, LiDAR scanning, real-time multicam, and interactive video — the future of filmmaking, now.', 1, 'innovation', 'innovation.jpg'),
(5, 'Post‑Production Studio', 'Editing, color, sound, and finishing that transform footage into cinema. Wilmarcs’ signature precision — independent, elevated, and unmistakable.', 1, 'post-production-studio', 'post-production-studio.jpg'),
(9, 'Event Videos', NULL, 2, NULL, NULL),
(10, 'Corporate Videos', NULL, 2, NULL, NULL),
(11, 'CSR & Documentaries', NULL, 2, NULL, NULL),
(12, 'Product Videos', NULL, 2, NULL, NULL),
(13, 'Commercial Videos', NULL, 2, NULL, NULL),
(14, 'Property Videos', NULL, 2, NULL, NULL),
(15, '2D Animated video', NULL, 2, NULL, NULL),
(17, 'Event Videos', NULL, 3, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `content`
--

CREATE TABLE `content` (
  `cid` int(11) NOT NULL,
  `page` varchar(255) DEFAULT NULL,
  `seotitle` varchar(255) DEFAULT NULL,
  `seodesc` text DEFAULT NULL,
  `seokeywords` text DEFAULT NULL,
  `slug` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `content`
--

INSERT INTO `content` (`cid`, `page`, `seotitle`, `seodesc`, `seokeywords`, `slug`) VALUES
(1, 'Home', 'Home | Wilmarcs', '', '', 'home'),
(2, 'About us', 'Wilmarcs', NULL, NULL, 'about-us'),
(3, 'Services', 'Wilmarcs', NULL, NULL, 'services'),
(4, 'Portfolio', 'Wilmarcs', NULL, NULL, 'portfolio'),
(5, 'Industries', 'Wilmarcs', NULL, NULL, 'industries'),
(6, 'Blog', 'Wilmarcs', NULL, NULL, 'blog'),
(7, 'Contact', 'Wilmarcs', NULL, NULL, 'contact'),
(8, 'Industries - Travel & Hospitality', 'Wilmarcs', NULL, NULL, 'travel-hospitality'),
(10, 'Industries - Tech / SaaS', 'Wilmarcs', NULL, NULL, 'tech-saas'),
(11, 'Industries - Real Estate', 'Wilmarcs', NULL, NULL, 'real-estate'),
(12, 'Industries - Post-Production', 'Wilmarcs', NULL, NULL, 'post-production'),
(13, 'Industries - CSR Video', 'Wilmarcs', NULL, NULL, 'csr-video'),
(14, 'Industries - Media & Entertainment', 'Wilmarcs', NULL, NULL, 'media-entertainment'),
(15, 'Industries - Manufacturing', 'Wilmarcs', NULL, NULL, 'manufacturing'),
(16, 'Industries - Healthcare', 'Wilmarcs', NULL, NULL, 'healthcare'),
(17, 'Industries - FinTech', 'Wilmarcs', NULL, NULL, 'fintech'),
(18, 'Industries - Education', 'Wilmarcs', NULL, NULL, 'education'),
(19, 'Industries - E-Commerce', 'Wilmarcs', NULL, NULL, 'e-commerce');

-- --------------------------------------------------------

--
-- Table structure for table `portfolio`
--

CREATE TABLE `portfolio` (
  `pid` int(11) NOT NULL,
  `fkcid` int(11) DEFAULT NULL,
  `ptitle` varchar(255) DEFAULT NULL,
  `phtitle` varchar(255) DEFAULT NULL,
  `phsubtitle` varchar(255) DEFAULT NULL,
  `home` int(11) NOT NULL DEFAULT 0,
  `pimg` varchar(255) DEFAULT NULL,
  `plink` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Dumping data for table `portfolio`
--

INSERT INTO `portfolio` (`pid`, `fkcid`, `ptitle`, `phtitle`, `phsubtitle`, `home`, `pimg`, `plink`) VALUES
(1, 9, 'Accel Connect 2025', NULL, NULL, 0, 'p11.jpg', 'https://www.youtube.com/embed/1-yIHSPMWWE'),
(2, 9, 'Spark By Hilton', NULL, NULL, 0, 'p12.jpg', 'https://www.youtube.com/embed/d0HQCCcY13E'),
(3, 9, 'Nimhans (IAWMH)', NULL, NULL, 0, 'p13.jpg', 'https://www.youtube.com/embed/PlW0RXJ9IbY'),
(4, 9, 'Selco impact Failure', NULL, NULL, 0, 'p14.jpg', 'https://www.youtube.com/embed/6VQ6SzVmbPM'),
(5, 9, 'WeWork Diwali', NULL, NULL, 0, 'p15.jpg', 'https://www.youtube.com/embed/0tNql9uxZVA'),
(6, 9, 'CRED', NULL, NULL, 0, 'p16.jpg', 'https://www.youtube.com/embed/DiqsR1HY1NM'),
(7, 10, 'Amaha Brand Film', NULL, NULL, 0, 'p21.jpg', 'https://www.youtube.com/embed/bXBpotIHW7Q'),
(8, 10, 'Himalaya Manufacturing Facility', NULL, NULL, 0, 'p22.jpg', 'https://www.youtube.com/embed/DQac4PHsPX4'),
(9, 10, 'Himalaya Partnership', NULL, NULL, 0, 'p23.jpg', 'https://www.youtube.com/embed/We7BStImxTI'),
(10, 10, 'Himalaya Energy Video', NULL, NULL, 0, 'p24.jpg', 'https://www.youtube.com/embed/alKe9GRc4K4'),
(11, 10, 'Akshaya Patra Foundation', NULL, NULL, 0, 'p25.jpg', 'https://www.youtube.com/embed/aVyfbWWIK6w'),
(12, 11, 'Mangrove Day', NULL, NULL, 0, 'p31.jpg', 'https://www.youtube.com/embed/tzIq68pUFRU'),
(13, 11, 'One Million Trees', NULL, NULL, 0, 'p32.jpg', 'https://www.youtube.com/embed/yPAIfXl5xN8'),
(14, 11, 'Manal Student Stories', NULL, NULL, 0, 'p33.jpg', 'https://www.youtube.com/embed/7cXdx2Tc75s'),
(15, 11, 'Himalaya Mural Video', NULL, NULL, 0, 'p34.jpg', 'https://www.youtube.com/embed/er_q-iqBugE'),
(16, 11, 'TESCO', NULL, NULL, 0, 'p35.jpg', 'https://www.youtube.com/embed/abDdPdJ16Mc'),
(17, 11, 'Kissan Mitra Signature Film On Farmer', NULL, NULL, 0, 'p36.jpg', 'https://www.youtube.com/embed/hjDlwEG7fQU'),
(18, 12, 'Neuralzome', NULL, NULL, 0, 'p41.jpg', 'https://www.youtube.com/embed/oM0CD1gW3UM'),
(19, 12, 'Triumph Launch Film', NULL, NULL, 0, 'p42.jpg', 'https://www.youtube.com/embed/sJBakSn_6YU'),
(20, 12, 'Gro Cycle', NULL, NULL, 0, 'p43.jpg', 'https://www.youtube.com/embed/RhX1qaSOMfA'),
(21, 12, 'Himalaya Wellness Company', NULL, NULL, 0, 'p44.jpg', 'https://www.youtube.com/embed/98Aodd3ax8o'),
(22, 12, 'Red Bull', NULL, NULL, 0, 'p45.jpg', 'https://www.youtube.com/embed/m3xjNaeixp4'),
(23, 13, 'Akshapatra Meals for Smiles', NULL, NULL, 0, 'p51.jpg', 'https://www.youtube.com/embed/PfztbEDR_Sw'),
(24, 13, 'Himalaya Mindful Strides', NULL, NULL, 0, 'p52.jpg', 'https://www.youtube.com/embed/TKzUHSS5jG0'),
(25, 13, 'Himalaya School Ad', NULL, NULL, 0, 'p53.jpg', 'https://www.youtube.com/embed/n9Fr51MefHM'),
(26, 14, 'Sheraton', NULL, NULL, 0, 'p61.jpg', 'https://www.youtube.com/embed/Yv-oJDAH5Dc'),
(27, 14, 'Malabar Ocean Front Resort', NULL, NULL, 0, 'p62.jpg', 'https://www.youtube.com/embed/o7eK6fM0-7A'),
(28, 14, 'Serai Resorts', NULL, NULL, 0, 'p63.jpg', 'https://www.youtube.com/embed/XXZLS7qfShM'),
(29, 15, 'One Connect', NULL, NULL, 0, 'p71.jpg', 'https://www.youtube.com/embed/YwFqLfKQHiI'),
(30, 15, 'Rappi', NULL, NULL, 0, 'p72.jpg', 'https://www.youtube.com/embed/G7XwkAD4krc'),
(31, 9, 'Akshapatra Meals for Smiles', 'A New Visionary', 'Documentary.', 1, 'csr.jpeg', 'https://www.youtube.com/embed/PfztbEDR_Sw'),
(32, 9, 'Amaha Brand Film', 'Where Vision', 'Becomes Brand.', 1, 'corporate.jpeg', 'https://www.youtube.com/embed/DQac4PHsPX4'),
(33, 9, 'One Million Trees', 'Stories That', 'Create Change.', 1, 'csr2.jpeg', 'https://www.youtube.com/embed/yPAIfXl5xN8'),
(34, 9, 'We Work Event', 'Memories in', 'Focus.', 1, 'event.jpeg', 'https://www.youtube.com/embed/1-yIHSPMWWE'),
(35, 9, 'Mission to Help Stray Animals', 'Scroll-Stopping Stories', 'in Seconds.', 1, 'socialmedia.jpeg', 'https://www.youtube.com/embed/eOOBJVyekD4'),
(36, 9, 'Rappi Turbo', 'Ideas in Motion.', 'Design That Speaks.', 1, '2danimated.jpeg', 'https://www.youtube.com/embed/G7XwkAD4krc'),
(37, 9, 'Kitchen With A Heart', 'Communicating Purpose', 'Through Precision.', 1, 'commercial.jpeg', 'https://www.youtube.com/embed/aVyfbWWIK6w'),
(38, 9, 'Neuralzome', 'Every Second', 'Sells a Story.', 1, 'product.jpeg', 'https://www.youtube.com/embed/sJBakSn_6YU');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `sid` int(11) NOT NULL,
  `fkcid` int(11) DEFAULT NULL,
  `stitle` varchar(255) DEFAULT NULL,
  `sdesc` text DEFAULT NULL,
  `moreinfo` text DEFAULT NULL,
  `deliverables` text DEFAULT NULL,
  `addons` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`sid`, `fkcid`, `stitle`, `sdesc`, `moreinfo`, `deliverables`, `addons`) VALUES
(1, 1, 'Corporate Films', 'Board‑room‑ready stories & leadership narratives.', '', '<ul className=\"mt-2 space-y-1 list-disc list-inside\"> <li>2–4 min master + 30s cutdown</li> <li>Thumbnails, subtitles (open/closed)</li> <li>Ratios: 16:9, 1:1, 9:16</li> </ul>', '<ul className=\"mt-2 space-y-1 list-disc list-inside\"> <li>Founder VO / Teleprompter</li> <li>Multi‑language versions</li> <li>Press kit cut & stills</li> </ul>'),
(2, 1, 'Brand Films', 'Emotion‑led launch or refresh films.', '', '<ul className=\"mt-2 space-y-1 list-disc list-inside\"> <li>Hero film + 15s/6s teasers</li> <li>Key visuals, end cards</li> <li>Ratios: 16:9, 9:16, 4:5</li> </ul>', '<ul className=\"mt-2 space-y-1 list-disc list-inside\"> <li>Talent casting & locations</li> <li>Legal & music supervision</li> <li>Shoppable overlays (beta)</li> </ul>'),
(3, 1, 'Product Videos', 'Demos, feature highlights, A/B hooks for PDP & marketplaces.', '', '<ul className=\"mt-2 space-y-1 list-disc list-inside\"> <li>Hero demo + feature clips</li> <li>Hook variants (3–6)</li> <li>Ratios: 16:9, 1:1, 9:16</li> </ul>', '<ul className=\"mt-2 space-y-1 list-disc list-inside\"> <li>3D product inserts</li> <li>How‑to micro‑series</li> <li>Retail screen versions</li> </ul>'),
(4, 1, 'Explainer Videos (Live‑Action / Hybrid)', 'Presenter + motion‑graphics overlays for clarity.', '', '<ul className=\"mt-2 space-y-1 list-disc list-inside\"> <li>Script, storyboard, presenter</li> <li>GFX overlays, callouts, diagrams</li> <li>Chapters + captions</li> </ul>', '<ul className=\"mt-2 space-y-1 list-disc list-inside\"> <li>Localization (VO/subs)</li> <li>Interactive hotspots (beta)</li> <li>LMS packages</li> </ul>'),
(5, 1, 'Testimonials & Case Studies', 'On‑camera proof that converts.', '', '<ul className=\"mt-2 space-y-1 list-disc list-inside\"> <li>60–120s case film</li> <li>Reels pack (3–6)</li> <li>Quote cards & captions</li> </ul>', '<ul className=\"mt-2 space-y-1 list-disc list-inside\"> <li>Remote capture kits</li> <li>Vertical prompter rig</li> <li>Multi‑language subs</li> </ul>'),
(6, 1, 'Event Films / Aftermovies', 'High‑energy recaps with instant verticals option.', '', '<ul className=\"mt-2 space-y-1 list-disc list-inside\"> <li>90–120s highlight</li> <li>Reels (3–6) + same‑day teaser*</li> <li>*If add‑on selected</li> </ul>', '<ul className=\"mt-2 space-y-1 list-disc list-inside\"> <li>Live vertical multicam</li> <li>Stage graphics pack</li> <li>Photo team add‑on</li> </ul>'),
(7, 1, 'CSR / Documentary Shorts', 'Authentic impact stories.', '', '<ul className=\"mt-2 space-y-1 list-disc list-inside\"> <li>3–5 min master</li> <li>Press kit cut, stills</li> <li>Translations (optional)</li> </ul>', '<ul className=\"mt-2 space-y-1 list-disc list-inside\"> <li>Impact metrics graphic pack</li> <li>Donor reel versions</li> <li>Festival DCP</li> </ul>'),
(8, 1, 'Recruitment / Employer Brand', 'Culture films to attract talent.', '', '<ul className=\"mt-2 space-y-1 list-disc list-inside\"> <li>Day‑in‑life master</li> <li>Benefits explainer micro‑cuts</li> <li>Campus versions</li> </ul>', '<ul className=\"mt-2 space-y-1 list-disc list-inside\"> <li>CEO AMA clip set</li> <li>Glassdoor quote graphics</li> <li>Referral promo pack</li> </ul>'),
(9, 1, 'Training / How‑To', 'Clear step‑by‑steps to reduce support load.', '', '<ul className=\"mt-2 space-y-1 list-disc list-inside\"> <li>Chaptered videos</li> <li>Screen overlays</li> <li>Captions + KB thumbnails</li> </ul>', '<ul className=\"mt-2 space-y-1 list-disc list-inside\"> <li>LMS packaging</li> <li>Localization</li> <li>PDF quick‑start</li> </ul>'),
(10, 2, '2D Animation Explainers', 'Characters, icons, kinetic type—brand‑true.', '', '<ul className=\"mt-2 list-disc list-inside space-y-1\"> <li>Script, boards, style‑frames</li> <li>VO + music licensing</li> <li>Ratios: 16:9, 1:1, 9:16</li> </ul>', '<ul className=\"mt-2 list-disc list-inside space-y-1\"> <li>Character pack for future use</li> <li>Accessibility subs (SDH)</li> <li>Illustration kit</li> </ul>'),
(11, 2, '3D Product Animation', 'Photoreal renders, cutaways, FX.', '', '<ul className=\"mt-2 list-disc list-inside space-y-1\"> <li>CAD/GLB ingest, look‑dev</li> <li>Exploded views & material swaps</li> <li>Looping reels + hero shots</li> </ul>', '<ul className=\"mt-2 list-disc list-inside space-y-1\"> <li>AR models (USDZ/GLB)</li> <li>Booth/OOH render suite</li> <li>Shoppable hotspots</li> </ul>'),
(12, 2, 'Motion Graphics & Title Design', 'Lower‑thirds, HUDs, infographics, logo stings.', '', '<ul className=\"mt-2 list-disc list-inside space-y-1\"> <li>GFX pack (consistent system)</li> <li>Kinetic typography</li> <li>Logo/title stings</li> </ul>', '<ul className=\"mt-2 list-disc list-inside space-y-1\"> <li>Live graphics for events</li> <li>Data‑driven infographics</li> <li>Stream overlays</li> </ul>'),
(13, 2, 'Tech / Medical Visualization', 'Complex systems explained clearly.', '', '<ul className=\"mt-2 list-disc list-inside space-y-1\"> <li>Diagrammatic + photoreal blends</li> <li>Accuracy review with SMEs</li> <li>Explainers & stills</li> </ul>', '<ul className=\"mt-2 list-disc list-inside space-y-1\"> <li>Interactive models</li> <li>Journal‑style figures</li> <li>Conference posters</li> </ul>'),
(14, 2, 'Logo / Title Animation', 'Openers and sonic branding.', '', '<ul className=\"mt-2 list-disc list-inside space-y-1\"> <li>2–5s stings (variants)</li> <li>Audio logo</li> <li>Alpha‑ready exports</li> </ul>', '<ul className=\"mt-2 list-disc list-inside space-y-1\"> <li>Intro/outro templates</li> <li>Stream deck triggers</li> <li>Event screen loops</li> </ul>'),
(15, 2, 'Interactive / AR‑ready Assets', 'Filters, try‑ons, optimized 3D.', '', '<ul className=\"mt-2 list-disc list-inside space-y-1\"> <li>Spark/Effect assets</li> <li>USDZ/GLB models</li> <li>Performance‑optimized textures</li> </ul>', '<ul className=\"mt-2 list-disc list-inside space-y-1\"> <li>Interactive hotspots</li> <li>Analytics hooks</li> <li>E‑commerce feeds</li> </ul>'),
(16, 3, 'Reels / Shorts / TikToks', 'Vertical‑first, hook‑led micro‑stories.', '', '<ul className=\"mt-2 list-disc list-inside space-y-1\"> <li>Hook matrix (3–6 variants)</li> <li>Captions & end cards</li> <li>Ratios: 9:16 / 1:1 / 4:5</li> </ul>', '<ul className=\"mt-2 list-disc list-inside space-y-1\"> <li>Creator whitelisting</li> <li>Posting/playbook</li> <li>Weekly analytics QA</li> </ul>'),
(17, 3, 'Sizzle / Hype Reels', 'Beat‑matched, high‑energy edits.', '', '<ul className=\"mt-2 list-disc list-inside space-y-1\"> <li>15–45s edits</li> <li>Music‑driven cuts</li> <li>Motion title pack</li> </ul>', '<ul className=\"mt-2 list-disc list-inside space-y-1\"> <li>Same‑day teaser</li> <li>Sponsor versions</li> <li>Event screens package</li> </ul>'),
(18, 3, 'UGC / Creator Ads', 'Authentic creator‑style ads for meta/TikTok/YouTube.', '', '<ul className=\"mt-2 list-disc list-inside space-y-1\"> <li>Script beats + on‑device capture</li> <li>Multiple hooks & CTAs</li> <li>Compliance tags (Spark/Branded)</li> </ul>', '<ul className=\"mt-2 list-disc list-inside space-y-1\"> <li>Creator sourcing</li> <li>Whitelisting</li> <li>Performance iterations</li> </ul>'),
(19, 3, 'Ad Iteration Packs', 'Systematic variants for learning & scale.', '', '<ul className=\"mt-2 list-disc list-inside space-y-1\"> <li>Hooks/CTAs/Lengths (6/15/30s)</li> <li>Platform‑specific exports</li> <li>Tracker sheet (CSV)</li> </ul>', '<ul className=\"mt-2 list-disc list-inside space-y-1\"> <li>Creative QA to specs</li> <li>Weekly review call</li> <li>New creative briefs</li> </ul>'),
(20, 3, 'Teasers / Trailers / Bumpers', '6s bumpers, 15s pre‑rolls, 30s trailers.', '', '<ul className=\"mt-2 list-disc list-inside space-y-1\"> <li>Brand‑safe intros/outros</li> <li>Clickable end‑screens</li> <li>Cutdowns for ads</li> </ul>', '<ul className=\"mt-2 list-disc list-inside space-y-1\"> <li>Localization</li> <li>Funnel variants</li> <li>A/B test plan</li> </ul>'),
(21, 3, 'Repurposing Packs', 'Webinar/Podcast → shorts & highlights.', '', '<ul className=\"mt-2 list-disc list-inside space-y-1\"> <li>Chapters & highlight reels</li> <li>Auto‑captions</li> <li>Thumbnails & quote cards</li> </ul>', '<ul className=\"mt-2 list-disc list-inside space-y-1\"> <li>Publishing calendar</li> <li>Copy pack (titles/descriptions)</li> <li>Analytics review</li> </ul>'),
(22, 4, 'Virtual Production Previz', 'LED volume partnerships, shot planning, look tests.', '', '', ''),
(23, 4, 'AI Storyboards & Animatics', 'Rapid boards; tone & pacing validated before shoot.', '', '', ''),
(24, 4, 'AI Cleanup & Upscaling', 'Denoise, upres, dialog isolate—editorial discretion.', '', '', ''),
(25, 4, 'Photogrammetry & LiDAR', 'Digitize products/locations for 3D & AR assets.', '', '', ''),
(26, 4, 'Live Vertical Multicam', 'Simulcast events in 9:16 with instant highlights.', '', '', ''),
(27, 4, 'Shoppable / Interactive Video', 'Clickable hotspots & product feeds (platform‑ready).', '', '', ''),
(28, 5, 'Editorial', 'Storycraft, pacing, rhythm.', '<ul className=\"list-disc list-inside space-y-1\"> <li>Multi‑language versioning (separate from subtitles)</li> <li>Narrative and polish rounds</li> <li>Conform & exports per spec</li> </ul>', '', ''),
(29, 5, 'Color Grading (DaVinci)', 'Calibrated monitors, show LUTs, scene‑referenced workflows.', '<ul className=\"list-disc list-inside space-y-1\"> <li>Shot matching & look dev</li> <li>Skin tone science; HDR if required</li> <li>Delivery LUT + graded stills set</li> </ul>', '', ''),
(30, 5, 'Sound Design & Mix', 'SFX, VO, music edit; stereo/5.1.', '<ul className=\"list-disc list-inside space-y-1\"> <li>Dialogue cleanup & ADR</li> <li>License mgmt (music/VO)</li> <li>M&E stems for global use</li> </ul>', '', ''),
(31, 5, 'Finishing & Online', 'Conform, titles, QC, broadcast/OTT.', '<ul className=\"list-disc list-inside space-y-1\"> <li>Legal slate & texted/textless</li> <li>IMF, ProRes, DNx, H.264/H.265</li> <li>QC sheets & delivery logs</li> </ul>', '', ''),
(32, 5, 'VFX & Cleanup', 'Paint‑outs, comps, stabilization.', '<ul className=\"list-disc list-inside space-y-1\"> <li>Screen replacements</li> <li>Sky & background swaps</li> <li>Logo/legal fixes</li> </ul>', '', ''),
(33, 5, 'Localization & Accessibility', 'Subtitles/CC, SDH, VO/dubbing.', '<ul className=\"list-disc list-inside space-y-1\"> <li>Multi‑language subs (burn‑in/sidecar)</li> <li>VO casting & recording</li> <li>Accessibility compliance</li> </ul>', '', ''),
(34, 5, 'Versioning & Platform Packaging', 'All ratios, codecs, and spec sheets.', '<ul className=\"list-disc list-inside space-y-1\"> <li>9:16 / 1:1 / 4:5 / 16:9</li> <li>Bitrates & codecs per platform</li> <li>End‑cards & clickable overlays</li> </ul>', '', ''),
(35, 5, 'AI‑Assisted Post', 'Denoise, upscale, dialog isolate (ethics‑first).', '<ul className=\"list-disc list-inside space-y-1\"> <li>Artifact‑aware upscaling</li> <li>Noise/reverb reduction</li> <li>Voice isolation with approvals</li> </ul>', '', ''),
(36, 5, 'Data & Archival', 'Naming, backups, M&E stems, storage.', '<ul className=\"list-disc list-inside space-y-1\"> <li>Project & asset naming</li> <li>3‑2‑1 backup policy</li> <li>Archive with retrieval SLAs</li> </ul>', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`bid`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`cid`);

--
-- Indexes for table `content`
--
ALTER TABLE `content`
  ADD PRIMARY KEY (`cid`);

--
-- Indexes for table `portfolio`
--
ALTER TABLE `portfolio`
  ADD PRIMARY KEY (`pid`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`sid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `blog`
--
ALTER TABLE `blog`
  MODIFY `bid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `cid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `content`
--
ALTER TABLE `content`
  MODIFY `cid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `portfolio`
--
ALTER TABLE `portfolio`
  MODIFY `pid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
