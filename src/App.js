import Header from './components/header/Header';
import Home from './components/home/Home';
import SignUp from './components/signUp/SignUp';
import { useSelector , useDispatch } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react';
import { login, logout } from './redux/userSlice'
import { auth } from './firebase'




function App() {

  const user = useSelector(state => state.userReducer)
  console.log(user)
  const dispatch = useDispatch()
  


  useEffect (() => {
    onAuthStateChanged(auth, user => {
      console.log(user)
      if(user){
        dispatch(login({
          email: user.email,
          uid : user.uid,
        })) 
      }else{
        dispatch(logout())
      }
    })
  },[])


  
  return (
    <div className="App">
      {!user ? 
        <SignUp />
        :<><Header /><Home /></>
      }
    </div>
  );
}

export default App;
