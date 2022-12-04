import { useForm } from "react-hook-form";
import { StyledFonts } from "../styles/StyledFonts";
import { StyledFormRegister } from "./styledFormRegister";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Api } from "../Api/Request";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


export function FormRegister() {

    const navigate = useNavigate()
  const formShema = yup.object().shape({
    name: yup.string().required("Este campo e obrigatorio"),
    email: yup
      .string()
      .required("Este campo e obrigatorio")
      .email("Digite um email valido"),
    password: yup
      .string()
      .required("Este campo e obrigatorio")
      .min(8, "Digite uma senha com no minimo 8 digito")
      .matches(/(?=.*[A-Za-z])/,"A senha deve conter ao menos uma letra")
      .matches(/(?=.*[0-9])/, "A senha deve conter ao menos um numero")
      .matches(/(?=.*[$*&@#])/,"A senha  deve conter ao menos um caractere especial")
      ,
      
    passwordConfirm: yup
      .string()
      .required("Este campo e obrigatorio")
      .oneOf([yup.ref("password")], "As senhas não conferem")
      ,
    bio: yup.string().required("Este campo e obrigatorio"),
    contact: yup.string().required("Este campo e obrigatorio"),
    course_module: yup.string().required("Este campo e obrigatorio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors }, reset
  } = useForm({
    resolver: yupResolver(formShema),
  });

  async function resForm(data) {
   delete data.passwordConfirm


   try {

      await Api.post("users",data)
      toast.success("Conta criada com sucesso!",{
        autoClose:2000
      })

      navigate("/")

   } catch (er) {
    console.log(er)
    toast.error("Ops! Algo deu errado",{
      autoClose:2000
    })

   }
   
    reset()
    
  }
  

  return (
    <StyledFormRegister noValidate onSubmit={handleSubmit(resForm)}>
      <StyledFonts tag="h2" textStyle="Title1" color="--Grey-0">
        Crie sua conta
      </StyledFonts>
      <StyledFonts tag="span" textStyle="Headline" color="--Grey-1">
        Rapido e grátis, vamos nessa
      </StyledFonts>

      <div className="divOfInput">
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          className="inputForm"
          {...register("name")}
          placeholder="Digite aqui seu nome"
        />
        {errors.name && (
          <StyledFonts tag="span" textStyle="Headline" color="--Negative">
            {errors.name.message}
          </StyledFonts>
        )}
      </div>
      <div className="divOfInput">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="inputForm"
          {...register("email")}
          placeholder="Digite aqui seu email"
        />
        {errors.email && (
          <StyledFonts tag="span" textStyle="Headline" color="--Negative">
            {errors.email.message}
          </StyledFonts>
        )}
      </div>
      <div className="divOfInput">
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          className="inputForm"
          {...register("password")}
          placeholder="Digite aqui sua senha"
        />
        {errors.password && (
          <StyledFonts tag="span" textStyle="Headline" color="--Negative">
            {errors.password.message}
          </StyledFonts>
        )}
      </div>
      <div className="divOfInput">
        <label htmlFor="passwordConfirm">Confirmar Senha</label>
        <input
          type="password"
          id="passwordConfirm"
          className="inputForm"
          {...register("passwordConfirm")}
          placeholder="Digite novamente sua senha"
        />
        {errors.passwordConfirm && (
          <StyledFonts tag="span" textStyle="Headline" color="--Negative">
            {errors.passwordConfirm.message}
          </StyledFonts>
        )}
      </div>
      <div className="divOfInput">
        <label htmlFor="bio">Bio</label>
        <input
          type="text"
          id="bio"
          className="inputForm"
          {...register("bio")}
          placeholder="Fale sobre você"
        />
        {errors.bio && (
          <StyledFonts tag="span" textStyle="Headline" color="--Negative">
            {errors.bio.message}
          </StyledFonts>
        )}
      </div>
      <div className="divOfInput">
        <label htmlFor="contact">Contato</label>
        <input
          type="text"
          id="contact"
          className="inputForm"
          {...register("contact")}
          placeholder="Opção de contato"
        />
        {errors.contact && (
          <StyledFonts tag="span" textStyle="Headline" color="--Negative">
            {errors.contact.message}
          </StyledFonts>
        )}
      </div>

      <div className="divOfInput">
        <label htmlFor="course_module">Selecione Módulo</label>
        <select
          className="inputForm"
          id="course_module"
          {...register("course_module")}
        >
          <option name="" id=""></option>
          <option name="" id="">
            Primeiro Modulo
          </option>
          <option name="" id="">
            Segundo Modulo
          </option>
          <option name="" id="">
            Terceiro Modulo
          </option>
          <option name="" id="">
            Quarto Modulo
          </option>
          <option name="" id="">
            Quinto Modulo
          </option>
          <option name="" id="">
            Sexto Modulo
          </option>
        </select>
        {errors.course_module && (
          <StyledFonts tag="span" textStyle="Headline" color="--Negative">
            {errors.course_module.message}
          </StyledFonts>
        )}
      </div>

      <button type="submit" className="buttonPrimary">
        Entrar
      </button>


    </StyledFormRegister>
  );
}
