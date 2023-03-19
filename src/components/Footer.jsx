import styled from "styled-components"

const Container = styled.div`
    width : 100%;
    height : 60px;
    display : flex;
    margin-bottom : 1rem;
    justify-content : center;
    align-items : center;
    @media (max-width : 900px){
        height : auto;
    }
`
const Lists = styled.ul`
    display : flex;
    align-items : center;
    gap : 20px;
    @media (max-width : 900px){
        flex-direction : column;
        gap : 3px
    }
`
const List = styled.li`

`
const Link = styled.a`
    font-size : 0.8rem;
    font-weight : 500;
    cursor : pointer;
    opacity : 0.7;
    transition : all 0.3s ease;
    &:hover{
        opacity : 1
    }
`
const Footer = () => {
  return (
    <Container>
      <Lists>
        <List>
            <Link>Tesla © 2023</Link>
        </List>
        <List>
            <Link>Privacy & Legal</Link>
        </List>
        <List>
            <Link>Vehicle Recalls</Link>
        </List>
        <List>
            <Link>Contact</Link>
        </List>
        <List>
            <Link>Careers</Link>
        </List>
        <List>
            <Link>News</Link>
        </List>
        <List>
            <Link>Engage</Link>
        </List>
        <List>
            <Link>Locations</Link>
        </List>
      </Lists>
    </Container>
  )
}

export default Footer
