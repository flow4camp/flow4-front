import React, { createContext, useContext, useState } from 'react';

interface User {
    id: number;
    username: string;
    email: string;
    power: number;
    win: number;
    lose: number;
    type: string;
    createdAt: Date;
    hatVariants: number;
    accVariants: number;
    faceVariants: number;
    clothesVariants: number;
    shoesVariants: number;
}

const initialUserState: User = {
    id: -1,
    username: '지하 test',
    email: 'zihatest@gmail.com',
    power: 30,
    win: 1,
    lose: 1,
    type: 'user',
    createdAt: '2023-07-24 19:10:57',
    hatVariants: 0,
    accVariants: -1,
    faceVariants: -1,
    clothesVariants: 0,
    shoesVariants: -1,
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
