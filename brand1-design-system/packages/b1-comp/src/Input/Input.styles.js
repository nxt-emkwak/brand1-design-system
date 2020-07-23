import styled from "styled-components";
import Input from "@nxt-test/core/lib/Input";

const StyledInput = styled(Input)`
  border: 1px solid
    ${(props) =>
      props.primary
        ? props.theme.palette.primary.main
        : props.secondary
        ? props.theme.palette.secondary.main
        : "#bdbdbd"};
`;

export default StyledInput;
