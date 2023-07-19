import styled from "styled-components";

export const SidebarStyles = styled.div`
  background-color: rgb(0,0,0);
  border: 1px solid rgba(66, 66, 66, 0.4);
  border-radius: 0.25rem;
  grid-area: 6 / 1 / 7 / 7;
  display: flex;
  flex-direction: row;
  border: 1px solid rgba(66, 66, 66, 0.4);
  
  .sidebar__div {
    display: none;
    z-index: -1;
    height: 15vh;

    &-img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .sidebar__sections {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    a {
      width: 100%;
    }
  }

  @media only screen and (min-width: 480px) and (max-width: 768px) {
    display: grid;

    grid-area: 6 / 1 / 7 / 7;
    border: 1px solid rgba(66, 66, 66, 0.4);
    .sidebar__div {
      display: none;
      z-index: -1;
    }

    
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    //To determinate the Position in the parent grid
    grid-area: 1 / 1 / 5 / 2;
    //Own properties
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem;
    width: 100%;
    height: 100%;
    border: 1px solid rgba(66, 66, 66, 0.4);
    border-radius: 0.25rem;
    font-size: 2.5rem;
    .sidebar__div {
      display: block;
      z-index: 0;
    }

    & .sidebar__sections {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 100%;
    }
  }

  @media only screen and (min-width: 1024px) {
    //To determinate the Position in the parent grid
    grid-area: 1 / 1 / 5 / 2;
    //Own properties
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem;
    width: 100%;
    height: 100%;
    border: 1px solid rgba(66, 66, 66, 0.4);
    border-radius: 0.25rem;
    font-size: 2.5rem;
    .sidebar__div {
      display: block;
      z-index: 0;
    }

    .sidebar__sections {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 100%;
    }
  }
`;
