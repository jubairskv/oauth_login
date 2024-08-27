import { GoogleLogin } from "@react-oauth/google";
import "./App.css";
import { jwtDecode } from "jwt-decode";

function App() {
  return (
    <div className="App">
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          const decoded = jwtDecode(credentialResponse?.credential);
          console.log(decoded);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
}

export default App;
