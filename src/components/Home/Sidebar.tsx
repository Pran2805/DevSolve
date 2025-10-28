import { Button } from '@/components/ui/button';
import { Tag, Users, Star, Github } from 'lucide-react';

interface SidebarProps {
  topTags: Array<{ id: string; name: string; questionCount: number }>;
  topContributors: Array<{ id: string; username: string; reputation: number }>;
}
// todo:optimize it 
export default function Sidebar({ topTags, topContributors }: SidebarProps) {
  return (
    <div className="space-y-6 pt-5">
      <Button className="w-full" size="lg">
        + Ask Question
      </Button>

      {/* Top Tags */}
      <div className="rounded-lg border border-border p-4">
        <h3 className="font-semibold mb-3 flex items-center gap-2">
          <Tag className="h-4 w-4" />
          Top Tags
        </h3>
        <div className="space-y-2">
          {topTags.map((tag) => (
            <a
              key={tag.id}
              href={`/tags/${tag.name}`}
              className="flex items-center justify-between rounded-md px-2 py-1.5 text-sm hover:bg-muted transition-colors"
            >
              <span className="font-medium">{tag.name}</span>
              <span className="text-muted-foreground">{tag.questionCount}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Top Contributors */}
      <div className="rounded-lg border border-border p-4">
        <h3 className="font-semibold mb-3 flex items-center gap-2">
          <Users className="h-4 w-4" />
          Top Contributors
        </h3>
        <div className="space-y-3">
          {topContributors && topContributors?.map((user, index) => (
              <div key={user.id} className="flex items-center justify-between">
                
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-medium">
                  {user.username[0].toUpperCase()}
                </div>
                <span className="text-sm font-medium">{user.username}</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Star className="h-3 w-3" />
                {user.reputation}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Tip Box */}
      <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
        <h3 className="font-semibold mb-2 text-sm">💡 AI Quick Help</h3>
        <p className="text-sm text-muted-foreground mb-3">
          Having an error? Paste your code and get instant AI suggestions.
        </p>
        <Button variant="outline" size="sm" className="w-full">
          Try AI Help
        </Button>
      </div>

      {/* GitHub Promo */}
      <div className="rounded-lg border border-border p-4">
        <div className="flex items-center gap-2 mb-2">
          <Github className="h-4 w-4" />
          <span className="font-semibold text-sm">Open Source</span>
        </div>
        <p className="text-sm text-muted-foreground mb-3">
          Contribute to DevSolve on GitHub
        </p>
        <Button variant="outline" size="sm" className="w-full">
          ⭐ Star Us
        </Button>
      </div>
    </div>
  );
}