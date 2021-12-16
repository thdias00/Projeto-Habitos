import styled from "styled-components";

export const StyledContainer = styled.section`
  max-width: 100%;
  display: flex;
  justify-content: center;
  p {
    width: 90%;
    overflow: hidden,
    textOverflow: ellipsis,
     display: -webkit-box,
    whiteSpace: "nowrap",
    display: "block",
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: 0.00938em;
    color: rgba(0, 0, 0, 0.6);
  }
  div {
    width: 100%;
  }
`;
