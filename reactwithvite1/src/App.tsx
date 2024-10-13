import { JSXElementConstructor, ReactElement, ReactNode, useState } from 'react'
import './App.css'

type MessageProps = {
    reader: string;
    author: string;
    location: "top" | "middle" | "bottom";
  };

function App({ reader, author, location }: MessageProps) {
  const [count, setCount] = useState(0)

  const messages = {
    top: [
        <p>First message from {reader} to {author}.</p>,
        <p>Second message from {reader} to {author}.</p>,
        <p>Third message from {reader} to {author}.</p>,
        <p>Fourth message from {reader} to {author}.</p>,
        <p>Fifth message from {reader} to {author}.</p>
    ],
    middle: [
        <p>First message from {reader} to {author}.</p>,
        <p>Second message from {reader} to {author}.</p>,
        <p>Third message from {reader} to {author}.</p>,
        <p>Fourth message from {reader} to {author}.</p>,
        <p>Fifth message from {reader} to {author}.</p>
    ],
    bottom: [
        <p>First message from {reader} to {author}.</p>,
        <p>Second message from {reader} to {author}.</p>,
        <p>Third message from {reader} to {author}.</p>,
        <p>Fourth message from {reader} to {author}.</p>,
        <p>Fifth message from {reader} to {author}.</p>
    ]
};

  const message = () => {
    return messages[location][count];
  };

  const label = () => {
    return <span>{message()}</span>;
  };

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
            {label()}
        </button>
      </div>
    </>
  )
}

export default App
