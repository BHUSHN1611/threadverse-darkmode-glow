
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const RightSidebar = () => {
  const popularCommunities = [
    { name: 'ts/NoStupidQuestions', members: '6.4M' },
    { name: 'ts/Minecraft', members: '8.5M' },
    { name: 'ts/Fitness', members: '12.4M' },
    { name: 'ts/DnD', members: '4.1M' },
    { name: 'ts/videos', members: '26.7M' },
  ];

  return (
    <aside className="p-4 space-y-4 h-screen overflow-y-auto">
      <Card className="bg-card border-border hover-lift">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-foreground">
            Popular Communities
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {popularCommunities.map((community) => (
            <Link 
              key={community.name} 
              to={`/community/${community.name.replace('ts/', '')}`}
              className="block"
            >
              <div className="flex items-center justify-between p-2 rounded-lg hover:bg-accent transition-colors group">
                <div className="flex-1">
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {community.name}
                  </span>
                  <p className="text-xs text-muted-foreground">
                    {community.members} members
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </CardContent>
      </Card>
    </aside>
  );
};

export default RightSidebar;
