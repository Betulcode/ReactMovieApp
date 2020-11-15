import React from 'react'
import { StyledWrapper,StyledMovieImage,StyledText} from "./Card.style"


export const Card = (props) => {
   
    return (
        <StyledWrapper>
           <StyledText> {props.title}</StyledText>
          <StyledMovieImage src={props.imgSrc}/>
        
        </StyledWrapper>
      
    )
}
