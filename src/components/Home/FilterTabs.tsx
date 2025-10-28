'use client';

import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select';

interface FilterTabsProps {
    activeSort: string;
    onSortChange: (sort: string) => void;
}

export default function FilterTabs({ activeSort, onSortChange }: FilterTabsProps) {
    const sortOptions = [
        { id: 'newest', label: 'Newest' },
        { id: 'trending', label: 'Trending' },
        { id: 'unanswered', label: 'Unanswered' },
    ];

    return (
        <div className="flex items-center justify-between border-b border-border pb-4">
            <div className="flex items-center space-x-1">
                {sortOptions.map((option) => (
                    <Button
                        key={option.id}
                        variant={activeSort === option.id ? 'default' : 'ghost'}
                        size="sm"
                        onClick={() => onSortChange(option.id)}
                        className="relative"
                    >
                        {option.label}
                    </Button>
                ))}
            </div>

            <div >
                <Select>
                    <SelectTrigger className="w-[180px] not-sm:w-20">
                        <SelectValue placeholder="Tags" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>All Tags</SelectLabel>
                            <SelectItem value='Javascript'>JavaScript</SelectItem>
                            <SelectItem value='React'>React</SelectItem>
                            <SelectItem value='Python'>Python</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
}