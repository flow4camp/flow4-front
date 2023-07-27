import React, { createContext, useContext, useState } from 'react';
import { Socket } from 'socket.io-client';


const initialSocketState: Socket|null = null;

const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(initialSocketState);

  return (
    <SocketContext.Provider value={{ socket, setSocket }}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocketContext = () => {
  return useContext(SocketContext);
};

