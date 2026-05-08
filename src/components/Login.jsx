import { useState } from "react"

function Login({ onLogin }) {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")


  function handleLogin() {

    if (!username || !password) {
      alert("Fill all fields")
      return
    }

    onLogin(username)
  }


  return (

    <div style={{
      height: "90vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(to right,#0f172a,#1e3a8a,#06b6d4)"
    }}>

      <div style={{
        background: "white",
        padding: "25px",
        borderRadius: "10px",
        width: "280px",
        textAlign: "center"
      }}>

        <h2>Login</h2>

        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            margin: "10px 0"
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px"
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "10px",
            background: "#0ea5e9",
            color: "white",
            border: "none",
            cursor: "pointer"
          }}
        >
          Login
        </button>

      </div>

    </div>

  )
}

export default Login