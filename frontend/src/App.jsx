import axios from "axios"
import { useEffect, useState } from "react"

function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/api/users")
      .then(res => {
        setUsers(res.data)
      })
  }, [])

  return (
    <div>
      <h1>User List</h1>

      {users.map((user) => (
        <div key={user.user_id}>
          <p>ID: {user.user_id}</p>
          <p>Name: {user.first_name} {user.last_name}</p>
          <p>Age: {user.age}</p>
          <p>Email: {user.email}</p>
          <hr />
        </div>
      ))}

    </div>
  )
}

export default App