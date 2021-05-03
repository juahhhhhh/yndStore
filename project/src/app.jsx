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
          {/*<BodyWrapper>*/}
          {/*    <Box1>one one</Box1>*/}
          {/*    <Box2>two two</Box2>*/}
          {/*</BodyWrapper>*/}
      </>
  );
}

export default App;
