import styled from 'styled-components'
// import Header from './components/Header'
import Home from './components/Home'
const Container = styled.div`
  width : 100vw;
  height : 100vh;
`

const App = () => {
  return (
    <Container>
      {/* <Header/> */}
      <Home/>
    </Container>
  )
}

export default App
