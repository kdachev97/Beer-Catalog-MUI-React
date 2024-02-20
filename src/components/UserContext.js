import React,
{
  useEffect,
  useState,
  createContext
} from 'react';
import axios from 'axios';

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const [error, setError] = useState(false);

  const fetchUser = async () => {
    try {
      const res = await axios.get('https://randomuser.me/api/')
      setUser(res.data.results[0])
    } catch (error) {
      console.log(error)
      setError(true)
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchUser()
  }, []);

  return (
    <UserContext.Provider value={{ user, loading }}>
      {children}
    </UserContext.Provider>
  )
};

export default UserContextProvider;