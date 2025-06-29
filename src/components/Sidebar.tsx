
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { mockCommunities } from '@/data/mockData';

const Sidebar = () => {
  const formatMemberCount = (count: number): string => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  return (
    <aside className="w-80 p-4 space-y-4">
      <Card className="bg-card border-border hover-lift">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-foreground">
            Popular Communities
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {mockCommunities.map((community) => (
            <div
              key={community.id}
              className="flex items-center justify-between p-3 rounded-lg bg-accent/50 hover:bg-accent transition-colors group"
            >
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-white">
                      {community.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                    r/{community.name}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {formatMemberCount(community.members)} members
                </p>
              </div>
              <Button
                size="sm"
                variant={community.isJoined ? "secondary" : "default"}
                className={`min-w-[60px] ${
                  community.isJoined
                    ? "bg-secondary hover:bg-secondary/80"
                    : "bg-primary hover:bg-primary/90 text-white"
                } transition-all duration-200`}
              >
                {community.isJoined ? "Joined" : "Join"}
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="bg-card border-border hover-lift">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-foreground">
            Quick Actions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button variant="outline" className="w-full justify-start hover:bg-primary hover:text-white transition-colors">
            Create Post
          </Button>
          <Button variant="outline" className="w-full justify-start hover:bg-primary hover:text-white transition-colors">
            Create Community
          </Button>
          <Button variant="outline" className="w-full justify-start hover:bg-primary hover:text-white transition-colors">
            Browse Popular
          </Button>
        </CardContent>
      </Card>
    </aside>
  );
};

export default Sidebar;
