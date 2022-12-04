import { Link } from "react-router-dom";
import { FormRegister } from "../../components/formRegister";
import { StyledFonts } from "../../components/styles/StyledFonts";
import { StyledRegister } from "./styledRegister";

export function Register(){

    return(
        <StyledRegister>
            
            <div className="headerRegister">
                <StyledFonts tag="h1" textStyle="Logo" color="--Color-primary" className={"logo1"} >Kenzie Hub</StyledFonts>
               <Link to={"/"} className="buttonSecondary">Voltar</Link> 
            </div>
            <FormRegister/>

        </StyledRegister>
    )

}