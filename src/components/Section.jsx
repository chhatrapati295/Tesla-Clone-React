import styled from "styled-components"
const Wrapper = styled.div`
    width : 100%;
    height : 120vh;
    display : flex;
    align-items : center;
    background : url(/images/${props=>props.bg});
    background-size : cover;
    background-position : center;
    // scroll-snap-align: start;
`
const Info = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : space-between;
    align-items : center;
    width : 100%;
    margin-top : 4rem;
    height : 80%;
    @media (max-width : 900px){
        margin-top : 7rem;
        height : 80%;
    }
`
const Box1 = styled.div`
    text-align : center
`
const Heading = styled.span`
    font-size : 2rem;
    font-weight : 500;
    @media (max-width : 900px){
        font-size : 1.5rem
    }
`
const Text = styled.p`
    font-size : 1rem;
    @media (max-width : 900px){
        font-size : 1rem
    }
`
const Buttons = styled.div`
    display : flex;
    gap : 20px;
    @media (max-width : 900px){
        align-items : center;
    }
`
const ButtonLeft = styled.button`
    width : 250px;
    padding : 0.6rem;
    outline : none;
    border : none;
    font-weight : 500;
    font-size : 0.9rem;
    background : #171A20;
    color : white;
    opacity : 0.8;
    cursor : pointer;
    border-radius : 4px;
    transition : all 0.4s ease;
    &:hover{
        opacity : 0.5
    }
    @media (max-width : 900px){
        width : 150px
    }
`
const ButtonRight = styled(ButtonLeft)`
    background : white;
    color : black;
    opacity : 0.65;
`

const Section = ({title , desc , leftBtn , rightBtn , bgImg}) => {
  return (
    <Wrapper bg={bgImg}>
      <Info>
        <Box1>
        <Heading>{title}</Heading>
        <Text>{desc}</Text>
        </Box1>
        {/* <DownArrow src='/images/down-arrow.svg'/> */}
        <Box1>
        <Buttons>
            <ButtonLeft>{leftBtn}</ButtonLeft>
            {rightBtn && <ButtonRight>{rightBtn}</ButtonRight>}
        </Buttons>
        </Box1>
      </Info>
    </Wrapper>
  )
}

export default Section
