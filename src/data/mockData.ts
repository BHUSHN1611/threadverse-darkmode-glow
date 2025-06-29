
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
    title: 'The future of web development is here: AI-powered coding tools are changing everything',
    author: 'techguru_2024',
    community: 'r/webdev',
    content: 'Just tried the new AI coding assistant and my productivity has increased by 300%. What tools are you using?',
    upvotes: 1247,
    downvotes: 23,
    comments: 89,
    timestamp: '2 hours ago',
    tag: 'Discussion'
  },
  {
    id: '2',
    title: 'My first successful startup just got acquired! AMA',
    author: 'entrepreneur_jane',
    community: 'r/startups',
    content: 'After 3 years of grinding, we finally made it. Happy to share the journey and answer questions.',
    upvotes: 2156,
    downvotes: 45,
    comments: 234,
    timestamp: '4 hours ago',
    tag: 'Success Story'
  },
  {
    id: '3',
    title: 'React vs Vue vs Angular in 2024: A comprehensive comparison',
    author: 'frontendmaster',
    community: 'r/javascript',
    content: 'I spent 6 months building the same app in all three frameworks. Here are my findings...',
    upvotes: 892,
    downvotes: 67,
    comments: 156,
    timestamp: '6 hours ago',
    tag: 'Tutorial'
  },
  {
    id: '4',
    title: 'Just launched my indie game after 2 years of solo development!',
    author: 'pixelartist_dev',
    community: 'r/gamedev',
    content: 'It\'s finally live on Steam! Here\'s what I learned during the development process.',
    upvotes: 3421,
    downvotes: 89,
    comments: 445,
    timestamp: '8 hours ago',
    tag: 'Launch'
  },
  {
    id: '5',
    title: 'The psychology behind successful UX design patterns',
    author: 'ux_researcher',
    community: 'r/userexperience',
    content: 'Understanding cognitive load and user behavior is crucial for creating intuitive interfaces.',
    upvotes: 567,
    downvotes: 12,
    comments: 78,
    timestamp: '12 hours ago',
    tag: 'Research'
  }
];

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
    name: 'reactjs',
    displayName: 'React.js',
    members: 654321,
    description: 'The React community',
    isJoined: false
  },
  {
    id: '4',
    name: 'programming',
    displayName: 'Programming',
    members: 2345678,
    description: 'General programming discussions',
    isJoined: true
  },
  {
    id: '5',
    name: 'technology',
    displayName: 'Technology',
    members: 3456789,
    description: 'Latest in technology',
    isJoined: false
  }
];
