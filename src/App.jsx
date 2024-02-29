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
    console.log(data.results);
    return data;
  })
.catch((error) => {
  // handle error
  console.log(error);
})
}



function App() {

const [counter, setCounter] = useState(0);
const [userData, setUserData] = useState("Random Data");
const [userInfos, setUserInfos] = useState([]);

useEffect(() => {
  fetchRandomData().then((randomData) => {
    setUserData((randomData));
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
    {
      userInfos.map(user => {
        return(
          <div>
            <img src={user.picture.medium}/>
            <h1>{user.name.first}</h1>
            <h3>{user.dob.age}</h3>
          </div>
        )
      })
    }
  </div>
  )
}


export default App
