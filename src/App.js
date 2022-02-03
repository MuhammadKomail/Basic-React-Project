import './App.css';
import Leftbar from './component/Leftbar';
import Navbar from './component/Navbar';
import AppRouter from './rout/rout';
import Drawer from './component/Drawer'
import Card from './component/Card';
// import { Provider } from "react-redux";
// import myStore from './redux/store'

function App() {
  return (
    <div className="App">
      {/* <Provider store={myStore}> */}
        {/* <AppRouter /> */}
      {/* </Provider> */}

       {/* <Navbar /> */}
      {/*<Leftbar /> */}
      {/* <Drawer /> */}
      <Card />
      
    </div>
  );
}

export default App;
