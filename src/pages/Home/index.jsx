import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Api } from "../../components/Api/Request";
import { StyledFonts } from "../../components/styles/StyledFonts";
import { StyledHome } from "./StyledHome";

export function Home({ user, setUser }) {
  const idUser = localStorage.getItem("USER_ID");
  const navigate = useNavigate()

  useEffect(() => {
    async function ApiRes(idUser) {
      try {
        const resp = await Api.get(`/users/${idUser}`);
        setUser(resp.data);
      } catch (err) {
        console.log(err);
      }
    }

    ApiRes(idUser);
  }, []);

  function logout(){
    localStorage.clear()

    navigate("/")

  }

  return (
    <StyledHome>
      <header className="contentHome">
        <StyledFonts
          tag="h1"
          textStyle="Logo"
          color="--Color-primary"
          className={"logo1"}
        >
          Kenzie Hub
        </StyledFonts>
        <button onClick={()=>{logout()}} className="buttonSecondary">Sair</button>
      </header>
      <div className="contentHome UserInfo">
        <StyledFonts tag="p" textStyle="Title1" color="--Grey-0">
          {user.name}
        </StyledFonts>

        <StyledFonts tag="span" textStyle="Headline" color="--Grey-1">
          {user.course_module}
        </StyledFonts>
      </div>

      <section className="contentHome ">

        <StyledFonts tag="span" textStyle="Title1" color="--Grey-1">
            Que pena! Estamos em desenvolvimento :(
        </StyledFonts>

        <StyledFonts tag="span" textStyle="Headline" color="--Grey-1">
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </StyledFonts>

      </section>


    </StyledHome>
  );
}
