import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Router/Router';

function App() {
  return (
    <div className='dark:bg-slate-800'>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
