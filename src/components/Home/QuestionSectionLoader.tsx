const QuestionSectionLoader = () => {
    return (
        <div>
            {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="border-b border-border py-6 animate-pulse">
                    <div className="flex gap-4">
                        <div className="flex flex-col gap-2 min-w-20">
                            <div className="h-4 bg-muted rounded w-12"></div>
                            <div className="h-4 bg-muted rounded w-8"></div>
                            <div className="h-4 bg-muted rounded w-10"></div>
                        </div>
                        <div className="flex-1 space-y-3">
                            <div className="h-6 bg-muted rounded w-3/4"></div>
                            <div className="h-4 bg-muted rounded w-full"></div>
                            <div className="h-4 bg-muted rounded w-2/3"></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default QuestionSectionLoader
