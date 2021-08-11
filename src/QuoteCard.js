import React from "react";

export default function QuoteCard({ content, author }) {
  return (
    <div>
      <p>{content}</p>
      <p>- {author.name}</p>
    </div>
  );
}
