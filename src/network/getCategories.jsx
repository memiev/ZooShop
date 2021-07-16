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

export const getCategories = async (params="") => { //props.match.params
    const {category, id} = params
    
    const categoryParam = category ? `/${category}` : '';
    const idParam = id ? `/${id}` : '';

    const res = await fetch(`${serverUrl}${getProductsUrl}${categoryParam}${idParam}`);
    
    return await res.json();
};
