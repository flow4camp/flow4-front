import React, { createContext, useContext, useState } from "react";

export interface User {
  id: number;
  username: string;
  ghostname: String;
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
  subwayNum1: number;
  subwayNum2: Number;
  station1: String;
  station2: String;
  station3: String;
  firsttime: Date;
  thirdtime: Date;
}

const initialUserState: User = {
  id: 21,
  username: "유저",
  ghostname: "유령이름",
  email: "zihatest@gmail.com",
  power: 30,
  win: 1,
  lose: 1,
  type: "user",
  createdAt: "2023-07-24 19:10:57",
  hatVariants: 0,
  accVariants: -1,
  faceVariants: -1,
  clothesVariants: 0,
  shoesVariants: -1,
  subwayNum1: 1,
  subwayNum2: 2,
  station1: "서울역",
  station2: "노량진역",
  station3: "합정역",
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
