import React, { createContext, useContext, useEffect, useRef } from 'react';
import io from 'socket.io-client';

const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
    const socketRef = useRef();

    useEffect(() => {
        const socketUrl = import.meta.env.VITE_API_URL; // Ensure you use the correct variable
        
        // Initialize the socket connection
        socketRef.current = io(socketUrl);

        // Optional: Log the connection
        socketRef.current.on('connect', () => {
            console.log('Socket connected:', socketRef.current.id);
        });

        return () => {
            socketRef.current.disconnect();
        };
    }, []);

    return (
        <SocketContext.Provider value={socketRef.current}>
            {children}
        </SocketContext.Provider>
    );
};

export const useSocket = () => {
    return useContext(SocketContext);
};
