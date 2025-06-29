
import { ArrowUp, ArrowDown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Post } from '@/data/mockData';
import { useState } from 'react';

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  const [userVote, setUserVote] = useState<'up' | 'down' | null>(null);
  const [localUpvotes, setLocalUpvotes] = useState(post.upvotes);
  const [localDownvotes, setLocalDownvotes] = useState(post.downvotes);

  const handleVote = (voteType: 'up' | 'down') => {
    if (userVote === voteType) {
      // Remove vote
      if (voteType === 'up') {
        setLocalUpvotes(prev => prev - 1);
      } else {
        setLocalDownvotes(prev => prev - 1);
      }
      setUserVote(null);
    } else {
      // Change vote or add new vote
      if (userVote === 'up' && voteType === 'down') {
        setLocalUpvotes(prev => prev - 1);
        setLocalDownvotes(prev => prev + 1);
      } else if (userVote === 'down' && voteType === 'up') {
        setLocalDownvotes(prev => prev - 1);
        setLocalUpvotes(prev => prev + 1);
      } else if (userVote === null) {
        if (voteType === 'up') {
          setLocalUpvotes(prev => prev + 1);
        } else {
          setLocalDownvotes(prev => prev + 1);
        }
      }
      setUserVote(voteType);
    }
  };

  const netScore = localUpvotes - localDownvotes;

  return (
    <Card className="bg-card border-border hover-lift transition-all duration-200 hover:border-primary/50 animate-fade-in">
      <CardContent className="p-4">
        <div className="flex space-x-3">
          {/* Voting Section */}
          <div className="flex flex-col items-center space-y-1 min-w-[40px]">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleVote('up')}
              className={`p-1 h-8 w-8 rounded hover:bg-primary/20 transition-colors ${
                userVote === 'up' ? 'text-primary bg-primary/10' : 'text-muted-foreground'
              }`}
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
            <span className={`text-sm font-medium ${
              userVote === 'up' ? 'text-primary' : userVote === 'down' ? 'text-red-400' : 'text-foreground'
            }`}>
              {netScore > 0 ? '+' : ''}{netScore}
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleVote('down')}
              className={`p-1 h-8 w-8 rounded hover:bg-red-500/20 transition-colors ${
                userVote === 'down' ? 'text-red-400 bg-red-500/10' : 'text-muted-foreground'
              }`}
            >
              <ArrowDown className="w-4 h-4" />
            </Button>
          </div>

          {/* Content Section */}
          <div className="flex-1">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
              <span className="font-medium text-primary hover:underline cursor-pointer">
                {post.community}
              </span>
              <span>•</span>
              <span>Posted by u/{post.author}</span>
              <span>•</span>
              <span>{post.timestamp}</span>
              {post.tag && (
                <>
                  <span>•</span>
                  <Badge variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/30">
                    {post.tag}
                  </Badge>
                </>
              )}
            </div>

            <h3 className="text-lg font-semibold text-foreground mb-2 hover:text-primary cursor-pointer transition-colors">
              {post.title}
            </h3>

            <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
              {post.content}
            </p>

            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <Button variant="ghost" size="sm" className="h-8 px-3 hover:bg-accent">
                💬 {post.comments} Comments
              </Button>
              <Button variant="ghost" size="sm" className="h-8 px-3 hover:bg-accent">
                Share
              </Button>
              <Button variant="ghost" size="sm" className="h-8 px-3 hover:bg-accent">
                Save
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PostCard;
