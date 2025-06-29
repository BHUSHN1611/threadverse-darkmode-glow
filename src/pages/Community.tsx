
import { useParams } from 'react-router-dom';
import TopNavigation from '@/components/TopNavigation';
import LeftSidebar from '@/components/LeftSidebar';
import PostFeed from '@/components/PostFeed';
import RightSidebar from '@/components/RightSidebar';

const Community = () => {
  const { communityName } = useParams<{ communityName: string }>();

  const getInitial = (name: string) => {
    return name.charAt(0).toUpperCase();
  };

  return (
    <div className="min-h-screen bg-background">
      <TopNavigation />
      <div className="flex">
        <div className="w-[20%] min-w-[250px]">
          <LeftSidebar />
        </div>
        <div className="w-[60%] flex-1">
          {/* Community Header */}
          <div className="p-6 border-b border-border">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-white">
                  {getInitial(communityName || '')}
                </span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground">ts/{communityName}</h1>
                <p className="text-muted-foreground">Community posts and discussions</p>
              </div>
            </div>
          </div>
          <PostFeed feedType="community" communityName={communityName} />
        </div>
        <div className="w-[20%] min-w-[250px]">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default Community;
