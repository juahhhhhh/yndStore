import styled, {css} from "styled-components";


const Title = styled.h2`
  margin:0 0 60px;
  color: #000;
  text-align:center;
  box-sizing: border-box;
  font-size: 30px;
  font-weight: 300;
  line-height: 1.5;
  /* 다음 코드는 align 값이 true 일 때 특정 스타일을 부여해줍니다. */
  ${props =>
    props.align &&
    css`
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