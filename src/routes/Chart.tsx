import styled from "styled-components";

export default function Chart() {
  const Box = styled.div`
    display: flex;
    width: 100px;
    height: 100px;
    justify-content: center;
    background-color: ${(props) => props.theme.accentColor};
    align-content: center;
  `;

  return <Box>Chart!</Box>;
}
