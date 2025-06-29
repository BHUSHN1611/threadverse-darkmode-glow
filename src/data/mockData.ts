export interface Post {
  id: string;
  title: string;
  author: string;
  community: string;
  content: string;
  upvotes: number;
  downvotes: number;
  comments: number;
  timestamp: string;
  tag?: string;
  image?: string;
  topic?: string;
}

export interface Community {
  id: string;
  name: string;
  displayName: string;
  members: number;
  description: string;
  isJoined: boolean;
}

export const mockPosts: Post[] = [
  {
    id: '1',
    title: 'Found this strange device in my garage, anyone know what it is?',
    author: 'mystery_finder',
    community: 'ts/whatisit',
    content: 'My grandfather left this behind. It has some weird symbols and mechanical parts. Any ideas what this could be used for?',
    upvotes: 847,
    downvotes: 23,
    comments: 156,
    timestamp: '3 hours ago',
    tag: 'Unsolved',
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=400&fit=crop',
    topic: 'qas'
  },
  {
    id: '2',
    title: 'My new workspace setup is finally complete!',
    author: 'ui_designer_pro',
    community: 'ts/UI_Design',
    content: 'After months of planning, here\'s my dream workspace for UI/UX design. The monitor setup is incredible for design work.',
    upvotes: 1247,
    downvotes: 45,
    comments: 89,
    timestamp: '2 hours ago',
    tag: 'Showcase',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=400&fit=crop',
    topic: 'technology'
  },
  {
    id: '3',
    title: 'React vs Vue vs Angular in 2024: A comprehensive comparison',
    author: 'frontendmaster',
    community: 'ts/webdev',
    content: 'I spent 6 months building the same app in all three frameworks. Here are my findings on performance, developer experience, and ecosystem...',
    upvotes: 892,
    downvotes: 67,
    comments: 234,
    timestamp: '6 hours ago',
    tag: 'Discussion',
    topic: 'technology'
  },
  {
    id: '4',
    title: 'Beautiful mountain sunrise from my camping trip',
    author: 'nature_lover_42',
    community: 'ts/EarthPorn',
    content: 'Woke up at 5 AM to catch this incredible sunrise in the Rocky Mountains. The colors were absolutely breathtaking.',
    upvotes: 3421,
    downvotes: 89,
    comments: 145,
    timestamp: '1 day ago',
    tag: 'OC',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=400&fit=crop',
    topic: 'internet-culture'
  },
  {
    id: '5',
    title: 'Gaming setup evolution: 2020 vs 2024',
    author: 'gamer_enthusiast',
    community: 'ts/battlestations',
    content: 'Here\'s how my gaming setup has evolved over the past 4 years. The RGB lighting and ultrawide monitor made such a difference!',
    upvotes: 567,
    downvotes: 12,
    comments: 78,
    timestamp: '5 hours ago',
    tag: 'Before & After',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop',
    topic: 'games'
  }
];

