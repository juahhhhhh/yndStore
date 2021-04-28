import styled, {css} from "styled-components";


const Title = styled.h2`
  color: #000;
  //display: flex;
  //align-items: center;
  //justify-content: center;
  text-align:center;
  box-sizing: border-box;
  font-size: 30px;
  font-weight: 300;
  //flex-direction: column;
  /* 다음 코드는 align 값이 true 일 때 특정 스타일을 부여해줍니다. */
  ${props =>
    props.type &&
    css`
      //align-items: left;
      //justify-content: left;
      text-align:left;
      //&:hover {
      //  text-decoration:underline;
      //}
    `};
  //& + button {
  //  margin-left: 1rem;
  //}
`;


export default Title