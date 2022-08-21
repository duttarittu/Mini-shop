import styled from "styled-components"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from "react";
import { sliderItems } from "../data";
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #818181;
    opacity: 50%;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    padding-right: ${props=> props.direction === "left" && "5px"};
    padding-left: ${props=> props.direction === "right" && "5px"};
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    z-index: 2;
    &:hover {
        opacity: 70%;
        background-color: #7e7e7e;
        width: 52px;
        height: 52px;
        transition: .3s ease;
    }

`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props=>props.slideIndex * -100}vw);
    transition: .4s ease;
`
const Slide = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    background-color: #${props=>props.bg};
`
const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
`
const Image = styled.img`
    height: 90%;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 30px;
`
const Title = styled.h1`
font-size: 90px;
text-align: left;
text-shadow: 0px 10px 30px lightyellow;
background: -webkit-linear-gradient(orange,white,green);
-webkit-background-clip: text;
background-clip: text;
-webkit-text-fill-color: transparent;

`
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 25px;
    font-weight: 500;
    letter-spacing: 2px;
    color: darkgreen;
    text-shadow: 0px 5px 7px lightgreen;
`
const Button = styled.button`
    padding: 20px;
    font-size: 20px;
    font-weight: bold;
    color: #4646e6;
    background-image: linear-gradient(orange,white,green);
    text-shadow: 0px 3px 8px whitesmoke;
    cursor: pointer;
    &:hover {
        color: white;
        text-shadow: 0px 3px 15px black;
        background-image: linear-gradient(orange,white);
        transform:scale(1.01);
    }
    transition: .3s ease;
`


const Slider = () => {
    const [slideIndex,setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if(direction==="left"){
            setSlideIndex(slideIndex>0 ? slideIndex-1 : 2)
        }
        else{
            setSlideIndex(slideIndex<2 ? slideIndex+1 : 0)
        }
    };
    useEffect(()=>{
        Aos.init({duration: 1000 })
      },[]);
  return (
    <Container data-aos="fade-up">
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowBackIosNewIcon style={{cursor: "pointer"}}/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item) => (
                <Slide bg={item.bg}>
                <ImgContainer>
                    <Image src={item.img}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Desc>{item.desc}</Desc>
                    <Button>SHOP NOW</Button>
                </InfoContainer>
            </Slide >
            ))}
            
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowForwardIosIcon style={{cursor: "pointer"}}/>
        </Arrow>
    </Container>
  )
}

export default Slider