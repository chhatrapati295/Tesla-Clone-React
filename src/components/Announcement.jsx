import styled from "styled-components"

const Container = styled.div`
    width : 100%;
    height : 50px;
    display : flex;
    justify-content :Center;
    align-items : center;
    @media (max-width : 900px){
      display : none
    }
`
const Text = styled.p`
    font-size : 0.9rem;
    letter-spacing : 0.5px
`
const Link = styled.a`
    text-decoration : underline;
    margin-left : 0.7rem;
    cursor : pointer;
`
const Announcement = () => {
  return (
    <Container>
      <Text>New Model 3 and Model Y vehicles qualify for a federal tax credit for eligible buyers.<Link>Learn More</Link> </Text>
    </Container>
  )
}

export default Announcement
