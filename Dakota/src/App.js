import { BrowserRouter as Router,  } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme/theme';
import Products from './ui/Products';
import Home from './ui/Home';
import ProductApp from './ui/ProductApp';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <ProductApp />
      </ThemeProvider>
    </Router>
  );
}

export default App;
