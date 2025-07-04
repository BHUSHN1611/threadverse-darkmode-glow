
import TopNavigation from '@/components/TopNavigation';
import LeftSidebar from '@/components/LeftSidebar';
import PostFeed from '@/components/PostFeed';
import RightSidebar from '@/components/RightSidebar';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopNavigation />
      <div className="flex">
        <div className="w-[20%] min-w-[250px]">
          <LeftSidebar />
        </div>
        <div className="w-[60%] flex-1">
          <PostFeed feedType="home" />
        </div>
        <div className="w-[20%] min-w-[250px]">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default Index;
