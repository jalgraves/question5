import React from "react"
import { StyledHero } from "./styles.js"

export const HeroHeader = (props) => {
  return (
    <StyledHero aria-details="Hero header" $background={props.background}>
      <img src="/images/logos/1x/ofw.png" alt="One Flawed Wage" />
    </StyledHero>
  )
}
