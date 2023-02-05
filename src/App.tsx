import './App.css';
import { Container } from '@mui/system';
import { NavigationBar } from './components/common/NavigationBar';

function App() {
  return (
    <div className="App">
      <Container maxWidth="xl">
        <NavigationBar />
      </Container>
    </div>
  );
}

export default App;
