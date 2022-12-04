

import { css } from 'styled-components'
import styled from 'styled-components'
import { BaseText } from './BaseText'

export const StyledFonts = styled(BaseText)`
color:${({color}) => color? `var(${color})`: "black"};

${({textStyle}) =>{

    if(textStyle === "Logo"){

    return css`
        font-size:1.5625rem;
        font-weight: 700; 
        line-height: 1.75rem;
        font-family: 'Inter', sans-serif;
    `
    }else if(textStyle === "Title1"){

        return css`
            font-size:1.125rem;
            font-weight: 700; 
            line-height: 1.75rem;
            font-family: 'Inter', sans-serif;
        `

    }else if(textStyle === "Title2"){
        return css`
            font-size: 1rem;
            font-weight: 600;
            line-height: 1.625rem;
            font-family: 'Inter', sans-serif;
        `

    }else if(textStyle === "Title3"){
        return css`
            font-size: 0.75rem; 
            font-weight: 400;
            line-height: 1.375rem;
            font-family: 'Inter', sans-serif;
        `

    }else if(textStyle === "Headline"){
        return css`
            font-size: 0.75rem; 
            font-weight: 400;
            line-height: 1.375rem;
            font-family: 'Inter', sans-serif;
        `

    }else if(textStyle === "HeadlineBold"){
        return css`
            font-size: 0.75rem; 
            font-weight: 600;
            line-height: 1.125rem;
            font-family: 'Inter', sans-serif;
        `

    }else  if(textStyle === "HeadlineItalic"){
        return css`
            font-size: 0.75rem; 
            font-weight: 400;
            font-style: italic;
            line-height: 1.125rem;
            font-family: 'Inter', sans-serif;
        `

    }



}}
` 