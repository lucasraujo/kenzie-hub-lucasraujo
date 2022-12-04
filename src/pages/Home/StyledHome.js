import styled from "styled-components";

export const   StyledHome = styled.div`


background-color: var(--Grey-4);
width: 100%;
height: 100vh;

.contentHome{

    padding: 2rem 15%;
}


header{
    
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    border-bottom:2px solid var(--Grey-3);
}

.UserInfo{
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    border-bottom:2px solid var(--Grey-3);

    @media (max-width:500px) {
        flex-direction: column;
        align-items: flex-start;
        
    }

}

section{
    display: flex;
    flex-direction: column;
}
`