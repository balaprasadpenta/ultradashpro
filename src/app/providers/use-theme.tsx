import { useContext } from "react";

import { ThemeContext } from "./theme-context";


export function useTheme() {
    const context = useContext(ThemeContext)

    if(!context){
        throw new Error("use Theme must be used inside Themeprovider")
    }
    return context;
}



