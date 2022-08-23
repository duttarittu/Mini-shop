import { Facebook, LinkedIn, MailOutline, Phone, Pinterest, Room, Twitter, YouTube } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
    height: 30vh;
    width: 100%;
    display: flex;
    justify-content: space-between;

`
const Left = styled.div`  
    flex: 1;
`
const Logo = styled.h1`
    margin-top: 15px;
`
const Desc = styled.p`
    margin: 20px 0px;
`
const IconContainer = styled.div`  
    display: flex;
    margin-top: 15px;
`
const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: ${props=>props.bg};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover{
        transform: scale(1.1);
    }
`
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
    &:hover{
        transform: scale(1.02);
        text-shadow: 1px 1px 10px gray;
    }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;
const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Mini Shop</Logo>
            <Desc>Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Tempore voluptatum sit
                nostrum fugiat rerum quis veritatis
                iste velit nisi facere numquam asperiores,
                non fugit, expedita, corporis sequi quod
                optio animi quidem id consequatur
                doloremque nihil voluptate quae.
            </Desc>
            <IconContainer>

                <Icon bg="#4267B2" to="facebook.com">
                    <Facebook/>
                </Icon>
                <Icon bg="#0A66C2">
                    < LinkedIn/>
                </Icon>
                <Icon bg="#1DA1F2">
                    < Twitter/>
                </Icon>
                <Icon bg="#E60023">
                    <Pinterest/>
                </Icon>
                <Icon bg="#FF0000">
                <YouTube/>
                </Icon>
            </IconContainer>
        </Left>
        <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> 27,poddar para,Garhbeta,Paschim Medinipur
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +9732146226
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> duttarittu@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  )
}

export default Footer;