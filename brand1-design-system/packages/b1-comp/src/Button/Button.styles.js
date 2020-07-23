import styled from "styled-components";
import Button from "@nxt-test/core/lib/Button";

const StyledButton = styled(Button)`
  background-color: ${(props) =>
    props.primary
      ? props.theme.palette.primary.main
      : props.secondary
      ? props.theme.palette.secondary.main
      : "#bdbdbd"};
`;
export default StyledButton;
