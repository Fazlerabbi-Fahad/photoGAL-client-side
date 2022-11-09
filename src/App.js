import { RouterProvider } from 'react-router-dom';
import routes from "./Routes/Routes/Routes";
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className='max-w-screen-lg m-auto'>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
