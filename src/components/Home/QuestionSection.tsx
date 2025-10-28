import { useEffect, useState } from "react";
import QuestionCard from "./QuestionCard";
import FilterTabs from "./FilterTabs";

const mockQuestions: any[] = [
  {
    id: '1',
    title: 'How to handle async operations in React useEffect?',
    content: 'I\'m trying to fetch data from an API in my React component using useEffect, but I\'m getting infinite re-renders. Here\'s my code...',
    tags: ['react', 'javascript', 'async'],
    author: { id: '1', username: 'reactdev', email: 'dev@example.com', reputation: 1250 },
    votes: 15,
    answers: 3,
    views: 142,
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date().toISOString(),
    isAnswered: true,
  },
  {
    id: '2',
    title: 'Python TypeError: unsupported operand type(s) for +: \'int\' and \'str\'',
    content: 'I\'m getting this error when trying to concatenate a number and string in Python. I thought Python handled type conversion automatically...',
    tags: ['python', 'typeerror', 'beginners'],
    author: { id: '2', username: 'pythoneer', email: 'py@example.com', reputation: 890 },
    votes: 8,
    answers: 0,
    views: 67,
    createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date().toISOString(),
    isAnswered: false,
  },
];

const QuestionSection = () => {
    
  const [activeSort, setActiveSort] = useState('newest');
  const [questions, setQuestions] = useState<any[]>([]);
    useEffect(()=>{
       
        setQuestions(mockQuestions);
    }, [])
  return (
    <div className="px-3 not-sm:p-0">
       <FilterTabs activeSort={activeSort} onSortChange={setActiveSort} />
      <div>

      {questions.map((question) => (
        <QuestionCard key={question.id} question={question} />
      ))}
      </div>
    </div>
  )
}

export default QuestionSection
