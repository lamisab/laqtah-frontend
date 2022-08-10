import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAppSelector } from "./app/hooks";

function App() {
  const { theme } = useAppSelector((state) => state.theme);

  return (
    <div className={`App ${theme}`}>
       <BrowserRouter>
        <Routes>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
