import './static/app.css';
import Header from "./components/common/header";
import Contents from "./components/common/contents";
import Footer from "./components/common/footer";
import styled from "styled-components";
function App() {
  return (
      <>
        <Header/>
        <Contents/>
        <Footer/>
          {/*예제*/}
          <BodyWrapper>
              <Box1>one one</Box1>
              <Box2>two two</Box2>
          </BodyWrapper>
      </>
  );
}

export default App;



const BodyWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  ${({ theme }) => theme.tablet`
    justify-content: center;
  `}
`;
const Box1 = styled.button`
  width: 100px;
  height: 100px;
  margin: 10px;
  background:darkorange;
`;

const Box2 = styled.button`
  width: 100px;
  height: 100px;
  margin: 10px;
  background:yellowgreen;
`;