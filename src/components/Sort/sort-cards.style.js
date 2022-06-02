import styled from 'styled-components';
import { colors } from 'styles/colors';
import breakpoint from 'styles/breakpoints';

export const SortCard = styled.div`
  border-radius: 0.5rem;
  border: solid 0.1rem ${colors.lightGrey};
  box-shadow: 0.2rem 0.2rem 0.2rem ${colors.lightGrey};
  height: 3rem;
  margin-top: 0.75rem;
  width: 100%;
  z-index: 132;

  &:hover {
    cursor: pointer;
  }

  @media screen and (min-width: ${breakpoint.tablet}) {
    width: 18rem;
  }
`;

export const SortText = styled.p`
  color: black;
  font-weight: bold;
  margin-left: 1rem;
`;

export const SortContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 3rem;
  margin-right: 2rem;
  z-index: 133;

  @media screen and (min-width: ${breakpoint.tablet}) {
    flex-basis: 25%;
   // margin-right: 0;
    }
`;

export const ShowedDetails = styled.div`
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  border: solid 0.1rem ${colors.lightGrey};
  box-shadow: 0.2rem 0.2rem 0.2rem ${colors.lightGrey};
  border-top: none;
  display: ${({ displayDetails }) => (displayDetails === true ? 'block' : 'none')};
  height: 7rem;
  margin-top: -1.2rem;
  width: 100%;

  @media screen and (min-width: ${breakpoint.tablet}) {
    width: 18rem;
  }
`;

export const ShowedText = styled.p`
  color: grey;
  margin-left: 1rem;
  padding-top: 1rem;
`;

export const DropMenu = styled.select`
   height: 2.7rem;
  background-color: ${colors.lightGrey};
  border-radius: 0.3rem;
  border: none;
  margin-left: 1rem;
  width: calc(100% - 2rem);
 
  &:hover {
    background-color: ${colors.veryLightGrey};
  }
`;

export const DropOption = styled.option`
  background-color: white;
  color: black;
`;

export const SortForm = styled.form`
  border: none;
`;

export const SortBtn = styled.button`
  border-radius: 2rem;
  border: none;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  height: 3rem;
  margin-top: 2rem;
  width: 100%;
  z-index: 134;

  ${({ disable }) => (disable === 'false'
    && `
          background-color: ${colors.midBlue};
          &:hover {
            background-color: ${colors.darkBlue};
          }
        `)
    || (`
          disabled: disabled;
          color: grey;
        `)}

  @media screen and (min-width: ${breakpoint.tablet}) {
    width: 18rem;
  }
`;

export const PopularTitle = styled.p`
  font-size: 2rem;
  margin-top: 2rem;
`;
