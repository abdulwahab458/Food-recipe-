import { createContext, useState } from "react";

export const GlobalContext = createContext(null);
export default function GlobalState({ children }) {
    const [searchprm, setsearchprm] = useState('')
    const [recipes, setrecipes] = useState([])
    const [recipedetails, setrecipedetails] = useState(null)
    const [favlist, setfavlist] = useState([])
    async function handlesubmit(event) {
        event.preventDefault();
        const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchprm}`)
        const d = await res.json();
        console.log(d);
        if (d?.data?.recipes) {
            setrecipes(d?.data?.recipes)
            setsearchprm('')

        }
    }
    function handleaddfav(currentitem) {
        console.log(currentitem);
        const cpyfav = [...favlist]
        const index = cpyfav.findIndex(item=>item.id===currentitem.id);
        if(index ==-1){
            cpyfav.push(currentitem)
        }else{
            cpyfav.splice(index)
        }
        setfavlist(cpyfav)
    }
    console.log(recipes);
    console.log(favlist);
    

    return <GlobalContext.Provider value={{favlist,handleaddfav, recipedetails, setrecipedetails, searchprm, setsearchprm, handlesubmit, recipes }}>{children}</GlobalContext.Provider>
}