import { serverUrl } from "../utility/config";
const getProductsUrl = "/products";

// export const getProducts = () =>{
//     return (
//         fetch(`${serverUrl}${getProductsUrl}`)
//         .then((res) => {
//             return res.json()
//         })
//     );
// }

export const getProducts = async () => {
    const res = await fetch(`${serverUrl}${getProductsUrl}`);
    return await res.json();
};
