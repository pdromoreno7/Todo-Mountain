import styled from "styled-components";

const FooterStyles = styled.footer`
  display: flex;
  justify-content: center;
  align-self: flex-end;

  p {
    color: var(--font-color-1);
  }
`;

export function Footer() {
  return (
    <FooterStyles>
      <p class="footer__copy">&#169; 2021 Pedro Moreno. All rights reserved</p>
    </FooterStyles>
  );
}
