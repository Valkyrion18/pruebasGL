import { types } from "../types/types";
import { db } from "../firebase/firebaseConfig";
import { addDoc, collection, getDocs } from "@firebase/firestore";
// import { addDoc, collection, getDocs, query, where, doc, deleteDoc } from "@firebase/firestore";

// REGISTRAR NUEVA COORDENADA

export const registrarDatosAsincrono = (newElement) => {

    return (dispatch) => {
        addDoc(collection(db, "bdCoordenadas2"), newElement)
            .then(resp => {
                dispatch(registrarDatos(newElement))
                dispatch(mostrarProductosAsincrono())
            })
            .catch(error => {
                console.log(error);
            })
    }
}

export const registrarDatos = (product) => {
    return {
        type: types.register,
        payload: product
    }
}

// LISTAR COORDENADAS

export const mostrarProductosAsincrono = () => {
    return async (dispatch) => {

        const querySnapshot = await getDocs(collection(db, "bdCoordenadas2")); 
        const datos = []; 
        querySnapshot.forEach((doc) => {
            datos.push({
                ...doc.data() 
            })
        });
        dispatch(mostrarProductosSincrono(datos)); 
    }
}

export const mostrarProductosSincrono = (data) => {
    return {
        type: types.list,
        payload: data
    }
}

// ELIMINAR PRODUCTOS

// export const borrarProductoAsincrono = (producto) => {
//     return async (dispatch) => {

//         const moviesCollection = collection(db, "bdProductos");
//         const q = query(moviesCollection, where("product", "==", producto))
//         const datos = await getDocs(q);

//         datos.forEach((docu) => {
//             deleteDoc(doc(db, "bdProductos", docu.id));
//         })
//         dispatch(borrarProductoSincrono(producto));
//     }
// }

// export const borrarProductoSincrono = (prod) => {
//     return {
//         type: types.delete,
//         payload: prod
//     }
// }

