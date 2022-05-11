import styled from "styled-components";


export const Conts = styled.div`
  display: grid;
  position: relative;
  margin-top: 5em;
  flex-wrap: wrap; 

  @media screen and (max-width: 768px) {
    //grid-template-columns:repeat(1, minmax(150px, 1fr));
    //grid-auto-rows: repeat(auto-fit, minmax(100px, 1fr)); 
    //grid-auto-rows: repeat(auto-fit, 150px);
    gap: 1.5em;
    //max-width: 100%;
    //margin-right: 5rem;
    margin-top: -1rem; 

  }
  @media screen and (min-width: 769px) {
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    //grid-template-columns: repeat(auto-fit ,minmax(auto, 1fr));
    
    grid-auto-rows: minmax(350px, 1fr);
    //grid-auto-rows: auto;
  }

  @media screen and (min-width: 1400px) {
    //width: 70%;
    grid-template-columns: repeat(5, minmax(auto, 1fr));
    grid-auto-rows: auto;
    
  }
`;

