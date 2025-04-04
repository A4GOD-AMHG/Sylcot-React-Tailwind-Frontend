import { BrowserRouter as Router, } from 'react-router-dom';
import ThemeProvider from '@/providers/ThemeProvider';
import AuthProvider from '@/providers/AuthProvider';
import RouterConfig from '@/routes/RouterConfig';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <RouterConfig />
        </Router>
      </AuthProvider>
      <ToastContainer newestOnTop />
    </ThemeProvider>
  );
}

export default App;