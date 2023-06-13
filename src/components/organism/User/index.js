import React, { useContext } from 'react';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from '../../../context/UserContext';
import PItem from '../../atoms/PItem';
import BusquedaHome from '../BusquedaHome';
import GraphCharger from '../GraphCharger';

const User = () => {
    const { user } = useParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)//poner en true cuando se conecte
    const { userData } = useContext(UserContext)

    useEffect(() => {
        setData(userData)
        setLoading(false)
    }, [user,userData])


    return (
        <>
            {
                !loading ?
                    <div className="d-flex justify-content-center position-relative">
                        <div className='mx-auto w-100'>
                            <PItem variant={"fs-1 fw-semibold"} color={"dark"} className={"mt-5 mb-4 p-2 text-center"}>{data.nombre}</PItem>
                            <BusquedaHome></BusquedaHome>
                            <PItem variant={"fs-3 fst-italic"} color={"dark"} className={"my-4 mx-5 p-4 text-center lh-lg"}>Tus grafos:</PItem>
                            <GraphCharger data={data}></GraphCharger>
                        </div>
                    </div>
                    :
                    <></>
            }
        </>
    );
};

export default User;