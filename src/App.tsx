import './App.css';
import {useState} from 'react'

interface UserData {
  name: string;
  age: string;
  email: string;
}

function App() {
  const [list, setList] = useState<UserData[]>([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  function submitFormToNotion(){
    console.log("We are" + name + " " + age + " " + email);
    fetch("http://localhost:4000/submitFormToNotion", {
      method: "post",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        age: age,
        email: email,
      })
    }).then(response => response.json())
    .then(data => {
      console.log("Success ", data);
    }).catch((error) => {
      console.log("Error: ", error)
    })
  }

  return (

    <div className="App">
      <div>
        <h1>Testing</h1>
        <p>Name</p>
        <input type="text" id="name" onChange={(e) => setName(e.target.value)}></input>

        <p>Age</p>
        <input type="text" id="age" onChange={(e) => setAge(e.target.value)}></input>

        <p>Email</p>
        <input type="text" id="email" onChange={(e) => setEmail(e.target.value)}></input>

        <div>
          <button type="reset" onClick={submitFormToNotion}>
            Submit to notion
          </button>

          <button onClick={ () =>{
            fetch("http://localhost:8000")
            .then((response) => response.json())
            .then((payload: UserData[]) => {
              console.log(payload);
              setList(payload);
            })}}
            >Read notion
          </button>
          
        </div>
        <div>
          <ol>
            {list.map((row,idx) =>{
              return(
                <li key={idx}>
                  <a>Name: {row.name}  Age: {row.age} Email: {row.email}</a>
                </li>
              )
            })}
          </ol>
        </div>
      </div>

    </div>
  );
}

export default App;
