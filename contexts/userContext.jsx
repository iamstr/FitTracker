import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext({
  user: {},
  saveUser: (user) => {},
});
export default function UserContextProvider({ children }) {
  const [user, setUser] = useState({
    fullname: '',
    email: '',
    weight: '',
    heigth: '',
    activity: '',
    gender: '',
    age: '',
    goal: '',
  });
  useEffect(() => {
    const getData = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        if (storedUser !== null) {
          // value previously stored
          setUser(JSON.parse(storedUser));
        }
      } catch (e) {
        // error reading value
      }
    };
    getData();
  }, []);

  const saveUser = (_user) => setUser(_user);

  return <UserContext.Provider value={{ user, saveUser }}>{children}</UserContext.Provider>;
}
