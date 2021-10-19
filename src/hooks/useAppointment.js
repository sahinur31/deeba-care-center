import { useState } from 'react';

const useAppointment = () => {
    const [appointment, setAppointment] = useState([]);
    /* const handleAppointment = (service) => {
        const newAppointment = [...appointment,service]
        setAppointment(newAppointment);
    } */
    return [appointment, setAppointment];
};

export default useAppointment;