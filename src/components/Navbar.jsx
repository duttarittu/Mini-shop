import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import Badge from '@material-ui/core/Badge';
import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    height: 60px;
    position: fixed;
    z-index: 5;
    top: 0;
    width: 100%;
    background-color: whitesmoke;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
//left part------>
const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`
const SearchContainer = styled.div`
    border: .5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border: none;
    outline:none;
    vertical-align: bottom;
`

//Center part---->
const Center = styled.div`
flex: 1;
text-align: center;
`;
const Logo = styled.h1`
    font-weight: bold;
`;



const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    &:hover {
        transform: scale(1.05);
        color: blueviolet;
    }
    transition: all .4s ease;
`;


const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input/>
                    <Search style={{color:"gray", fontSize:16, cursor: "pointer"}}/>
                </SearchContainer>
            </Left>
            <Center><Logo>Mini Shop</Logo></Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                <Badge badgeContent={6} color="primary">
                    <ShoppingCartOutlined/>
                </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar