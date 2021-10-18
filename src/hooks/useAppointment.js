import { useEffect, useState } from 'react';

const useAppointment = () => {
    const [appointment, setAppointment] = useState([]);
    /* useEffect(() => {

        if (services.length) {
            const storedCart = [];
            for (const key in storedCart) {
                const addedProduct = services.find(product => product.id === id);
                if (addedProduct) {
                    // set quantity
                    const quantity = storedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            setAppointment(storedCart);
        }

    }, [services]);
 */
    return [appointment, setAppointment];
};

export default useAppointment;