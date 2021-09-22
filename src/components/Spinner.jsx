import { ImSpinner2 } from "react-icons/im";
import styled from "styled-components";

const SpinnerStyles = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .spinning {
    animation: spinner 1s linear infinite;
    color: var(--secun-color);
  }

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
`;
export function Spinner() {
  return (
    <SpinnerStyles>
      <ImSpinner2 size={60} className="spinning" />
    </SpinnerStyles>
  );
}
