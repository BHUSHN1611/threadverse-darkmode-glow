
import { Search, User } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const TopNavigation = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border px-4 py-3">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 threadspace-gradient rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">T</span>
          </div>
          <span className="text-xl font-bold text-primary">ThreadSpace</span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              type="text"
              placeholder="Search ThreadSpace..."
              className="pl-10 pr-4 py-2 w-full bg-input border-input focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200"
            />
          </div>
        </div>

        {/* User Section */}
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground transition-colors">
            Login
          </Button>
          <Avatar className="w-8 h-8 cursor-pointer hover:ring-2 hover:ring-primary transition-all">
            <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
            <AvatarFallback className="bg-secondary">
              <User className="w-4 h-4" />
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </nav>
  );
};

export default TopNavigation;
