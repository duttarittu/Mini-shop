import styled from "styled-components"
import { popularProducts } from "../data"
import Product from "./Product"


const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const Title = styled.div`
    font-size: 40px;
    text-align: center;
    color: #00dd90;
    margin-top: 40px;
`
const Products = () => {
   
  return (
    <>
    <Title>
            TRENDING STYLES
        </Title>
    <Container >
        {popularProducts.map(item=>(
            <Product item={item} key={item.id}/>
        ))}
    </Container>
    </>
  )
}

export default Products