import { MessageSquare, Eye, ArrowUp } from 'lucide-react';
import Link from 'next/link';

interface QuestionCardProps {
  question: any;
}

function QuestionCard({ question }: QuestionCardProps) {
  const formatTime = (date: string) => {
    const now = new Date();
    const created = new Date(date);
    const diffInHours = Math.floor((now.getTime() - created.getTime()) / (1000 * 60 * 60));

    if (diffInHours < 1) return 'just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    return `${Math.floor(diffInHours / 24)}d ago`;
  };

  return (
    <div className="border-b border-border py-5 px-4 hover:bg-muted/40 transition-colors rounded-lg">
      <div className="space-y-2">
        <h2 className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
          <Link href={`/questions/${question.id}`}>{question.title}</Link>
        </h2>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {question.content}
        </p>
      </div>

      <div className="mt-3 text-sm text-muted-foreground">
        Asked by{" "}
        <Link
          href={`/users/${question.author.username}`}
          className="text-primary hover:underline"
        >
          {question.author.username}
        </Link>{" "}
        • {formatTime(question.createdAt)}
      </div>

      <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <ArrowUp className="size-4 text-green-500" />
          {question.votes}
        </div>
        <div className="flex items-center gap-1">
          <MessageSquare className="size-4 text-blue-500" />
          {question.answers}
        </div>
        <div className="flex items-center gap-1">
          <Eye className="size-4" />
          {question.views}
        </div>
      </div>
    </div>
  );
}

export default QuestionCard;
