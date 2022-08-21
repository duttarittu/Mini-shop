import styled from "styled-components";

const Container = styled.div`
    height: 30px;
    margin-top: 60px;
    background-color: teal;
    color: white;
    display:flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`

const Announcement = () => {
  return (
    <Container>
        <marquee>Super Deal !&#128293; Free Shipping on Orders over &#x20b9;499</marquee>
    </Container>
  )
}

export default Announcement;