import React from "react";
import styled from "styled-components";
// import { TodoSearch } from "./TodoSearch";
import "./Header.css";
// import HeaderImg from "../assets/image/michael-olsen-aHCZXg0DodM-unsplash (1).jpg";

const HeaderStyles = styled.header`
  .header__box {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    color: white;
  }
  .header__title {
    letter-spacing: 8px;
    margin-bottom: 20px;
    font-weight: var (--normal-font);
  }
  .header__search {
    margin-bottom: 30px;
  }
`;

export function Header({ children, loading }) {
  return (
    <HeaderStyles>
      <div className="header__container">
        <div className="header__box mobile-container">
          <h1 className="header__title">TODO</h1>
          <div className="header__search">
            {/* {React.Children.toArray(children).map((child) =>
              React.cloneElement(child, { loading })
            )} */}
            {children}
          </div>
        </div>
      </div>
    </HeaderStyles>
  );
}
