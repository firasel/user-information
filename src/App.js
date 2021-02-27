import { useEffect, useState } from 'react';
import './App.css';
import AddUser from './components/AddUser/AddUser';
import User from './components/User/User';

function App() {
  const [users, setUsers] = useState([]);
  const [addUser,setAddUser]=useState([]);

  useEffect(()=>{
    fetch('https://randomuser.me/api/?results=15')
    .then(res=>res.json())
    .then(data=>{
      data.results.map(dt=>{
        dt.salary=Math.round(Math.random()*10000)
      })
      setUsers(data.results)
    })
  },[])
  const [userSalary, setUserSalary] = useState(0)
  const handleAddUser=(user)=>{
    const newUser=[...addUser,user]
    setUserSalary(userSalary+user.salary)
    setAddUser(newUser)
  }


  return (
    <div className="App">
      <div className="addedUser">
        <div className='addUsers'>
          <h4>Total Salary:{userSalary}</h4>
        </div>
        {
          addUser.map(user=>{
            return <AddUser user={user}></AddUser>
          })
        }
      </div>
      <div className="users">
        {
          users.map(user=>{
            return <User handleAddUser={handleAddUser} users={user}></User>
          })
        }
      </div>
    </div>
  );
}

export default App;
