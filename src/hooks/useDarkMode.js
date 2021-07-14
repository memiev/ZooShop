import { useState, useEffect } from "react";

export const useDarkMode = (initialState = false) => {

    const [enabled, setEnabled] = useState(initialState);

    useEffect(() => {
            const clasName = 'dark-mode';
            const element = window.document.body

            if(enabled) {
                element.classList.add(clasName);
            }else{
                element.classList.remove(clasName);
            }
        } , [enabled]);
   

    return [enabled, setEnabled]
}