export const topicPosts: Record<string, Post[]> = {
  'internet-culture': [
    {
      id: 'ic1',
      title: 'When social media algorithms perfectly predict your mood',
      author: 'meme_lord_2024',
      community: 'ts/memes',
      content: 'Anyone else notice how Instagram knows exactly when you need cat videos?',
      upvotes: 2341,
      downvotes: 45,
      comments: 287,
      timestamp: '4 hours ago',
      tag: 'Relatable',
      image: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=400&h=400&fit=crop',
      topic: 'internet-culture'
    },
    {
      id: 'ic2',
      title: 'Found this gem from 2010 internet culture',
      author: 'nostalgia_hunter',
      community: 'ts/nostalgia',
      content: 'Remember when this was the pinnacle of internet humor?',
      upvotes: 1567,
      downvotes: 23,
      comments: 234,
      timestamp: '7 hours ago',
      tag: 'Throwback',
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop',
      topic: 'internet-culture'
    }
  ],
  'games': [
    {
      id: 'g1',
      title: 'My indie game development journey: 2 years later',
      author: 'indie_dev_dreams',
      community: 'ts/gamedev',
      content: 'Started as a complete beginner, now launching on Steam next month!',
      upvotes: 4521,
      downvotes: 67,
      comments: 445,
      timestamp: '3 hours ago',
      tag: 'Success Story',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop',
      topic: 'games'
    },
    {
      id: 'g2',
      title: 'Retro gaming setup in my basement',
      author: 'retro_gamer_dad',
      community: 'ts/retrogaming',
      content: 'Finally finished my retro gaming corner with original consoles from the 80s and 90s.',
      upvotes: 1834,
      downvotes: 12,
      comments: 156,
      timestamp: '1 day ago',
      tag: 'Setup',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop',
      topic: 'games'
    }
  ],
  'technology': [
    {
      id: 't1',
      title: 'AI code assistants: Productivity boost or crutch?',
      author: 'senior_dev_2024',
      community: 'ts/programming',
      content: 'After using AI coding tools for 6 months, here are my honest thoughts...',
      upvotes: 2847,
      downvotes: 234,
      comments: 567,
      timestamp: '2 hours ago',
      tag: 'Discussion',
      topic: 'technology'
    },
    {
      id: 't2',
      title: 'My home lab server rack is finally complete',
      author: 'homelab_enthusiast',
      community: 'ts/homelab',
      content: 'Running 15 VMs, Kubernetes cluster, and media server. The cable management took forever!',
      upvotes: 1923,
      downvotes: 45,
      comments: 234,
      timestamp: '6 hours ago',
      tag: 'Showcase',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=400&fit=crop',
      topic: 'technology'
    }
  ],
  'qas': [
    {
      id: 'qa1',
      title: 'Why do we see faces in clouds and random objects?',
      author: 'curious_mind_123',
      community: 'ts/explainlikeimfive',
      content: 'I keep seeing faces everywhere - in clouds, in wood grain, in electrical outlets. Is there a scientific reason for this?',
      upvotes: 3456,
      downvotes: 78,
      comments: 567,
      timestamp: '5 hours ago',
      tag: 'Science',
      image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=400&fit=crop',
      topic: 'qas'
    },
    {
      id: 'qa2',
      title: 'How do noise-canceling headphones actually work?',
      author: 'tech_learner',
      community: 'ts/askscience',
      content: 'I understand they block sound, but how do they know which sounds to cancel and which to let through?',
      upvotes: 2134,
      downvotes: 45,
      comments: 298,
      timestamp: '8 hours ago',
      tag: 'Technology',
      topic: 'qas'
    },
    {
      id: 'qa3',
      title: 'What happens to all the stuff we flush down toilets?',
      author: 'environmentally_aware',
      community: 'ts/nostupidquestions',
      content: 'Like seriously, where does it all go? How is it processed? This keeps me up at night.',
      upvotes: 1876,
      downvotes: 23,
      comments: 445,
      timestamp: '12 hours ago',
      tag: 'Environment',
      image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=400&fit=crop',
      topic: 'qas'
    }
  ],
  'pop-culture': [
    {
      id: 'pc1',
      title: 'Marvel just announced 12 new movies for Phase 6',
      author: 'marvel_fanatic',
      community: 'ts/marvelstudios',
      content: 'The lineup looks incredible! X-Men, Fantastic Four, and some surprises. What are your thoughts on the timeline?',
      upvotes: 8934,
      downvotes: 234,
      comments: 1234,
      timestamp: '2 hours ago',
      tag: 'News',
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=400&fit=crop',
      topic: 'pop-culture'
    },
    {
      id: 'pc2',
      title: 'Taylor Swift\'s new album breaks streaming records again',
      author: 'music_charts_watcher',
      community: 'ts/popheads',
      content: 'Over 300 million streams in the first 24 hours. The numbers are absolutely insane!',
      upvotes: 5678,
      downvotes: 567,
      comments: 892,
      timestamp: '6 hours ago',
      tag: 'Music',
      topic: 'pop-culture'
    },
    {
      id: 'pc3',
      title: 'Netflix cancels another beloved series after 2 seasons',
      author: 'binge_watcher_2024',
      community: 'ts/television',
      content: 'Why does Netflix keep doing this to us? Just when shows get good, they axe them. RIP to another great show.',
      upvotes: 4321,
      downvotes: 156,
      comments: 678,
      timestamp: '1 day ago',
      tag: 'Discussion',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop',
      topic: 'pop-culture'
    }
  ]
};

