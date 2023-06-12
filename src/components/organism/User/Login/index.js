import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { useContext } from "react";
import { UserContext } from "../../../../context/UserContext.js";
import React from "react";
import Input from "../../../atoms/input";
import Button from "../../../atoms/button";
import PItem from "../../../atoms/PItem";
import { UserApi } from "../../../../api/UserApi.js";

export default function Login() {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigateFn = useNavigate();
    const { addUser } = useContext(UserContext)

    const customSubmit = (data) => {
        async function verify() {
            try {
                const resp = await UserApi.Login(data)
                if (resp) {
                    addUser(resp)
                    navigateFn(`/user/${resp.id}`)
                }
                else {
                    alert("Usuario o email incorrectos")
                }
            } catch (error) {
                console.log(error);
            }
        }
        verify();
    }

    return (
        <div className="card mb-3 text-center mt-5 mx-auto shadow-lg" style={{ width: "35%" }}>
            <div className="card-body">
                <PItem variant={"fs-3"} color={"dark"} className={"my-2 card-title"}>Log in</PItem>
                <div className="col">
                    <form onSubmit={handleSubmit(customSubmit)} id="form-log" className="mt-5 col mx-4">
                        <Input
                            placeholder={"Usuario"}
                            type={'email'}
                            classNameDiv={"form-floating mt-3 col-10 mx-auto"}
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
                            classNameDiv={"form-floating mt-3 col-10 mx-auto"}
                            classNameInput={""}
                            {...register('password', { required: true })}
                            autoComplete="off"
                            label={"Contraseña"}
                        >
                            {errors.password && <small className="text-danger fw-bold">El campo no puede estar vacio</small>}
                        </Input>
                    </form>
                    <Button variant={"primary"} size={"lg"} className={"mt-3 mw-25"} type="submit" form="form-log">Empezar</Button>
                    <PItem variant={"fs-5"} color={"dark"} className={"my-2"}>
                        ¿Aún no estás registrado?  <NavLink to='/register'>Registrate</NavLink>
                    </PItem>
                    <div className="divider"> OR</div>
                    <Button variant={"outline-primary"} size={"lg"} className={"bi bi-google mt-3 mw-25"} type="submit" form="form-log"> Log in con Google</Button>
                </div>
            </div>
        </div>
    )
}