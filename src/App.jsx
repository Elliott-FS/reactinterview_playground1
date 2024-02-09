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
    return data;
  })
.catch((error) => {
  // handle error
  console.log(error);
})
}

const getFullUserName = (userInfo) =>{
  const {name: {first: last}} = userInfo;
  return `${first} ${last}`;
}


function App() {

const [counter, setCounter] = useState(0);
const [userData, setUserData] = useState("Random Data");
const [userInfos, setUserInfos] = useState([]);

useEffect(() => {
  fetchRandomData().then((randomData) => {
    setUserData(JSON.stringify(randomData));
    setUserInfos(randomData.results)
  })
},[])

return (
  <div className="container">
    <h2>{counter}</h2>
    <button onClick={() => {
      setCounter(counter + 1)
    }}>Increment +</button>
    <button onClick={() => {
      setCounter(counter - 1)
    }}>Decrement -</button>
    <p>{userData}</p>
  </div>
  )
}


export default App
