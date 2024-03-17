"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";
import { io } from "socket.io-client";

type SocketContextType = {
  socket: any | null;
};

const SocketContext = createContext<SocketContextType>({
  socket: null,
});

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const [socket, setSocket] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const socket = new (io as any)(process.env.NEXT_PUBLIC_SITE_URL!, {
      query: {
        userId: authUser._id,
      },
    });

    setSocket(socket);

    return () => socket.close();
  }, []);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  )
}