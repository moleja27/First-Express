import viteLogo from "/vite.svg";
import './App.css'
import axios from "axios";
import { useEffect } from "react";


function App() {
  const [count, setCount] = useState(0);

  const fetchApi = async () => {

    const response = await axios.get("http://localhost:8080/api");
    console.log(response);

  };

  useEffect(() => {
    fetchApi();

  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
