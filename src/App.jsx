import { useState, useEffect } from 'react';
import "./styles.css";
import axios from 'axios';

// https://randomuserapi.me/api

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

async function getRandomUsers() {
  try {
    const data = await axios.get("/api/users/random_user?size=3");
    console.log(data);
    return JSON.stringify(data);
  } catch(err) {
    console.log("error: ", err);
  }
}


function App() {
  const [counter, setCounter] = useState(0); 
  const [randomDataJson, setRandomDataJson] = useState("");

  useEffect(() => {
    getRandomUsers().then((randomData) => {
      setRandomDataJson(randomData);
    })
  },[])
 

  return (
    <>
      <div className = "App">
        <h1>Hello coding sandbox!</h1>
        <h2>Start coding to see some magic happen!</h2>
        <h1>
          {counter}
        </h1>
        <button onClick={() => {
          setCounter(counter + 1);
        }}>Increment +</button>
        <button onClick={() => {
          setCounter(counter - 1);
        }}>Decrement -</button>
        <h4>
          {randomDataJson}
        </h4>
      </div>
    </>
  )
}


export default App
