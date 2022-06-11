import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  left: 15%;
  width: 85%;
  margin-top: 70px;
  padding: 1rem 3rem;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.text.secondary};

  @media (max-width: 768px) {
    margin-top: 0px;
    position: static;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
  }
`;
