import styled from 'styled-components';

const NoDroidsButton = styled.button`
  background-color: #542C85;
  border: 2px solid black;
  border-radius: 5px;
  color: #F8EFBA;
  cursor: pointer;
  font-size: 1.5rem;
  margin: 0 auto;
  padding: 0.2rem 0.3rem;
  text-align: center;
  transition: color 0.6s ease;

  &:focus {
    outline: transparent;
  }

  &:hover {
    color: #32ff7e;
  }
`;

export default NoDroidsButton;
