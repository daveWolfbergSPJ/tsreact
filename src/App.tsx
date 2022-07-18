import React, { useCallback } from "react";
import { FC } from "react";
import "./App.css";

interface BoxProps {
  children?: React.ReactNode;
}

const Heading = ({ title }: { title: string }) => <h2>{title}</h2>;

const Box: FC<BoxProps> = ({ children }) => (
  <div
    style={{
      padding: "1rem",
      fontWeight: "bold",
    }}
  >
    {children}
  </div>
);

const List: FC<{ 
  items: string[];
  onClick?: (item: string) => void
 }> = ({ items, onClick }) => (
  <ul>
    {items.map((item, index) => (
      <li key={index} onClick={() => onClick?.(item)}>{item}</li>
    ))}
  </ul>
);

function App() {
  const onListClick = useCallback((item: string) => {
    alert(item)
  }, []);
  return (
    <div>
      <Heading title="TSREACT" />
      <Box>Hello There!</Box>
      <List items={['one', 'two', 'three']} onClick={onListClick}/>
    </div>
  );
}

export default App;
