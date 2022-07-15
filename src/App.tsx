import React from "react";
import "./App.css";

const Heading = ({title}: { title: string}) => <h2>{title}</h2>;
const Box = ({children}: { children: React.ReactNode}) => (
  <div>
    {children}
  </div>
) 

function App() {
  return (
    <div>
      <Heading title="TSREACT" />
      <Box>
        Hello There
      </Box>
    </div>
  );
}

export default App;
