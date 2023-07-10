import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section 
          title="Model S"
          description="Order Online for Touchless Delivery"
          bg="model-s.jpg"
          left="Custom Order"
          right="Existing Inventory"
        />
        <Section 
          title="Model 3"
          description="Order Online for Touchless Delivery"
          bg="model-3.jpg"
          left="Custom Order"
          right="Existing Inventory"
        />
        <Section 
          title="Model X"
          description="Order Online for Touchless Delivery"
          bg="model-x.jpg"
          left="Custom Order"
          right="Existing Inventory"
        />
        <Section 
          title="Model Y"
          description="Order Online for Touchless Delivery"
          bg="model-y.jpg"
          left="Custom Order"
          right="Existing Inventory"
        />
        <Section 
          title="Lowest Cost Solar Panels in America"
          description="Money-back Guarantee"
          bg="solar-panel.jpg"
          left="Order Now"
          right="Learn More"
        />
        <Section 
          title="Solar for New Roofs"
          description="Solar Roofs costs LESS Than a New Roof Plus Solar Panels"
          bg="solar-roof.jpg"
          left="Order Now"
          right="Learn More"
        />
        <Section 
          title="Accessories"
          description=""
          bg="accessories.jpg"
          left="Shop Now"
          right=""
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`
