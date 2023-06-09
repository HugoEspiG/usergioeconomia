import React from 'react';
import Input from '../../atoms/input';
import Button from '../../atoms/button';
import { useForm } from "react-hook-form"


const BusquedaHome = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const customSubmit = (data) => {
        console.log(data);
    }
    return (
        <form onSubmit={handleSubmit(customSubmit)} id="form-search" className="row g-2">
                <div className="d-flex position-relative justify-content-center">
                    <Input
                        placeholder={"Selecciona un grafo por nombre o identificador"}
                        type={"text"}
                        classNameDiv={"form-floating my-4 col-md-6"}
                        classNameInput={"rounded-start-pill border border-end-0"}
                        {...register("busqueda", { required: true })}
                        autoComplete="on"
                        label={"Selecciona un grafo por nombre o identificador"}
                    >
                        {errors.busqueda && (
                            <small className="text-danger fw-bold">
                                El campo no puede estar vacío
                            </small>
                        )}
                    </Input>
                    <Button
                        variant={"primary"}
                        size={"lg"}
                        className={"rounded-end-pill my-4 border border-start-0"}
                        type="submit"
                        form="form-search"
                    >
                        Empezar
                    </Button>
                </div>
        </form>
    );
};

export default BusquedaHome;