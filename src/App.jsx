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
  return  axios.get('https://randomuser.me/api')
     .then(({data}) => {
       // handle success
       console.log(data);
      return JSON.stringify(data);
     })
    .catch(error => {
       // handle error
       console.log(error);
     })
}


function App() {
  const [count, setCount] = useState(0);
  const [randomUserDataJson, setRandomUserDataJson] = useState("");

  useEffect(() => {
    fetchRandomData().then((randomData) =>{
      setRandomUserDataJson(randomData);
    });
  }, []);
 
  return (
    <div className='page'>
     <h1>Hello World</h1>
     <h2>{count}</h2>
     <button onClick={() => {
      setCount(count + 1)
     }}>Increment +</button>
     <button onClick={() => {
      setCount(count - 1)
     }}>Decrement -</button>
     <div className='stringDump'>
      {/* <p>{randomUserDataJson}</p> */}
     </div>
    </div>
    
  )
}


export default App
