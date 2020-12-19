import styled from "styled-components";

export const FormWrapper = styled.div`
  max-height: 40px;
  min-height: 20px;
  text-align: left;
  background-color: ${props => props.theme.headerBg};
  display: flex;
  justify-content: center;
  /* align-content: center; */
  flex-direction: column;
  color: white;
  padding: 50px 12px;
  margin: 0px;
  margin-right: 850px;
  /* Should always be on top7 */
  z-index: 3;
  position: relative;
  box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.12);
  @media screen and (min-width: 1024px) {
  }
`;
