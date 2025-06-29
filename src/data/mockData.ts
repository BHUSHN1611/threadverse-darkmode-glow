
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
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&h=400&fit=crop',
    topic: 'q-as'
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
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=600&h=400&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
      topic: 'technology'
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
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop'
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
      tag: 'Resources'
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
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&h=400&fit=crop'
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
      tag: 'Solved'
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
