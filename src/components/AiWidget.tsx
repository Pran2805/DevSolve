'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { X, MessageCircle, Sparkles } from 'lucide-react';
import { Textarea } from './ui/textarea';

export default function AiWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('AI Help:', message);
    setMessage('');
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 size  -14 rounded-full shadow-lg"
        size="lg"
      >
        <Sparkles className="size-6" />
      </Button>

      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 rounded-lg border border-border bg-background shadow-xl">
          <div className="flex items-center justify-between border-b border-border p-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">AI Assistant</h3>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="p-4">
            <p className="text-sm text-muted-foreground mb-4">
              Describe your coding issue and get instant AI-powered help.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-3">
              
              <Textarea 
              value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={8}
                placeholder="I'm getting an error when..."
                
                />
              <Button type="submit" className="w-full" size="sm">
                <MessageCircle className="h-4 w-4 mr-2" />
                Get Help
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}