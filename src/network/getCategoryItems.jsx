import { serverUrl } from "../utility/config";
const getProductsUrl = "/products/";

// export const getCategoryItems = (target) =>{
//     return (
//         fetch(`${serverUrl}${getProductsUrl}${target}`)
//         .then((res) => {
//             return res.json()
//         })
//     );
// }

export const getCategoryItems = async (target) => {   //ASYNC / AWAIT
    const res = await fetch(`${serverUrl}${getProductsUrl}${target}`); //different end point
    return await res.json();
};
