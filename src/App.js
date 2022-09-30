import './App.css';
import Header from './components/Header/Header';
import UltimatePC from './components/UltimatePC/UltimatePC';
import InfoSection from './components/InfoSection/InfoSection';
import BreakTime from './components/BreakTime/BreakTime.JS';


function App() {
  return (
    <div>
      <Header></Header>
      <UltimatePC></UltimatePC>
      <InfoSection>
        <BreakTime></BreakTime>

      </InfoSection>

    </div>
  );
}

export default App;
