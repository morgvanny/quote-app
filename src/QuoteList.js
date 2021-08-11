import React from "react";
import QuoteForm from "./QuoteForm";
import QuoteCard from "./QuoteCard";

export default function QuoteList({ quotes, authors }) {
  const quoteCards = quotes.map(({ id, content, authorId }) => {
    return <QuoteCard key={id} content={content} author={authors[authorId]} />;
  });

  return (
    <div>
      <QuoteForm />
      {quoteCards}
    </div>
  );
}
