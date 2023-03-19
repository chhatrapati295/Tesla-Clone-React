import styled from "styled-components"
// import Announcement from "./Announcement"
import Footer from "./Footer"
import Header from "./Header"
import Section from "./Section"

const Wrapper = styled.div`
    position : relative;
    height : 100vh;
    // scroll-snap-type : y mandatory;
`
const DownArrow = styled.img`
    height : 2rem;
    // margin-top : 1rem;
    animation : animatedArrow 1.5s infinite;
    position : absolute;
    top : 92%;
    left : 50%;
    transform : translate(-50%,-50%);
    @media (max-width : 900px){
      top : 90%;
  }
`
const Home = () => {
  return (
    <Wrapper>
        <DownArrow src='/images/down-arrow.svg'/>
        {/* <Announcement/> */}
        <Header/>
      <Section title='Model S' desc='Leasing starting at $299/mo' bgImg='model-3.jpg' leftBtn='Custom Order' rightBtn='Demo Drive' />
      <Section title='Model 3' desc='' bgImg='model-s.jpg' leftBtn='Custom Order' rightBtn='Demo Drive' />
      <Section title='Model X' desc='' bgImg='model-x.jpg' leftBtn='Custom Order' rightBtn='View Inventory' />
      <Section title='Model Y' desc='' bgImg='model-y.jpg' leftBtn='Custom Order' rightBtn='View Inventory' />
      <Section title='Solar Panels' desc='Lowest Cost Solar Panels in America' bgImg='solar-panel.jpg' leftBtn='Custom Order' rightBtn='Learn More' />
      <Section title='Solar Roof' desc='Produce Clean Energy From Your Roof' bgImg='solar-roof.jpg' leftBtn='Custom Order' rightBtn='Learn More'/>
      <Section title='Accessories' desc='' bgImg='accessories.jpg' leftBtn='Shop Now' />
      <Footer/>
    </Wrapper>
  )
}

export default Home
