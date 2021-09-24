import { useEffect } from "react";
import { useHistory } from "react-router";

export const useProtectedPage = () => {

    const history = useHistory()
    
    useEffect(() => {
        const token = localStorage.getItem("token");
        
        if(token === null) {
            alert("Área restrita! Por favor, efetue o login.")
            history.push("/login")
        }
    }, [history]);

}