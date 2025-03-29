import { BrowserRouter as Router, } from 'react-router-dom';
import ThemeProvider from '@/providers/ThemeProvider';
import AuthProvider from '@/providers/AuthProvider';
import RouterConfig from '@/routes/RouterConfig';
import Layout from '@/components/layout/Layout';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <RouterConfig />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;