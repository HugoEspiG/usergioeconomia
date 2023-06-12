import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Input from '../../../atoms/input';
import Button from '../../../atoms/button';
import PItem from '../../../atoms/PItem';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigateFn = useNavigate();

    const customSubmit = (data) => {
        if (data.password == data.password2) {
            // async function datos() {
            //     try {
            //         const resp = await envioDatos.Register(data)
            //         const parseJson = await resp.json();
            //         console.log(parseJson);
            //         if (resp.ok) {
            //             alert("Registrado con exito")
            //             navigateFn('/')
            //         } else {
            //             alert("Fallo en el registro")
            //         }
            //     } catch (error) {
            //         console.log(error)
            //     }
            // }
            // datos();
            alert("Registrado")
        } else {
            alert("El email no coinciden con la confirmacion")
        }

        console.log(data);
    }

    return (
        <div className="card mb-3 text-center mt-5 mx-auto shadow-lg" style={{ width: "35%" }}>
            <div className="card-body">
                <PItem variant={"fs-3"} color={"dark"} className={"my-2 card-title"}>Sign up</PItem>
                <div className="col">
                    <form onSubmit={handleSubmit(customSubmit)} className='row g-2 mt-5 mx-auto' id='form-reg'>
                        <Input
                            placeholder={"Nombre"}
                            type={'text'}
                            classNameDiv={"form-floating my-3 mx-auto col-10"}
                            classNameInput={""}
                            {...register('nombre', { required: true })}
                            autoComplete="on"
                            label={"nombre"}
                        >
                            {errors.nombre && <small className="text-danger fw-bold">El campo no puede estar vacio</small>}
                        </Input>
                        <Input
                            placeholder={"email"}
                            type={'email'}
                            classNameDiv={"form-floating my-3 mx-auto col-10"}
                            classNameInput={""}
                            {...register('email', { required: true })}
                            autoComplete="on"
                            label={"email"}
                        >
                            {errors.email && <small className="text-danger fw-bold">El campo no puede estar vacio</small>}
                        </Input>
                        <Input
                            placeholder={"Contraseña"}
                            type={'password'}
                            classNameDiv={"form-floating my-3 mx-auto col-10"}
                            classNameInput={""}
                            {...register('password', { required: true })}
                            autoComplete="on"
                            label={"Contraseña"}
                        >
                            {errors.password && <small className="text-danger fw-bold">El campo no puede estar vacio</small>}
                        </Input>
                        <Input
                            placeholder={"Confirmar contraseña"}
                            type={'password'}
                            classNameDiv={"form-floating my-3 mx-auto col-10"}
                            classNameInput={""}
                            {...register('password2', { required: true })}
                            autoComplete="off"
                            label={"Confirmación contraseña"}
                        >
                            {errors.password2 && <small className="text-danger fw-bold">El campo no puede estar vacio</small>}
                        </Input>
                    </form>
                    <Button variant={"primary"} size={"lg"} className={"my-4"} type="submit" form="form-reg">Registrarse</Button>
                </div>
            </div>
        </div>
    );
};

export default Register;