'use client';

import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { ArrowUpRight, ArrowDownRight, ExternalLink } from 'lucide-react';

export default function ApeelDashboard() {
  const [selectedDemographic, setSelectedDemographic] = useState('website');

  const platformData = [
    { name: 'LinkedIn', followers: 37743, growth: 1934 },
    { name: 'Instagram', followers: 15644, growth: 34 },
    { name: 'Substack', followers: 10056, growth: 10056 },
    { name: 'Facebook', followers: 6179, growth: 536 },
    { name: 'X', followers: 4888, growth: 54 },
    { name: 'YouTube', followers: 2330, growth: 46 },
    { name: 'TikTok', followers: 150, growth: 9 },
  ];

  const brandMentionsOverTime = [
    { month: 'Feb \'25', mentions: 18000 },
    { month: 'Mar \'25', mentions: 15000 },
    { month: 'Apr \'25', mentions: 25000 },
    { month: 'May \'25', mentions: 22000 },
    { month: 'Jun \'25', mentions: 42000 },
    { month: 'Jul \'25', mentions: 155000 },
    { month: 'Aug \'25', mentions: 18000 },
    { month: 'Sep \'25', mentions: 8000 },
    { month: 'Oct \'25', mentions: 6000 },
    { month: 'Nov \'25', mentions: 4500 },
    { month: 'Dec \'25', mentions: 3800 },
    { month: 'Jan \'26', mentions: 3200 },
  ];

  const topInfluencers = [
    { rank: 1, name: 'Wide Awake Media', handle: '@wideawake_media', avatar: 'http://pbs.twimg.com/profile_images/1624380673933934592/sKyPr3FE_normal.jpg', posts: 6, engagement: 91266, profile: 'https://x.com/wideawake_media' },
    { rank: 2, name: 'Rob Schneider 🇺🇸', handle: '@RobSchneider', avatar: 'http://pbs.twimg.com/profile_images/1587490892083974146/p3jL3LPH_normal.jpg', posts: 6, engagement: 88819, profile: 'https://x.com/RobSchneider' },
    { rank: 3, name: 'Wall Street Apes', handle: '@WallStreetApes', avatar: 'http://pbs.twimg.com/profile_images/1593753619148382208/YYzzCs6C_normal.jpg', posts: 4, engagement: 76272, profile: 'https://x.com/WallStreetApes' },
    { rank: 4, name: 'Vance Murphy', handle: '@vancemurphy', avatar: 'http://pbs.twimg.com/profile_images/1524551527808987136/IXM3zZ8s_normal.jpg', posts: 2, engagement: 74299, profile: 'https://x.com/vancemurphy' },
    { rank: 5, name: 'James Woods', handle: '@RealJamesWoods', avatar: 'http://pbs.twimg.com/profile_images/796482667340382211/CoV8077b_normal.jpg', posts: 1, engagement: 70299, profile: 'https://x.com/RealJamesWoods' },
    { rank: 6, name: 'Concerned Citizen', handle: '@BGatesIsaPyscho', avatar: 'http://pbs.twimg.com/profile_images/1534905804368879621/R5xYZeL5_normal.jpg', posts: 7, engagement: 69748, profile: 'https://x.com/BGatesIsaPyscho' },
    { rank: 7, name: 'DR JANE RUBY™️', handle: '@RealDrJaneRuby', avatar: 'http://pbs.twimg.com/profile_images/1850360927977107456/Qc9llFop_normal.jpg', posts: 68, engagement: 65204, profile: 'https://x.com/RealDrJaneRuby' },
    { rank: 8, name: 'David Wolfe', handle: '@DavidWolfe', avatar: 'http://pbs.twimg.com/profile_images/1704415188638941184/8Pob2Uu4_normal.jpg', posts: 2, engagement: 48379, profile: 'https://x.com/DavidWolfe' },
    { rank: 9, name: 'illuminatibot', handle: '@iluminatibot', avatar: 'http://pbs.twimg.com/profile_images/1969369509070061568/CJpAK3Ky_normal.jpg', posts: 6, engagement: 46284, profile: 'https://x.com/iluminatibot' },
    { rank: 10, name: 'healthbot', handle: '@thehealthb0t', avatar: 'http://pbs.twimg.com/profile_images/1969367453265510401/RvvsNw5K_normal.jpg', posts: 22, engagement: 37652, profile: 'https://x.com/thehealthb0t' },
  ];

  const earnedMediaData = {
    links: 946,
    totalEngagement: 1162,
    avgEngagement: 1,
    totalUVM: 6165637380,
    journalistShares: 4,
    journalistReach: 386768
  };

  const linkedinPosts = [
    { date: '1/25/2026', post: 'We heard 2026 is the new 2016… so here\'s a throwback. (6-image carousel)', impressions: 8492, engagements: 5077, rate: 59.79, link: 'https://linkedin.com/feed/update/urn:li:ugcPost:7421322739656892416' },
    { date: '9/3/2025', post: 'Apeel filed a lawsuit on August 29, 2025 against wellness influencer...', impressions: 20200, engagements: 2090, rate: 10.35, link: 'https://linkedin.com/feed/update/urn:li:share:7369090601130098688' },
    { date: '7/31/2025', post: 'Thank you to Michelle Pfeiffer for correcting the record...', impressions: 8000, engagements: 828, rate: 10.35, link: 'https://linkedin.com/feed/update/urn:li:share:7356743364202905601' },
    { date: '9/8/2025', post: 'Thank you to Leefy Organics for correcting earlier posts about Apeel...', impressions: 13612, engagements: 789, rate: 5.8, link: 'https://linkedin.com/feed/update/urn:li:share:7370923089381044224' }
  ];

  const instagramPosts = [
    { date: '10/9/2025', post: '@TED 💡🌱 (Story)', impressions: 13775, engagements: 2, rate: 0.01, link: 'https://instagram.com/stories/apeel_sciences/3739845848776393353' },
    { date: '7/31/2025', post: 'Thank you to @michellepfeifferofficial for correcting her earlier post...', impressions: 12247, engagements: 248, rate: 2.02, link: 'https://www.instagram.com/p/DMx_1MGzWQA/' },
    { date: '8/6/2025', post: 'There\'s a lot of noise online. Here are the facts (bilingual post)...', impressions: 10943, engagements: 90, rate: 0.82, link: 'https://www.instagram.com/p/DNBMXepMh25/' },
    { date: '9/3/2025', post: 'Apeel filed a lawsuit on August 29, 2025...', impressions: 8623, engagements: 155, rate: 1.8, link: 'https://www.instagram.com/p/DOJuUIWAWU4/' }
  ];

  const xPosts = [
    { date: '1/27/2026', post: 'Most people don\'t know what\'s really on their food or that their produce has an ingredients list...', impressions: 89565, engagements: 133, rate: 0.15, link: 'https://twitter.com/apeelsciences/status/2016270121883377790' },
    { date: '1/29/2026', post: 'Jenny Du quote: "How do you do something that\'s doing good? We\'re all here on borrowed time..."', impressions: 85464, engagements: 32, rate: 0.04, link: 'https://twitter.com/apeelsciences/status/2016973335431643254' },
    { date: '6/3/2025', post: 'We\'re honored to be named one of Food & Wine\'s 2025 Game Changers...', impressions: 36455, engagements: 181, rate: 0.5, link: 'https://twitter.com/apeelsciences/status/1929991017337380869' },
    { date: '6/1/2025', post: '🥑♻️ How our coating Cuts Food Waste by HALF...', impressions: 23231, engagements: 185, rate: 0.8, link: 'https://twitter.com/apeelsciences/status/1929233777911337095' }
  ];

  const websiteAge = [
    { age: '18-24', users: 5300 },
    { age: '25-34', users: 5500 },
    { age: '35-44', users: 3700 },
    { age: '45-54', users: 3500 },
    { age: '55-64', users: 2400 },
    { age: '65+', users: 1900 },
  ];

  const topCountries = [
    { country: 'United States', users: 103697, percentage: 73.5 },
    { country: 'Canada', users: 3819, percentage: 2.7 },
    { country: 'India', users: 2797, percentage: 2.0 },
    { country: 'Germany', users: 2632, percentage: 1.9 },
    { country: 'United Kingdom', users: 2516, percentage: 1.8 },
  ];

  const topCities = [
    { city: 'Ashburn, VA', users: 3593 },
    { city: 'New York, NY', users: 3525 },
    { city: 'Los Angeles, CA', users: 3158 },
    { city: 'Chicago, IL', users: 1989 },
    { city: 'Dallas, TX', users: 1113 },
  ];

  const topInterests = [
    { interest: 'Technology / Technophiles', users: 5942 },
    { interest: 'Banking & Finance / Avid Investors', users: 5111 },
    { interest: 'News & Politics / Avid News Readers', users: 4944 },
    { interest: 'Lifestyles & Hobbies / Shutterbugs', users: 4530 },
    { interest: 'News & Politics / Business Readers', users: 4272 },
  ];

  const linkedinIndustries = [
    { industry: 'Software Development', followers: 1904, percentage: 5.0 },
    { industry: 'Biotechnology Research', followers: 1598, percentage: 4.2 },
    { industry: 'Higher Education', followers: 1376, percentage: 3.6 },
    { industry: 'Business Consulting', followers: 1344, percentage: 3.6 },
    { industry: 'Food & Beverage Mfg', followers: 1286, percentage: 3.4 },
  ];

  const linkedinMetros = [
    { metro: 'Los Angeles Metro', followers: 2005, percentage: 5.3 },
    { metro: 'San Francisco Bay', followers: 1993, percentage: 5.3 },
    { metro: 'Santa Barbara', followers: 1631, percentage: 4.3 },
    { metro: 'New York City', followers: 1425, percentage: 3.8 },
    { metro: 'Valencia, Spain', followers: 1052, percentage: 2.8 },
  ];

  const xAgeData = [
    { age: '13-17', percentage: 0.2 },
    { age: '18-24', percentage: 4.0 },
    { age: '25-34', percentage: 25.0 },
    { age: '35-44', percentage: 26.6 },
    { age: '45-54', percentage: 23.8 },
    { age: '55-64', percentage: 13.1 },
    { age: '65+', percentage: 7.4 },
  ];

  const xCountries = [
    { country: 'United States', percentage: 74.0 },
    { country: 'Canada', percentage: 3.5 },
    { country: 'United Kingdom', percentage: 3.1 },
    { country: 'Japan', percentage: 1.9 },
    { country: 'Argentina', percentage: 1.6 },
  ];

  const instagramAge = [
    { age: '35-44', percentage: 21 },
    { age: '25-34', percentage: 16 },
    { age: '45-54', percentage: 10 },
    { age: '55-64', percentage: 6 },
    { age: '65+', percentage: 4 },
    { age: '18-24', percentage: 2 },
  ];

  const instagramCountries = [
    { country: 'United States', percentage: 52.5 },
    { country: 'Canada', percentage: 4.6 },
    { country: 'United Kingdom', percentage: 3.1 },
    { country: 'India', percentage: 3.0 },
    { country: 'Brazil', percentage: 2.8 },
  ];

  const instagramCities = [
    { city: 'New York, NY', percentage: 3.0 },
    { city: 'Los Angeles, CA', percentage: 2.5 },
    { city: 'Santa Barbara, CA', percentage: 1.9 },
    { city: 'London, UK', percentage: 1.0 },
    { city: 'Toronto, ON', percentage: 1.0 },
  ];

  const facebookAge = [
    { age: '35-44', percentage: 16 },
    { age: '25-34', percentage: 14 },
    { age: '65+', percentage: 11 },
    { age: '45-54', percentage: 10 },
    { age: '55-64', percentage: 7 },
    { age: '18-24', percentage: 1 },
  ];

  const facebookCountries = [
    { country: 'United States', percentage: 48.1 },
    { country: 'Mexico', percentage: 3.8 },
    { country: 'Canada', percentage: 3.4 },
    { country: 'India', percentage: 3.1 },
    { country: 'Philippines', percentage: 2.8 },
  ];

  const facebookCities = [
    { city: 'Santa Barbara, CA', percentage: 1.9 },
    { city: 'New York, NY', percentage: 1.1 },
    { city: 'Lima, Peru', percentage: 0.9 },
    { city: 'Los Angeles, CA', percentage: 0.9 },
    { city: 'Goleta, CA', percentage: 0.6 },
  ];

  const tedTalkAge = [
    { age: '18-24', percentage: 1.7 },
    { age: '25-34', percentage: 10.2 },
    { age: '35-44', percentage: 21.3 },
    { age: '45-54', percentage: 21.9 },
    { age: '55-64', percentage: 21.3 },
    { age: '65+', percentage: 23.6 },
  ];

  const tedTalkCountries = [
    { country: 'United States', percentage: 49.8 },
    { country: 'Canada', percentage: 8.6 },
    { country: 'India', percentage: 6.8 },
    { country: 'Australia', percentage: 4.0 },
    { country: 'United Kingdom', percentage: 3.4 },
  ];

  const PostCard = ({ post, idx }) => (
    <div className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:shadow-md transition-all">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1 pr-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold text-indigo-600">#{idx + 1}</span>
            <span className="text-xs text-gray-500">{post.date}</span>
          </div>
          <p className="text-sm text-gray-900 font-medium leading-relaxed">{post.post}</p>
        </div>
        {post.link && post.link !== '#' && (
          <a href={post.link} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 p-2 text-gray-400 hover:text-indigo-600 transition-colors">
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
      <div className="grid grid-cols-3 gap-6 pt-4 border-t border-gray-200">
        <div>
          <div className="text-xs text-gray-500 mb-1">Impressions</div>
          <div className="text-lg font-bold text-gray-900">{post.impressions.toLocaleString()}</div>
        </div>
        <div>
          <div className="text-xs text-gray-500 mb-1">Engagements</div>
          <div className="text-lg font-bold text-gray-900">{post.engagements.toLocaleString()}</div>
        </div>
        <div>
          <div className="text-xs text-gray-500 mb-1">Engagement Rate</div>
          <div className="text-lg font-bold text-indigo-600">{post.rate}%</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-[1600px] mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Apeel Sciences</h1>
              <p className="text-sm text-gray-500 mt-1">Digital Performance Dashboard • Feb 1, 2025 - Jan 31, 2026</p>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">Last Updated</div>
              <div className="text-sm text-gray-900 font-medium">Feb 7, 2026</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-8 py-10">
        <div className="mb-12">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900">State of Play: Owned Channels</h2>
            <p className="text-sm text-gray-500 mt-1">Year-over-year follower growth across platforms</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="grid grid-cols-7 gap-4">
              {platformData.map((platform) => (
                <div key={platform.name} className="bg-gradient-to-b from-white to-gray-50 border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-gray-300 transition-all duration-200">
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{platform.name}</span>
                  </div>
                  <div className="mb-3">
                    <div className="text-2xl font-bold text-gray-900">{platform.followers.toLocaleString()}</div>
                    <div className="text-xs text-gray-500 mt-0.5">Followers</div>
                  </div>
                  <div className="pt-3 border-t border-gray-200">
                    <div className={`flex items-center gap-1 text-xs font-semibold ${platform.growth >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                      {platform.growth >= 0 ? <ArrowUpRight className="w-3.5 h-3.5" /> : <ArrowDownRight className="w-3.5 h-3.5" />}
                      <span>{platform.growth >= 0 ? '+' : ''}{platform.growth.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 grid grid-cols-4 gap-4">
              <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200">
                <div className="text-3xl font-bold text-gray-900">76,990</div>
                <div className="text-xs text-gray-500 mt-1.5 font-medium">Total Followers</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl border border-emerald-200">
                <div className="text-3xl font-bold text-emerald-700">+12,669</div>
                <div className="text-xs text-gray-600 mt-1.5 font-medium">Net Growth</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
                <div className="text-3xl font-bold text-purple-700">37%</div>
                <div className="text-xs text-gray-600 mt-1.5 font-medium">Substack Open Rate</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl border border-indigo-200">
                <div className="text-3xl font-bold text-indigo-700">141K</div>
                <div className="text-xs text-gray-600 mt-1.5 font-medium">Website Users</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Brand Mentions Volume and Top Influencers</h2>
            <p className="text-sm text-gray-500 mt-1">12-month monitoring via Talkwalker</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="grid grid-cols-4 gap-6 mb-8">
              <div className="text-center p-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border border-amber-200 shadow-sm">
                <div className="text-4xl font-bold text-gray-900 mb-2">292.6K</div>
                <div className="text-xs text-gray-600 mb-4 font-medium">Total Results</div>
                <div className="flex items-center justify-center gap-1 text-amber-700 text-sm font-semibold">
                  <ArrowUpRight className="w-4 h-4" />
                  <span>+99.8%</span>
                </div>
              </div>
              <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200 shadow-sm">
                <div className="text-4xl font-bold text-gray-900 mb-2">124.4K</div>
                <div className="text-xs text-gray-600 mb-4 font-medium">Unique Authors</div>
                <div className="flex items-center justify-center gap-1 text-purple-700 text-sm font-semibold">
                  <ArrowUpRight className="w-4 h-4" />
                  <span>+39.6%</span>
                </div>
              </div>
              <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 shadow-sm">
                <div className="text-4xl font-bold text-gray-900 mb-2">1.2M</div>
                <div className="text-xs text-gray-600 mb-4 font-medium">Engagement</div>
                <div className="flex items-center justify-center gap-1 text-blue-700 text-sm font-semibold">
                  <ArrowUpRight className="w-4 h-4" />
                  <span>+43%</span>
                </div>
              </div>
              <div className="text-center p-8 bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl border border-pink-200 shadow-sm">
                <div className="text-4xl font-bold text-gray-900 mb-2">10.2B</div>
                <div className="text-xs text-gray-600 mb-4 font-medium">Potential Reach</div>
                <div className="flex items-center justify-center gap-1 text-pink-700 text-sm font-semibold">
                  <ArrowUpRight className="w-4 h-4" />
                  <span>+85.9%</span>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-semibold text-gray-900">Results Over Time</h4>
                <div className="text-right">
                  <div className="text-xs text-gray-500">Peak Month</div>
                  <div className="text-sm font-semibold text-purple-600">Jul 2025 • 155K mentions</div>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={280}>
                <AreaChart data={brandMentionsOverTime}>
                  <defs>
                    <linearGradient id="mentionsGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#A78BFA" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#A78BFA" stopOpacity={0.05}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
                  <XAxis dataKey="month" stroke="#9CA3AF" tick={{ fill: '#6B7280', fontSize: 11 }} axisLine={{ stroke: '#E5E7EB' }} />
                  <YAxis stroke="#9CA3AF" tick={{ fill: '#6B7280', fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`} />
                  <Tooltip contentStyle={{ backgroundColor: 'white', border: '1px solid #E5E7EB', borderRadius: '8px', fontSize: '12px', padding: '8px 12px' }} formatter={(value) => [`${value.toLocaleString()} mentions`, 'Apeel']} />
                  <Area type="monotone" dataKey="mentions" stroke="#A78BFA" strokeWidth={2} fillOpacity={1} fill="url(#mentionsGradient)" />
                </AreaChart>
              </ResponsiveContainer>
              <div className="mt-4 p-4 bg-purple-50 border border-purple-200 rounded-lg">
                <p className="text-xs text-purple-900">
                  <strong>Key Insight:</strong> July 2025 spike (155K mentions) driven by Michelle Pfeiffer's post about Apeel, which the company leveraged as a communications opportunity. Strategic response and her subsequent correction helped normalize conversation levels.
                </p>
              </div>
            </div>

            {/* Top 10 Influencers */}
            <div className="border-t border-gray-200 pt-8 mt-8">
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-900">Top 10 Influencers by Engagement</h4>
                <p className="text-xs text-gray-500 mt-1">Ranked by total engagement generated on X (Twitter)</p>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Rank</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Influencer</th>
                      <th className="px-6 py-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">Posts</th>
                      <th className="px-6 py-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">Engagement</th>
                      <th className="px-6 py-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">Profile</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {topInfluencers.map((influencer) => (
                      <tr key={influencer.rank} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                          <span className="text-sm font-bold text-indigo-600">#{influencer.rank}</span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div>
                              <div className="text-sm font-semibold text-gray-900">{influencer.name}</div>
                              <div className="text-xs text-gray-500">{influencer.handle}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-sm font-semibold text-gray-900">{influencer.posts}</span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-sm font-bold text-purple-600">{influencer.engagement.toLocaleString()}</span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <a 
                            href={influencer.profile} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
                          >
                            View Profile
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3: EARNED MEDIA COVERAGE */}
        <div className="mb-12">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Earned Media Coverage</h2>
            <p className="text-sm text-gray-500 mt-1">12-month media monitoring and journalist engagement</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="grid grid-cols-4 gap-6">
              <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 shadow-sm">
                <div className="text-4xl font-bold text-gray-900 mb-2">946</div>
                <div className="text-xs text-gray-600 mb-2 font-medium">Total Links</div>
                <div className="text-xs text-gray-500">Media mentions & coverage</div>
              </div>
              
              <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200 shadow-sm">
                <div className="text-4xl font-bold text-gray-900 mb-2">1,162</div>
                <div className="text-xs text-gray-600 mb-2 font-medium">Total Engagement</div>
                <div className="text-xs text-gray-500">Avg: 1 per article</div>
              </div>
              
              <div className="text-center p-8 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl border border-indigo-200 shadow-sm">
                <div className="text-4xl font-bold text-gray-900 mb-2">6.17B</div>
                <div className="text-xs text-gray-600 mb-2 font-medium">Total UVM</div>
                <div className="text-xs text-gray-500">Unique Visitors per Month</div>
              </div>
              
              <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200 shadow-sm">
                <div className="text-4xl font-bold text-gray-900 mb-2">387K</div>
                <div className="text-xs text-gray-600 mb-2 font-medium">Journalist Reach</div>
                <div className="text-xs text-gray-500">Total audience reached</div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 4: TOP PERFORMING POSTS */}
        <div className="mb-12">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Top Performing Posts</h2>
            <p className="text-sm text-gray-500 mt-1">Highest impression posts by platform (ranked high to low)</p>
          </div>
          <div className="mb-8">
            <div className="mb-4"><h3 className="text-lg font-semibold text-gray-900">LinkedIn</h3></div>
            <div className="space-y-4">{linkedinPosts.map((post, idx) => <PostCard key={idx} post={post} idx={idx} />)}</div>
          </div>
          <div className="mb-8">
            <div className="mb-4"><h3 className="text-lg font-semibold text-gray-900">Instagram</h3></div>
            <div className="space-y-4">{instagramPosts.map((post, idx) => <PostCard key={idx} post={post} idx={idx} />)}</div>
          </div>
          <div className="mb-8">
            <div className="mb-4"><h3 className="text-lg font-semibold text-gray-900">X</h3></div>
            <div className="space-y-4">{xPosts.map((post, idx) => <PostCard key={idx} post={post} idx={idx} />)}</div>
          </div>
        </div>


        {/* SECTION 5: PAID PERFORMANCE */}
        <div className="mb-12">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Paid Performance</h2>
            <p className="text-sm text-gray-500 mt-1">Advertising campaign results across platforms</p>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">YouTube Ads</h3>
                  <p className="text-xs text-gray-500 mt-1">Oct 7, 2025 - Jan 31, 2026</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">$6,016</div>
                  <div className="text-xs text-gray-500">Spend</div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2.5 border-b border-gray-100">
                  <span className="text-xs text-gray-600 font-medium">Impressions</span>
                  <span className="text-sm font-semibold text-gray-900">1,280,254</span>
                </div>
                <div className="flex items-center justify-between py-2.5 border-b border-gray-100">
                  <span className="text-xs text-gray-600 font-medium">Video Views</span>
                  <span className="text-sm font-semibold text-gray-900">210,664</span>
                </div>
                <div className="flex items-center justify-between py-2.5 border-b border-gray-100">
                  <span className="text-xs text-gray-600 font-medium">CPV</span>
                  <span className="text-sm font-bold text-indigo-600">$0.028</span>
                </div>
                <div className="flex items-center justify-between py-2.5">
                  <span className="text-xs text-gray-600 font-medium">CPM</span>
                  <span className="text-sm font-semibold text-gray-900">$4.70</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">Meta Ads</h3>
                  <p className="text-xs text-gray-500 mt-1">Feb 1, 2025 - Jan 31, 2026</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">$13,146</div>
                  <div className="text-xs text-gray-500">Spend</div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2.5 border-b border-gray-100">
                  <span className="text-xs text-gray-600 font-medium">Reach</span>
                  <span className="text-sm font-semibold text-gray-900">1,599,651</span>
                </div>
                <div className="flex items-center justify-between py-2.5 border-b border-gray-100">
                  <span className="text-xs text-gray-600 font-medium">Impressions</span>
                  <span className="text-sm font-semibold text-gray-900">2,168,002</span>
                </div>
                <div className="flex items-center justify-between py-2.5 border-b border-gray-100">
                  <span className="text-xs text-gray-600 font-medium">Clicks</span>
                  <span className="text-sm font-semibold text-gray-900">7,388</span>
                </div>
                <div className="flex items-center justify-between py-2.5">
                  <span className="text-xs text-gray-600 font-medium">CPC / CPM</span>
                  <span className="text-sm font-semibold text-gray-900">$1.78 / $6.06</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">X Ads</h3>
                  <p className="text-xs text-gray-500 mt-1">Feb 1, 2025 - Jan 31, 2026</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">$1,182</div>
                  <div className="text-xs text-gray-500">Spend</div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2.5 border-b border-gray-100">
                  <span className="text-xs text-gray-600 font-medium">Impressions</span>
                  <span className="text-sm font-semibold text-gray-900">270,163</span>
                </div>
                <div className="flex items-center justify-between py-2.5 border-b border-gray-100">
                  <span className="text-xs text-gray-600 font-medium">Engagements</span>
                  <span className="text-sm font-semibold text-gray-900">6,234</span>
                </div>
                <div className="flex items-center justify-between py-2.5 border-b border-gray-100">
                  <span className="text-xs text-gray-600 font-medium">Cost/Engagement</span>
                  <span className="text-sm font-bold text-indigo-600">$0.16</span>
                </div>
                <div className="flex items-center justify-between py-2.5">
                  <span className="text-xs text-gray-600 font-medium">CPM</span>
                  <span className="text-sm font-semibold text-gray-900">$4.37</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-4 gap-4">
            <div className="text-center p-5 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 shadow-sm">
              <div className="text-2xl font-bold text-gray-900">$20,344</div>
              <div className="text-xs text-gray-600 mt-1.5 font-medium">Total Spend</div>
            </div>
            <div className="text-center p-5 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 shadow-sm">
              <div className="text-2xl font-bold text-gray-900">3.72M</div>
              <div className="text-xs text-gray-600 mt-1.5 font-medium">Total Impressions</div>
            </div>
            <div className="text-center p-5 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 shadow-sm">
              <div className="text-2xl font-bold text-gray-900">224,286</div>
              <div className="text-xs text-gray-600 mt-1.5 font-medium">Total Results</div>
            </div>
            <div className="text-center p-5 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl border border-indigo-200 shadow-sm">
              <div className="text-2xl font-bold text-indigo-700">$5.47</div>
              <div className="text-xs text-gray-600 mt-1.5 font-medium">Blended CPM</div>
            </div>
          </div>
        </div>

        {/* SECTION 6: ANALYSIS */}
        <div className="mb-12">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Analysis & Strategic Recommendations</h2>
            <p className="text-sm text-gray-500 mt-1">Data-driven insights and opportunity assessment</p>
          </div>

          <div className="space-y-4">
            {/* X Platform Opportunity */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">X represents the highest-efficiency paid channel with minimal investment</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    With only $1,182 in total spend, X delivered a CPM of $4.37—the lowest across all platforms. Despite minimal paid effort, X hosts the majority of brand conversation, as evidenced by the top influencers list where all ten accounts operate exclusively on X, generating 668,635 total engagements. The platform's organic reach potential remains largely untapped, presenting a significant opportunity for scaled investment.
                  </p>
                </div>
              </div>
            </div>

            {/* Audience Alignment */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">Audience demographics validate the Peak Insights segmentation strategy</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    The data confirms strategic alignment across platforms. Website traffic shows near-perfect gender parity (50.6% male, 49.4% female) with concentrated interest affinities in Technology/Technophiles (5,942 users) and Business/Finance segments. X's male-dominant audience (66.6%) with 75.4% aged 25-54 mirrors the segmentation outlined in the Apeel 2.0 Media and Digital Strategy, demonstrating precise targeting execution.
                  </p>
                </div>
              </div>
            </div>

            {/* LinkedIn Growth Potential */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">LinkedIn shows exceptional organic growth without platform-specific optimization</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    LinkedIn achieved +1,934 followers (the highest net growth of any platform) and a 59.79% engagement rate on its top post—all without reformatted content or dedicated strategy. The audience composition reveals high-value segments: Software Development (5.0%), Biotechnology Research (4.2%), and concentrated presence in tech hubs (Los Angeles Metro and San Francisco Bay, 5.3% each). This organic success signals substantial untapped potential. A strategic pivot toward LinkedIn-native content and messaging, mirroring the X reactivation approach, could yield significant returns.
                  </p>
                </div>
              </div>
            </div>

            {/* YouTube Optimization Gap */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">YouTube delivers efficient performance but lacks brand optimization</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    The platform achieved a $0.028 CPV across 210,664 video views—demonstrating strong cost efficiency. However, the channel profile and content library fail to signal Apeel's aesthetic, messaging framework, or clear calls-to-action. This optimization gap represents a missed opportunity to convert viewers into engaged brand advocates at the point of highest attention.
                  </p>
                </div>
              </div>
            </div>

            {/* Newsletter Performance */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-pink-600 rounded-full mt-2"></div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">Substack open rate doubles industry benchmarks</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    The 37% open rate significantly exceeds the industry average of 15-20% for food and agriculture technology newsletters. Combined with +10,056 net subscriber growth, this performance validates the content quality and audience relevance. Substack represents a high-intent, engaged audience segment that merits continued investment and strategic integration with owned channel content.
                  </p>
                </div>
              </div>
            </div>

            {/* Disinformation Decline */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">Strategic response successfully normalized brand mention volume</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Following the July 2025 spike (155K mentions driven by Michelle Pfeiffer's post), Talkwalker data shows mentions declining to 3,200 by January 2026—a 97.9% decrease. This normalization demonstrates the effectiveness of the communications strategy and Michelle Pfeiffer's subsequent correction. The rapid stabilization prevented sustained negative narrative momentum and restored baseline conversation levels.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Gaps Section */}
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl border border-amber-200 p-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-amber-600">⚠</span> Critical Data Gaps & Recommendations
              </h3>
              <div className="space-y-4">
                <div className="pl-4 border-l-2 border-amber-300">
                  <p className="text-sm font-semibold text-gray-900 mb-1">LinkedIn Premium Account Required</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    This dashboard lacks audience quality metrics. A premium account would reveal industry stakeholders viewing the profile—providing actionable business intelligence for the commercial and leadership teams. Given LinkedIn's strong organic performance, this visibility gap represents a strategic blind spot.
                  </p>
                </div>
                <div className="pl-4 border-l-2 border-amber-300">
                  <p className="text-sm font-semibold text-gray-900 mb-1">Narrative Intelligence Integration Needed</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    The dashboard measures volume and engagement but lacks narrative intelligence that Imperium extracts through Gudea. Understanding conversation themes, sentiment shifts, and emerging narratives would inform both content development and paid strategy optimization.
                  </p>
                </div>
                <div className="pl-4 border-l-2 border-amber-300">
                  <p className="text-sm font-semibold text-gray-900 mb-1">Business Impact Metrics Missing</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Performance metrics tell only part of the story. Recent thought leadership work yielded tangible business outcomes: a previously blocked retailer contacted Luiz after encountering repositioned content; a high-profile NYT and Atlantic writer reached out to James after seeing his X presence; and David Friedberg mentioned noticing Apeel's earned media and thought leadership during a conversation with Luiz. These outcomes—generated through X, LinkedIn, Substack, and earned coverage—demonstrate strategic value that transcends dashboard metrics. Future reporting should weight business intelligence alongside performance data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 7: AUDIENCE DEMOGRAPHICS */}
        <div className="mb-12">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Audience Demographics</h2>
            <p className="text-sm text-gray-500 mt-1">Detailed breakdown by platform</p>
          </div>
          <div className="flex gap-2 mb-6">
            {['website', 'linkedin', 'instagram', 'facebook', 'x', 'tedtalk'].map((platform) => (
              <button key={platform} onClick={() => setSelectedDemographic(platform)} className={`px-5 py-2.5 text-xs font-semibold rounded-lg transition-all ${selectedDemographic === platform ? 'bg-indigo-600 text-white shadow-md' : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 shadow-sm'}`}>
                {platform === 'tedtalk' ? 'TED Talk' : platform.charAt(0).toUpperCase() + platform.slice(1)}
              </button>
            ))}
          </div>

          {selectedDemographic === 'website' && (
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <h4 className="text-sm font-semibold text-gray-900 mb-6">Gender Distribution</h4>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-gray-600 font-medium">Male</span>
                      <span className="text-sm font-bold text-gray-900">50.6%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-3 shadow-inner">
                      <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 h-3 rounded-full shadow-sm" style={{ width: '50.6%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-gray-600 font-medium">Female</span>
                      <span className="text-sm font-bold text-gray-900">49.4%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-3 shadow-inner">
                      <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-3 rounded-full shadow-sm" style={{ width: '49.4%' }} />
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-4 italic">Near-perfect gender parity — rare for food/ag-tech/sustainability brands</p>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-4">Top Countries</h4>
                  <div className="space-y-3">
                    {topCountries.map((country, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <span className="text-xs text-gray-600">{country.country}</span>
                        <div className="text-right">
                          <span className="text-sm font-semibold text-gray-900">{country.users.toLocaleString()}</span>
                          <span className="text-xs text-gray-500 ml-2">({country.percentage}%)</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-4">Top Cities</h4>
                  <div className="space-y-3">
                    {topCities.map((city, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <span className="text-xs text-gray-600">{city.city}</span>
                        <span className="text-sm font-semibold text-gray-900">{city.users.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-4">Age Distribution</h4>
                  <ResponsiveContainer width="100%" height={180}>
                    <BarChart data={websiteAge}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
                      <XAxis dataKey="age" tick={{ fill: '#6B7280', fontSize: 10 }} axisLine={{ stroke: '#E5E7EB' }} />
                      <YAxis tick={{ fill: '#6B7280', fontSize: 10 }} axisLine={false} tickLine={false} />
                      <Tooltip />
                      <Bar dataKey="users" fill="#6366F1" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <h4 className="text-sm font-semibold text-gray-900 mb-6">Interest Affinities</h4>
                <div className="grid grid-cols-5 gap-4">
                  {topInterests.map((interest, idx) => (
                    <div key={idx} className="text-center p-5 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200">
                      <div className="text-2xl font-bold text-gray-900 mb-2">{interest.users.toLocaleString()}</div>
                      <div className="text-xs text-gray-600 leading-tight">{interest.interest}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {selectedDemographic === 'linkedin' && (
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <h4 className="text-sm font-semibold text-gray-900 mb-6">Top Industries</h4>
                <div className="space-y-4">
                  {linkedinIndustries.map((industry, idx) => (
                    <div key={idx}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-gray-600">{industry.industry}</span>
                        <span className="text-xs font-bold text-gray-900">{industry.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2 shadow-inner">
                        <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 h-2 rounded-full shadow-sm" style={{ width: `${industry.percentage * 10}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <h4 className="text-sm font-semibold text-gray-900 mb-6">Top Metro Areas</h4>
                <div className="space-y-3">
                  {linkedinMetros.map((metro, idx) => (
                    <div key={idx} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                      <span className="text-xs text-gray-600">{metro.metro}</span>
                      <span className="text-sm font-semibold text-gray-900">{metro.followers.toLocaleString()} ({metro.percentage}%)</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {selectedDemographic === 'instagram' && (
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <h4 className="text-sm font-semibold text-gray-900 mb-6">Gender Distribution</h4>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-gray-600 font-medium">Female</span>
                      <span className="text-sm font-bold text-gray-900">59.3%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-3 shadow-inner">
                      <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-3 rounded-full shadow-sm" style={{ width: '59.3%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-gray-600 font-medium">Male</span>
                      <span className="text-sm font-bold text-gray-900">40.7%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-3 shadow-inner">
                      <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 h-3 rounded-full shadow-sm" style={{ width: '40.7%' }} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-4">Age Distribution</h4>
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={instagramAge}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
                      <XAxis dataKey="age" tick={{ fill: '#6B7280', fontSize: 10 }} />
                      <YAxis tick={{ fill: '#6B7280', fontSize: 10 }} axisLine={false} tickLine={false} />
                      <Tooltip />
                      <Bar dataKey="percentage" fill="#6366F1" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-4">Top Countries</h4>
                  <div className="space-y-3">
                    {instagramCountries.map((country, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <span className="text-xs text-gray-600">{country.country}</span>
                        <span className="text-sm font-semibold text-gray-900">{country.percentage}%</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-4">Top Cities</h4>
                  <div className="space-y-3">
                    {instagramCities.map((city, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <span className="text-xs text-gray-600">{city.city}</span>
                        <span className="text-sm font-semibold text-gray-900">{city.percentage}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedDemographic === 'facebook' && (
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <h4 className="text-sm font-semibold text-gray-900 mb-6">Gender Distribution</h4>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-gray-600 font-medium">Male</span>
                      <span className="text-sm font-bold text-gray-900">53.5%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-3 shadow-inner">
                      <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 h-3 rounded-full shadow-sm" style={{ width: '53.5%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-gray-600 font-medium">Female</span>
                      <span className="text-sm font-bold text-gray-900">46.5%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-3 shadow-inner">
                      <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-3 rounded-full shadow-sm" style={{ width: '46.5%' }} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-4">Age Distribution</h4>
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={facebookAge}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
                      <XAxis dataKey="age" tick={{ fill: '#6B7280', fontSize: 10 }} />
                      <YAxis tick={{ fill: '#6B7280', fontSize: 10 }} axisLine={false} tickLine={false} />
                      <Tooltip />
                      <Bar dataKey="percentage" fill="#6366F1" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-4">Top Countries</h4>
                  <div className="space-y-3">
                    {facebookCountries.map((country, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <span className="text-xs text-gray-600">{country.country}</span>
                        <span className="text-sm font-semibold text-gray-900">{country.percentage}%</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-4">Top Cities</h4>
                  <div className="space-y-3">
                    {facebookCities.map((city, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <span className="text-xs text-gray-600">{city.city}</span>
                        <span className="text-sm font-semibold text-gray-900">{city.percentage}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedDemographic === 'x' && (
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <h4 className="text-sm font-semibold text-gray-900 mb-6">Gender Distribution</h4>
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-gray-600 font-medium">Male</span>
                      <span className="text-sm font-bold text-gray-900">66.6%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-3 shadow-inner">
                      <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 h-3 rounded-full shadow-sm" style={{ width: '66.6%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-gray-600 font-medium">Female</span>
                      <span className="text-sm font-bold text-gray-900">32.1%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-3 shadow-inner">
                      <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-3 rounded-full shadow-sm" style={{ width: '32.1%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-gray-600 font-medium">Not Specified</span>
                      <span className="text-sm font-bold text-gray-900">1.3%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-3 shadow-inner">
                      <div className="bg-gradient-to-r from-gray-400 to-gray-500 h-3 rounded-full shadow-sm" style={{ width: '13%' }} />
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-4 italic">Heavily male-dominant, more pronounced than Meta or website</p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                  <h4 className="text-sm font-semibold text-gray-900 mb-4">Age Distribution</h4>
                  <div className="mb-4 p-4 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg border border-indigo-200">
                    <p className="text-sm text-indigo-900 font-semibold">75.4% of audience is 25-54 years old</p>
                  </div>
                  <div className="space-y-3">
                    {xAgeData.map((item, idx) => (
                      <div key={idx}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-gray-600 font-medium">{item.age}</span>
                          <span className="text-sm font-bold text-gray-900">{item.percentage}%</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2 shadow-inner">
                          <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 h-2 rounded-full shadow-sm transition-all" style={{ width: `${item.percentage * 3.5}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                  <h4 className="text-sm font-semibold text-gray-900 mb-6">Geographic Distribution</h4>
                  <div className="space-y-4">
                    {xCountries.map((country, idx) => (
                      <div key={idx}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-gray-600">{country.country}</span>
                          <span className="text-sm font-bold text-gray-900">{country.percentage}%</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2 shadow-inner">
                          <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full shadow-sm" style={{ width: `${country.percentage}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TED Talk Demographics */}
          {selectedDemographic === 'tedtalk' && (
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <h4 className="text-sm font-semibold text-gray-900 mb-6">Gender Distribution</h4>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-gray-600 font-medium">Male</span>
                      <span className="text-sm font-bold text-gray-900">65.2%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-3 shadow-inner">
                      <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 h-3 rounded-full shadow-sm" style={{ width: '65.2%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-gray-600 font-medium">Female</span>
                      <span className="text-sm font-bold text-gray-900">34.7%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-3 shadow-inner">
                      <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-3 rounded-full shadow-sm" style={{ width: '34.7%' }} />
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-4 italic">Male-skewing audience, typical for TED Talk viewership</p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                  <h4 className="text-sm font-semibold text-gray-900 mb-4">Age Distribution</h4>
                  <ResponsiveContainer width="100%" height={240}>
                    <BarChart data={tedTalkAge}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
                      <XAxis dataKey="age" tick={{ fill: '#6B7280', fontSize: 10 }} />
                      <YAxis tick={{ fill: '#6B7280', fontSize: 10 }} axisLine={false} tickLine={false} />
                      <Tooltip />
                      <Bar dataKey="percentage" fill="#6366F1" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                  <p className="text-xs text-gray-500 mt-3 italic">Mature audience: 66.8% are 45+ years old</p>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                  <h4 className="text-sm font-semibold text-gray-900 mb-6">Top Geographies (% of Views)</h4>
                  <div className="space-y-4">
                    {tedTalkCountries.map((country, idx) => (
                      <div key={idx}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-gray-600">{country.country}</span>
                          <span className="text-sm font-bold text-gray-900">{country.percentage}%</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2 shadow-inner">
                          <div className="bg-gradient-to-r from-red-500 to-red-600 h-2 rounded-full shadow-sm" style={{ width: `${country.percentage}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-4 italic">Nearly 50% US-based viewership</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}