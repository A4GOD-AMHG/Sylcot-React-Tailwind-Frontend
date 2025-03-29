import { BrowserRouter as Router, } from 'react-router-dom';
import { ThemeProvider } from '@/context/ThemeContext';
import AuthProvider from '@/providers/authProvider';
import RouterConfig from '@/routes/RouterConfig';
import Layout from '@/components/layout/Layout';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Layout>
            <RouterConfig />
          </Layout>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;