import styled from 'styled-components'
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Container = styled.div`
flex: 1;
margin: 3px;
height: 65vh;
position: relative;
`
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`
const Info = styled.div`
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
  
`
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`
const Button = styled.button`
  border: none;
  padding: 20px;
  background-color: #fff;
  color: gray;
  cursor: pointer;
  font-weight: 600;
  &:hover{
    background-color: gray;
    color: white;
    opacity: 80%;
  }
  transition: .3s ease;
`

const CategoryItem = ({item}) => {
  useEffect(()=>{
    Aos.init({duration: 1500 })
  },[]);
  return (
    <Container data-aos={item.id%2!==0?"zoom-in-down":"zoom-in-up"}>
      <Image src={item.img}/>
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  )
}

export default CategoryItem