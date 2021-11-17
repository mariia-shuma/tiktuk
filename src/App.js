
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Feed from './components/Feed/Feed';
import UserInfo from './components/UserProfile/UserInfo';



function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/feed' element={<Feed/>} />
        <Route path='/userProfile/:name' element={<UserInfo/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;
