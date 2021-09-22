import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const ModalStyles = styled.div`
  background: rgba(32, 35, 41, 0.3);
  position: fixed;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  transition: 1s;
`;

export function Modal({ children }) {
  return ReactDOM.createPortal(
    <ModalStyles>{children}</ModalStyles>,
    document.getElementById("modal")
  );
}
