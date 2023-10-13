import axios from "axios";
import { useState } from "react";

function Login(props) {
  const [Name, setName] = useState("");
  const [Pass, setPass] = useState("");

  const login = async (e) => {
    e.preventDefault();
    const obj = {
      Username: Name,
      Password: Pass,
    };
    await axios
      .post(
        "https://cookiestandapi3.azurewebsites.net/api/Users",
        obj
      )
      .then((res) => {
        console.log(res.data);
        props.LoginUser(true, res.data.token);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex items-center bg-red-100 justify-center my-4 ">
      <form onSubmit={login} className="space-y-4 w-3/4 bg-red-300 text-red-800">
        <h2 className="text-center mb-4">Login</h2>
        <div className="flex flex-col mb-4 w-3/5 mx-auto">
          <label htmlFor="Name" className="mb-2">Name</label>
          <input type="text" id="Name" placeholder="Name" onChange={(e) => setName(e.target.value)} className="p-2 border border-gray-300 rounded" required/>
        </div>
        <div className="flex flex-col mb-4 w-3/5 mx-auto">
          <label htmlFor="Password" className="mb-2">Password</label>
          <input type="password" id="Password" placeholder="Password" onChange={(e) => setPass(e.target.value)} className="p-2 border border-gray-300 rounded" required/>
        </div>
        <div className="flex justify-center">
  <button type='submit' className='px-4 py-2 bg-red-900 text-white rounded hover:bg-red-700'>Login</button>
</div>
      </form>
    </div>
  );
}

export default Login;
