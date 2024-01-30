import { useState, useEffect} from 'react';
import './styles.css';
import axios from "axios";

// https://randomuser.me/api

// axios.get('/user?ID=12345')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });

const fetchRandomData = () => {
 return axios.get('https://randomuser.me/api')
.then(({data}) => {
    // handle success
    console.log(data);
    return JSON.stringify(data)
  })
.catch((error) => {
  // handle error
  console.log(error);
})
}


function App() {

const [counter, setCounter] = useState(0);
const [userData, setUserData] = useState("Random Data");

useEffect(() => {
  fetchRandomData().then((randomData) => {
    setUserData(randomData);
  })
},[])

return (
  <div className="container">
    <h2>{counter}</h2>
    <button onClick={() => {
      setCounter(counter - 1)
    }}>Decrement -</button>
    <button onClick={() => {
      setCounter(counter + 1)
    }}>Increment +</button>
    <p>{userData}</p>
  </div>
  )
}


export default App
