
import { mockPosts, topicPosts, communityPosts } from '@/data/mockData';
import PostCard from './PostCard';

interface PostFeedProps {
  feedType?: 'home' | 'popular' | 'topic' | 'community';
  topicName?: string;
  communityName?: string;
}

const PostFeed = ({ feedType = 'home', topicName, communityName }: PostFeedProps) => {
  const getFeedTitle = () => {
    switch (feedType) {
      case 'popular':
        return 'Popular Posts';
      case 'topic':
        if (topicName === 'qas') return 'Q&As Posts';
        if (topicName === 'pop-culture') return 'Pop Culture Posts';
        return `${topicName?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} Posts`;
      case 'community':
        return `ts/${communityName}`;
      default:
        return 'Popular Posts';
    }
  };

  const getFeedPosts = () => {
    switch (feedType) {
      case 'popular':
        return mockPosts.sort((a, b) => b.upvotes - a.upvotes);
      case 'topic':
        if (topicName && topicPosts[topicName]) {
          return topicPosts[topicName];
        }
        return mockPosts.filter(post => post.topic === topicName).slice(0, 3);
      case 'community':
        if (communityName && communityPosts[communityName]) {
          return communityPosts[communityName];
        }
        return mockPosts.filter(post => post.community.includes(communityName || '')).slice(0, 3);
      default:
        return mockPosts;
    }
  };

  const posts = getFeedPosts();

  const getSortButtons = () => {
    if (feedType === 'topic' || feedType === 'community') {
      return null;
    }

  //   return (
  //     <div className="flex space-x-2">
  //       <button className="px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">
  //         Hot
  //       </button>
  //       <button className="px-4 py-2 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/80 transition-colors">
  //         New
  //       </button>
  //       <button className="px-4 py-2 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/80 transition-colors">
  //         Top
  //       </button>
  //       <button className="px-4 py-2 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/80 transition-colors">
  //         Rising
  //       </button>
  //     </div>
  //   );
  // };

  return (
    <main className="p-4 h-screen overflow-y-auto">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground mb-2">{getFeedTitle()}</h1>
          {getSortButtons()}
        </div>

        <div className="space-y-4">
          {posts.length > 0 ? (
            posts.map((post, index) => (
              <div
                key={post.id}
                style={{ animationDelay: `${index * 0.1}s` }}
                className="animate-fade-in"
              >
                <PostCard 
                  post={post} 
                  onClick={() => {
                    // Future: Navigate to post detail
                    console.log('Navigate to post:', post.id);
                  }}
                />
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No posts found for this {feedType}.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default PostFeed;
