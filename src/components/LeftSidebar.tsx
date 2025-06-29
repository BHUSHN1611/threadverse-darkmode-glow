
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, TrendingUp, ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const LeftSidebar = () => {
  const [topicsOpen, setTopicsOpen] = useState(true);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Popular', path: '/popular', icon: TrendingUp },
  ];

  const topics = [
    { name: 'Internet Culture', slug: 'internet-culture' },
    { name: 'Games', slug: 'games' }, 
    { name: 'Q&As', slug: 'qas' },
    { name: 'Technology', slug: 'technology' },
    { name: 'Pop Culture', slug: 'pop-culture' }
  ];

  const recentCommunities = [
    'ts/UI_Design',
    'ts/whatisit', 
    'ts/TMKOC'
  ];

  const isActivePath = (path: string) => location.pathname === path;

  return (
    <aside className="p-4 space-y-4 h-screen overflow-y-auto">
      {/* Navigation Items */}
      <Card className="bg-card border-border">
        <CardContent className="p-3 space-y-1">
          {navigationItems.map((item) => (
            <Link key={item.name} to={item.path}>
              <Button
                variant={isActivePath(item.path) ? "default" : "ghost"}
                className={`w-full justify-start ${
                  isActivePath(item.path) 
                    ? "bg-primary text-white" 
                    : "hover:bg-accent text-foreground"
                }`}
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.name}
              </Button>
            </Link>
          ))}
        </CardContent>
      </Card>

      {/* Topics Section */}
      <Card className="bg-card border-border">
        <Collapsible open={topicsOpen} onOpenChange={setTopicsOpen}>
          <CollapsibleTrigger asChild>
            <CardHeader className="p-3 cursor-pointer hover:bg-accent/50 rounded-t-lg">
              <CardTitle className="text-sm font-medium text-foreground flex items-center justify-between">
                Topics
                {topicsOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              </CardTitle>
            </CardHeader>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <CardContent className="p-3 pt-0 space-y-1">
              {topics.map((topic) => (
                <Link key={topic.slug} to={`/topic/${topic.slug}`}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-sm hover:bg-accent text-muted-foreground hover:text-foreground"
                  >
                    {topic.name}
                  </Button>
                </Link>
              ))}
            </CardContent>
          </CollapsibleContent>
        </Collapsible>
      </Card>

      {/* Recent Communities */}
      <Card className="bg-card border-border">
        <CardHeader className="p-3">
          <CardTitle className="text-sm font-medium text-foreground">
            Recent Communities
          </CardTitle>
        </CardHeader>
        <CardContent className="p-3 pt-0 space-y-1">
          {recentCommunities.map((community) => (
            <Link key={community} to={`/community/${community.replace('ts/', '')}`}>
              <Button
                variant="ghost"
                className="w-full justify-start text-sm hover:bg-accent text-muted-foreground hover:text-foreground"
              >
                {community}
              </Button>
            </Link>
          ))}
        </CardContent>
      </Card>
    </aside>
  );
};

export default LeftSidebar;
