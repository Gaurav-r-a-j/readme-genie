import RootLayout from '@/components/layout/root-layout';
import HomePage from '@/pages/home/index'; // Adjust the import based on your file structure
import MainProvider from '@/providers/main-provider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <MainProvider>
        <RootLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Add more routes here as needed */}
          </Routes>
        </RootLayout>
      </MainProvider>
    </BrowserRouter>
  );
}

export default App;
