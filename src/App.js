import './App.css';
import GlobalStyle from './GlobalStyles';
import TitleCalculator from '../src/components/titleCalculator/TitleCalculator';
import PanelCalculator from '../src/components/panelCalculator/PanelCalculator';


function App() {
  return (
      <>
          <GlobalStyle />
          <TitleCalculator />
          <PanelCalculator />
      </>
  );
}

export default App;
