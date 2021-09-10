import styled from "styled-components";
import { TodoSearch } from "./TodoSearch";
import "./Header.css";
// import HeaderImg from "../assets/image/michael-olsen-aHCZXg0DodM-unsplash (1).jpg";

const HeaderStyles = styled.header`
  .header__title {
    letter-spacing: 8px;
    margin-bottom: 20px;
  }
  .header__search {
    margin-bottom: 30px;
  }
`;

export function Header() {
  return (
    <HeaderStyles>
      <div className="bd-container header__container">
        <h1 className="header__title">TODO</h1>
        <div className="header__search">
          <TodoSearch />
        </div>
      </div>
    </HeaderStyles>
  );
}
