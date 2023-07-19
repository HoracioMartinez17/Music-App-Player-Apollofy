import styled from 'styled-components';

export const MainContainerStyles = styled.div`

background-color: rgba(50, 50, 50, 0.6);
border: 1px solid rgba(66, 66, 66, 0.4);
border-radius: 0.25rem;
overflow-y: auto;

background-color: rgba(50, 50, 50, 0.6);



@media only screen and (min-width : 320px) and (max-width : 480px) {
  grid-area: 1 / 1 / 6 / 7;
  
  
}

@media only screen and (min-width: 480px) and (max-width: 768px) {
  grid-area: 1 / 1 / 6 / 7;
  
  
}

@media only screen and (min-width : 768px) and (max-width : 1024px) {
  grid-area: 1 / 2 / 6 / 7;
  
  width: 100%;
  height: 100%;
}

@media only screen and (min-width : 1024px) {
  grid-area: 1 / 2 / 6 / 7;
  display: grid;

  
  width: 100%;
  height: 100%;
}`

;
