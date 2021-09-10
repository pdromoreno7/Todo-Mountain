import { FaSearch } from "react-icons/fa";
import styled from "styled-components";
const Searchstyles = styled.div`
  .search__container {
    display: flex;
    justify-content: center;
  }
  .search__box {
    position: relative;
    width: 100%;
  }
  .search__box-button {
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
    border: none;
    background: none;
    margin-right: 20px;
    color: #7a7a7a;
  }

  .search__box-input {
    border: none;
    font-size: 1rem;
    height: 50px;
    border-radius: 5px;
    padding: 5px 40px 5px 20px;
    transition: 1s;
    width: 100%;
  }
  /* .search__box-input:hover {
    box-shadow: 0 0 5pt 0.5pt #7a7a7a;
  } */
  .search__box-input:focus {
    outline: none;
    box-shadow: 0 0 5pt 2pt #4b4b4b;
  }
`;

export function TodoSearch() {
  return (
    <Searchstyles>
      <form className="search__container">
        <div className="search__box">
          <input
            type="text"
            placeholder="Busca una tarea"
            className="search__box-input"
          />
          <button className="search__box-button" type="submit">
            <FaSearch size={15} />
          </button>
        </div>
      </form>
    </Searchstyles>
  );
}
