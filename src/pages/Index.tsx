
import TopNavigation from '@/components/TopNavigation';
import Sidebar from '@/components/Sidebar';
import PostFeed from '@/components/PostFeed';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopNavigation />
      <div className="flex">
        <div className="hidden lg:block">
          <Sidebar />
        </div>
        <PostFeed />
      </div>
    </div>
  );
};

export default Index;
