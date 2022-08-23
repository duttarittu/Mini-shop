import { ShoppingCartOutlined } from "@material-ui/icons"
import { FavoriteBorderOutlined, SearchOutlined } from "@mui/icons-material"
import styled from "styled-components"
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .3s ease;
    cursor: pointer;
`
const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: wheat;
    position: absolute;
    transition: all 0.3s ease;
    
`
const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 290px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ebebeb;
    position: relative;
    &:hover ${Info}{
        opacity: 1;
    }
    &:hover ${Circle}{
        width: 230px;
        height: 230px;
    }
`

const Image = styled.img`
height: 75%;
z-index: 2;
`

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    margin: 10px;
    transition: all .3s ease;
    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`
const Product = ({item}) => {
    useEffect(()=>{
        Aos.init({duration: 1500 })
      },[]);
  return (
    <Container data-aos={item.id%2!==0?"zoom-in-up":"zoom-in-down"}>
        <Circle/>
        <Image src={item.img}/>
        <Info>
            <Icon>
                <ShoppingCartOutlined/>
            </Icon>
            <Icon>
                <SearchOutlined/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product