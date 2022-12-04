import { StyledFonts } from "../styles/StyledFonts";
import {useForm} from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup"
import { StyledFormLogin } from "./StyledFormLogin";
import { Api } from "../Api/Request";
import { toast } from "react-toastify";
import { useState } from "react";

export function FormLogin ({user, setUser}){
    
    const [loading , setLoading] = useState(false)
    const navigate = useNavigate()

    const formSchema = yup.object().shape({
        email:yup.string().required("Este campo e obrigatorio"),
        password:yup.string().required("Este campo e obrigatorio")
    })
    
    const {register, handleSubmit, formState:{ errors }, reset  }=useForm({
        
        resolver: yupResolver(formSchema),
    })

    async function formRes(data){
        
        reset()

        try {

            setLoading(true)

           let resLogin = await Api.post("sessions",data)
            
            toast.success("Login aprovado ",{
                autoClose:2000
            })

            localStorage.setItem("TOKEN", resLogin.data.token)
            localStorage.setItem("USER_ID", resLogin.data.user.id)
           
           navigate("/Home")

            
            
        } catch (er) {

            console.log(er)
            toast.error("verifique login e senha e tente novamente",{
                autoClose:2000
            })

            
        }finally{
            setLoading(false)
        }


    }
    
    
    
    const hasErrors = Object.keys(errors).length !== 0


    return(

        <StyledFormLogin noValidate onSubmit={handleSubmit(formRes)}>

            <StyledFonts tag="h2" textStyle="Title1" color="--Grey-0">Login</StyledFonts>

            <div className="divOfInput">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" className="inputForm" {...register("email")} placeholder="Digite aqui seu email" />
                {errors.email && <StyledFonts tag="span" textStyle="Headline" color="--Negative"  >{errors.email.message}</StyledFonts>}
                
            </div>
            <div className="divOfInput">
                <label htmlFor="password">Senha</label>
                <input type="password" id="password" className="inputForm" {...register("password")} placeholder="Digite aqui sua senha"/>
                {errors.password && <StyledFonts tag="span" textStyle="Headline" color="--Negative">{errors.password.message}</StyledFonts>}
            </div>


            <button type="submit"  className={hasErrors  ? "buttonDisable":"buttonPrimary"} disabled={hasErrors}>{loading? <p>Carregando...</p>:<p>Entrar</p>}</button>

            <StyledFonts tag="p" textStyle="HeadlineBold" color="--Grey-1">Ainda não possui uma conta?</StyledFonts>

            <Link to={"/Register"} className="buttonSecondary perCent" >Cadastre-se</Link>




        </StyledFormLogin>
    )


}