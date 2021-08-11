import logo from "./logo.svg";
import "./App.css";
import QuoteList from "./QuoteList";

// const quotes = [
//   { id: 1, authorId: 1, content: "This is a quote." },
//   { id: 2, authorId: 2, content: "This is another quote." },
// ];
// const authors = [
//   { id: 1, name: "Morgan" },
//   { id: 3, name: "Jane Doe" },
//   { id: 2, name: "John Doe" },
//   ,
// ];

// const exampleQuote = quotes[0];

// const author = authors.find((a) => {
//   return a.id === exampleQuote.authorId;
// });

const quotes = {
  1: { content: "This is a quote", authorId: 1 },
  2: { content: "This is another quote", authorId: 2 },
};

const authors = {
  1: { name: "Morgan" },
  2: { name: "John Doe" },
};

function App() {
  return (
    <div className="App">
      <h1>Quote App</h1>
      <QuoteList
        quotes={Object.entries(quotes).map((q) => {
          return { id: q[0], ...q[1] };
        })}
        authors={authors}
      />
    </div>
  );
}

export default App;
