import React, { createContext, useContext, useState } from 'react';

interface User {
    id: number;
    username: string;
    email: string;
    power: number;
    win: number;
    lose: number;
    type: string;
}

const initialUserState: User = {
    id: -1,
    username: '지하 test',
    email: 'zihatest@gmail.com',
    power: 30,
    win: 1,
    lose: 1,
    type: 'user',
};

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialUserState);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
