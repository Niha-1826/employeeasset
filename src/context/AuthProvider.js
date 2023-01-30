import { createContext, useState } from "react";

const Context = createContext({});

export const AuthProvide = ({children}) => {
    const [employeeId,setEmployeeId] = useState({});
    const [itemNumber,setItemNumber] =useState({});

    return (
    
    <Context.Provider value = {{employeeId,setEmployeeId,itemNumber,setItemNumber}}>
    {children}
    </Context.Provider>
    )
}
export default Context;