import React, { useState } from "react";

export const UserContext = React.createContext([]);

export default function UserCustomContext({ children }) {
    const [data, setData] = useState({});

    const addUser = (info) => {
        setData(info)
    }

    return (
        <UserContext.Provider value={{ userData: data, addUser  }}>
            {children}
        </UserContext.Provider>
    )
}