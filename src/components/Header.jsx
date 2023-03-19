import styled from "styled-components"

const Wrapper = styled.div`
    display : flex;
    justify-content : space-between;
    padding : 0 2rem;
    position : fixed;
    width : 100%;
    top : 10px;
    align-items :center;
    @media (max-width : 900px){
        top : 10px;
        padding 0 1rem;
    }
`
const Logo = styled.img`
    width : 150px;
    height : 1.1rem;
    margin : 0.7rem 1rem;
    cursor : pointer;
`
const Button = styled.button`
    color : black;
    font-size : 0.9rem;
    font-weight : 500;
    background : rgba(0,0,0,0.07);
    outline : none;
    border : none;
    border-radius : 4px;
    padding : 0.4rem 0.8rem;
    transition : all 0.4s ease;
    cursor : pointer;
    &:hover{
        background : rgba(0,0,0,0.13)
    }
`
const MenuBar = styled.div`
    position : fixed;
    top : 0;
    right : 0;
    width : 25%;
    height : 100vh;
    background : rgba(255,255,255,1);
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : flex-start;
    padding-left : 1rem     ;
    z-index : 999;
    transition : all 0.8s ease;
    &.active{
        display : none
    }
    @media (max-width : 900px){
        width : 50%
    }
`
const Cross = styled.span`
    position : absolute;
    top : 30px;
    right : 50px;
    font-size : 2rem
`
const Lists = styled.ul`
    display : flex;
    flex-direction : column;
    gap : 10px;
    // margin-top : 5rem;
    width : 90%;
`
const List = styled.li`
    padding : 0 0.3rem;
    border-radius : 4px;
    &:hover{
        background : whitesmoke;

    }
`
const Link = styled.a`
    font-weight : 500;
    opacity : 0.7;
`
const Header = () => {

    const toggleMenu = ()=>{
        document.querySelector('.menu').classList.toggle('active')
    }
    const closeMenu = ()=>{
        document.querySelector('.menu').classList.toggle('active')
    }

  return (
    <>
    
      <MenuBar className=" menu active">
        <Cross><i class="fa-solid fa-xmark" onClick={closeMenu}></i></Cross>
        <Lists>
        <List>
            <Link>Model S</Link>
        </List>
        <List>
            <Link>Model 3</Link>
        </List>
        <List>
            <Link>Model X</Link>
        </List>
        <List>
            <Link>Model Y</Link>
        </List>
        <List>
            <Link>Solar Roof</Link>
        </List>
        <List>
            <Link>Solar Panels</Link>
        </List>
        <List>
            <Link>Powerall</Link>
        </List>
        <List>
            <Link>Existing Inventory</Link>
        </List>
        <List>
            <Link>Used Inventory</Link>
        </List>
        <List>
            <Link>Trade-In</Link>
        </List>
        <List>
            <Link>Demo Drive</Link>
        </List>
        <List>
            <Link>Insurance</Link>
        </List>
        <List>
            <Link>Commercial Energy</Link>
        </List>
        {/* <List>
            <Link>Charging</Link>
        </List>
        <List>
            <Link>Find US</Link>
        </List>
        <List>
            <Link>Support</Link>
        </List>
        <List>
            <Link>Investor Relations</Link>
        </List>
        <List>
            <Link>Shop</Link>
        </List>
        <List>
            <Link>Account</Link>
        </List>
        <List>
            <Link>More</Link>
        </List> */}
      </Lists>
      </MenuBar>
    <Wrapper>
      <Logo src='/images/logo.svg'></Logo>
      <Button onClick={toggleMenu}>Menu</Button>
    </Wrapper>
    </>
  )
}

export default Header
