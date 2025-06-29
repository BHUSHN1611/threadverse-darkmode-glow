
import { mockPosts } from '@/data/mockData';
import PostCard from './PostCard';

const PostFeed = () => {
  return (
    <main className="flex-1 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground mb-2">Popular Posts</h1>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Hot
            </button>
            <button className="px-4 py-2 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/80 transition-colors">
              New
            </button>
            <button className="px-4 py-2 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/80 transition-colors">
              Top
            </button>
            <button className="px-4 py-2 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/80 transition-colors">
              Rising
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {mockPosts.map((post, index) => (
            <div
              key={post.id}
              style={{ animationDelay: `${index * 0.1}s` }}
              className="animate-fade-in"
            >
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default PostFeed;
