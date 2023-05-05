import {Routes, Route} from 'react-router-dom';
import Home from "./routes/home/home.component";
import SignIn from './routes/sign-in/sign-in.component';
import Navigation from './routes/navigation/navigation.component';


const Shop =()=>{
  return(
    <div>
      <h2>I am Here for The SHop</h2>
    </div>
  )
}

const App = () => {
   return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route  index element={<Home />}></Route>
        <Route  path='shop' element={<Shop />}></Route>
        <Route path='Sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