export const communityPosts: Record<string, Post[]> = {
  'UI_Design': [
    {
      id: 'ui1',
      title: 'Mobile app redesign: Before vs After',
      author: 'ux_designer_jane',
      community: 'ts/UI_Design',
      content: 'Spent 3 months redesigning this fintech app. User engagement increased by 150%!',
      upvotes: 1834,
      downvotes: 23,
      comments: 187,
      timestamp: '4 hours ago',
      tag: 'Case Study',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=400&fit=crop'
    },
    {
      id: 'ui2',
      title: 'Design system components I wish I had earlier',
      author: 'component_master',
      community: 'ts/UI_Design',
      content: 'These 10 components would have saved me hundreds of hours in my design career.',
      upvotes: 967,
      downvotes: 12,
      comments: 89,
      timestamp: '1 day ago',
      tag: 'Resources',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop'
    }
  ],
  'whatisit': [
    {
      id: 'wi1',
      title: 'Strange metal object found while metal detecting',
      author: 'treasure_hunter_99',
      community: 'ts/whatisit',
      content: 'Found this at an old farmhouse site. Has intricate engravings and feels very old.',
      upvotes: 2341,
      downvotes: 45,
      comments: 456,
      timestamp: '2 hours ago',
      tag: 'Unsolved',
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=400&fit=crop'
    },
    {
      id: 'wi2',
      title: 'Grandfather\'s tool collection mystery item',
      author: 'vintage_tools',
      community: 'ts/whatisit',
      content: 'Inherited this workshop but can\'t figure out what this specialized tool was used for.',
      upvotes: 1567,
      downvotes: 23,
      comments: 234,
      timestamp: '8 hours ago',
      tag: 'Solved',
      image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=400&fit=crop'
    }
  ],
  'TMKOC': [
    {
      id: 'tm1',
      title: 'Jethalal\'s best comedy moments compilation',
      author: 'tmkoc_fan_forever',
      community: 'ts/TMKOC',
      content: 'Rewatching old episodes and Jethalal never fails to make me laugh. These are his top 10 moments!',
      upvotes: 2456,
      downvotes: 34,
      comments: 345,
      timestamp: '3 hours ago',
      tag: 'Comedy',
      image: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=400&h=400&fit=crop'
    },
    {
      id: 'tm2',
      title: 'Remember when TMKOC had different storylines?',
      author: 'nostalgic_viewer',
      community: 'ts/TMKOC',
      content: 'The early seasons had so much variety. Now it feels repetitive. Anyone else miss the old format?',
      upvotes: 1789,
      downvotes: 89,
      comments: 267,
      timestamp: '1 day ago',
      tag: 'Discussion'
    }
  ],
  'NoStupidQuestions': [
    {
      id: 'ns1',
      title: 'Is it weird that I talk to my plants?',
      author: 'plant_parent_123',
      community: 'ts/NoStupidQuestions',
      content: 'I find myself having full conversations with my houseplants. Is this normal or should I be concerned?',
      upvotes: 3456,
      downvotes: 23,
      comments: 567,
      timestamp: '4 hours ago',
      tag: 'Lifestyle'
    },
    {
      id: 'ns2',
      title: 'Why do I always think of the perfect comeback hours later?',
      author: 'shower_thoughts_user',
      community: 'ts/NoStupidQuestions',
      content: 'There has to be a scientific explanation for this phenomenon. It happens every single time!',
      upvotes: 5678,
      downvotes: 45,
      comments: 789,
      timestamp: '8 hours ago',
      tag: 'Psychology',
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=400&fit=crop'
    }
  ],
  'Minecraft': [
    {
      id: 'mc1',
      title: 'My 5-year survival world castle is finally complete',
      author: 'master_builder_2024',
      community: 'ts/Minecraft',
      content: 'Started this project in 2019 and finally finished it! Every block was placed by hand in survival mode.',
      upvotes: 12456,
      downvotes: 67,
      comments: 892,
      timestamp: '2 hours ago',
      tag: 'Build',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop'
    },
    {
      id: 'mc2',
      title: 'Found 12 diamonds in one cave system!',
      author: 'lucky_miner',
      community: 'ts/Minecraft',
      content: 'Best mining session ever! Y-level -58 is definitely the sweet spot for 1.21.',
      upvotes: 3456,
      downvotes: 123,
      comments: 234,
      timestamp: '6 hours ago',
      tag: 'Achievement'
    }
  ],
  'Fitness': [
    {
      id: 'fit1',
      title: 'Before and after: 2 years of consistent training',
      author: 'transformation_journey',
      community: 'ts/Fitness',
      content: 'Started at 300lbs, now at 180lbs. Consistency is everything. Here\'s my story and routine.',
      upvotes: 8934,
      downvotes: 45,
      comments: 1234,
      timestamp: '1 hour ago',
      tag: 'Progress',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop'
    },
    {
      id: 'fit2',
      title: 'Home gym setup for under $500',
      author: 'budget_fitness_guru',
      community: 'ts/Fitness',
      content: 'You don\'t need expensive equipment to get fit. Here\'s how I built an effective home gym on a budget.',
      upvotes: 4567,
      downvotes: 78,
      comments: 567,
      timestamp: '5 hours ago',
      tag: 'Equipment'
    }
  ],
  'DnD': [
    {
      id: 'dnd1',
      title: 'My players just derailed 6 months of campaign planning',
      author: 'forever_dm',
      community: 'ts/DnD',
      content: 'They decided to befriend the BBEG instead of fighting him. Now I have to rewrite everything. Send help.',
      upvotes: 6789,
      downvotes: 23,
      comments: 890,
      timestamp: '3 hours ago',
      tag: 'DM Problems',
      image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=400&fit=crop'
    },
    {
      id: 'dnd2',
      title: 'First time playing D&D at 45 years old',
      author: 'new_adventurer',
      community: 'ts/DnD',
      content: 'Never thought I\'d try this "nerdy" game. Now I\'m completely hooked! Why did I wait so long?',
      upvotes: 4321,
      downvotes: 12,
      comments: 456,
      timestamp: '1 day ago',
      tag: 'New Player'
    }
  ],
  'videos': [
    {
      id: 'vid1',
      title: 'This street performer\'s skills are absolutely insane',
      author: 'video_curator',
      community: 'ts/videos',
      content: 'Saw this guy in NYC yesterday. The crowd was going wild! Had to record and share.',
      upvotes: 15678,
      downvotes: 234,
      comments: 1567,
      timestamp: '2 hours ago',
      tag: 'Street Performance',
      image: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=400&h=400&fit=crop'
    },
    {
      id: 'vid2',
      title: 'Cat discovers automatic feeder, chaos ensues',
      author: 'pet_owner_life',
      community: 'ts/videos',
      content: 'My cat figured out how to trigger the feeder repeatedly. RIP my kibble budget.',
      upvotes: 8901,
      downvotes: 45,
      comments: 678,
      timestamp: '4 hours ago',
      tag: 'Pets'
    }
  ]
};

export const mockCommunities: Community[] = [
  {
    id: '1',
    name: 'webdev',
    displayName: 'Web Development',
    members: 1234567,
    description: 'A community for web developers',
    isJoined: false
  },
  {
    id: '2',
    name: 'javascript',
    displayName: 'JavaScript',
    members: 987654,
    description: 'Everything about JavaScript',
    isJoined: true
  },
  {
    id: '3',
    name: 'UI_Design',
    displayName: 'UI Design',
    members: 654321,
    description: 'User Interface Design Community',
    isJoined: false
  },
  {
    id: '4',
    name: 'whatisit',
    displayName: 'What is this thing?',
    members: 2345678,
    description: 'Help identify mysterious objects',
    isJoined: true
  },
  {
    id: '5',
    name: 'TMKOC',
    displayName: 'Taarak Mehta Ka Ooltah Chashmah',
    members: 456789,
    description: 'Indian TV show community',
    isJoined: false
  }
];
