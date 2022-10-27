import "./App.css";
import Card from "./components/Card";
import axios from "axios";
import { useState, useEffect } from "react";
import RiseLoader from "react-spinners/RiseLoader";

const url = "https://randomuser.me/api/";

function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  const getUser = async () => {
    try {
      const { data } = await axios.get(url);
      setUser(data.results[0]);
    } catch (error) {
      alert(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);

      setLoading(true);
    }
  };
  console.log(user);
  useEffect(() => {
    getUser();
  }, []);

  if (loading) {
    return <RiseLoader color="#8AEC4F" />;
  }

  return (
    <div className="appcont">
      <Card user={user} />
      <button className="btn" onClick={() => getUser()}>
        Random User
      </button>
    </div>
  );
}

export default App;
