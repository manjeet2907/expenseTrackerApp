import Form from "./Components/Form";
import Graph from "./Components/Graph";
import "./Styles/dist/app.css";

function App() {
  return (
    <div className='App'>
      <div className='container mx-auto max-w-full text-center drop-shadow-lg text-gray-800'>
        <h1 className='text-5xl py-8 mb-10 bg-slate-800 text-white rounded'>
          Expense Tracking App
        </h1>
        <div className='grid md:grid-cols-2 gap-4'>
          <Graph />
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
