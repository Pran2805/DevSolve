'use client';

import { useState, useEffect, lazy, Suspense } from 'react';
// import { Footer } from '@/components/layout/footer';
// import { FilterTabs } from '@/components/questions/filter-tabs';
// import { Sidebar } from '@/components/layout/sidebar';
// import { AiWidget } from '@/components/ai/ai-widget';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import QuestionSectionLoader from '@/components/Home/QuestionSectionLoader';
import Footer from '@/components/Footer';
import AiWidget from '@/components/AiWidget';
import Sidebar from '@/components/Home/Sidebar';
const QuestionSection = lazy(() => import('@/components/Home/QuestionSection'))

const mockTags = [
  { id: '1', name: 'react', description: 'React library', questionCount: 1250 },
  { id: '2', name: 'javascript', description: 'JavaScript language', questionCount: 2890 },
  { id: '3', name: 'python', description: 'Python programming', questionCount: 1560 },
  { id: '4', name: 'nextjs', description: 'Next.js framework', questionCount: 890 },
];

const mockContributors = [
  { id: '1', username: 'reactdev', reputation: 1250 },
  { id: '2', username: 'pythoneer', reputation: 890 },
  { id: '3', username: 'jsmaster', reputation: 2100 },
  { id: '4', username: 'fullstack', reputation: 1560 },
];

export default function HomePage() {
  const [tags, setTags] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
const [contributors, setContributors] = useState<any>()
  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        setTags(mockTags);
        setContributors(mockContributors)
      } catch (error) {
        console.error('Failed to load data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-6">
        {!user && (
          <section className="text-center py-12 mb-8">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Ask. Solve. Learn — <span className="text-primary">Together</span>.
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              AI + Community-powered developer help. Get instant solutions and learn from the community.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg">Ask a Question</Button>
              <Button variant="outline" size="lg">Explore Questions</Button>
            </div>
          </section>
        )}

        <div>
          <div>
           
            
            <div className="mt-6">
              <Suspense fallback={<QuestionSectionLoader />}>
                <QuestionSection />
              </Suspense>
             
            </div>

            <div className="mt-8 text-center">
              <Button variant="outline" onClick={() => console.log('Load more')}>
                Load More Questions
              </Button>
            </div>
          </div>

          <div className="lg:col-span-1">
            <Sidebar topTags={tags} topContributors={contributors} />
          </div>
        </div>
      </main>

      <Footer />
      <AiWidget />
    </div>
  );
}