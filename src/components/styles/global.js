import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


   
 
    :root{

      --Color-primary: #FF577F;
      --Color-primary-Focus:#FF427F;
      --Color-primary-Negative:#59323F;

      --Grey-0:#F8F9FA;
      --Grey-1:#868E96;
      --Grey-2:#343B41;
      --Grey-3:#212529;
      --Grey-4:#121214;

      --Sucess:#3FE864;
      --Negative:#E83F5B;

}

.buttonPrimary{
   background-color: var(--Color-primary);
   padding:0.625rem 1.375rem;
   width: 100%;
   border-radius: 0.25rem;
   border: none;
   outline: none;

   font-size: 1rem;
   font-weight: 500;
   color: var(--Grey-0);
   line-height: 1.6494rem;


}

.buttonPrimary:hover{
   background-color: var(--Color-primary-Focus);

}

.buttonDisable{

   background-color: var(--Color-primary-Negative);
   padding:0.625rem 1.375rem;
   width: 100%;
   border-radius: 0.25rem;
   border: none;
   outline: none;
}


.buttonSecondary{
   background-color: var(--Grey-1);
   padding:0.625rem 1.375rem;
   border-radius: 0.25rem;
   border: none;
   outline: none;
   text-decoration: none;
   text-align: center;

   font-size: 1rem;
   font-weight: 500;
   color: var(--Grey-0);
   line-height: 1.6494rem;
   font-family: 'Inter', sans-serif;

}

.perCent{
   width: 100%;
}



.buttonSecondary:hover{
   background-color:var(--Grey-2);
}

.inputForm{
   background-color: var(--Grey-2);
   padding:0.625rem 1.375rem;
   
   border-radius: 0.25rem;
   border:none;
   outline: none;
   font-size: 1rem;
   font-family: 'Inter', sans-serif;
}

.inputForm:focus{
   outline: 1px solid var(--Grey-0);
}

.divOfInput{
   width: 100%;
}

label{
   
   font-size: 0.7614rem;
   font-weight:400;
   margin-bottom: 0.5rem;
   color: var(--Grey-1);
   font-family: 'Inter', sans-serif;
   
}




html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form,  legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

*{
   box-sizing:border-box;
   font-family: 'Inter', sans-serif;
}

button{
   cursor: pointer;

}
 
 `;
