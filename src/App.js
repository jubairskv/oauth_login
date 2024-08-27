import { GoogleLogin } from "@react-oauth/google";
import "./App.css";

function App() {
  return (
    <div className="App">
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />;
    </div>
  );
}

export default App;
