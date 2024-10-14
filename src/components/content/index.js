import React from "react"
import { config } from "../../utils/index.js"
import { ContentSection } from "@jalgraves/react-components-library"
import { HeroHeader } from "./heroHeader/index.js"
const COLORS = config.colors
const FONTS = config.fonts

export const ContentContainer = (props) => {
  return (
    <ContentSection
      aColor={props.aColor}
      aFontFamily={FONTS.headline}
      aFontSize="1.75rem"
      aFontWeight="600"
      backgroundColor={props.backgroundColor}
      borderTop={props.borderTop}
      display="flex"
      flexFlow="column wrap"
      fontColor={COLORS.white}
      fontFamily={FONTS.content}
      h1Color={props.h1Color || COLORS.white}
      h1FontFamily={FONTS.title}
      h1FontSize="2.75rem"
      h1FontWeight="bold"
      h1LineHeight="150%"
      h2FontFamily={FONTS.content}
      h2FontSize="2rem"
      h2LineHeight="150%"
      h3Color={COLORS.hubPubBlue}
      h3FontFamily={FONTS.headline}
      h3FontSize="1.75rem"
      h3FontWeight="bold"
      h3LetterSpacing=".3rem"
      h3LineHeight="150%"
      h3TextTransform="uppercase"
      h4FontFamily={FONTS.content}
      h4FontSize="1.75rem"
      h4LineHeight="175%"
      h4Padding=".5rem 0"
      h5Color={COLORS.hubPubBlue}
      h5FontFamily={FONTS.headline}
      h5FontSize="2rem"
      h5FontWeight="bold"
      h5LetterSpacing=".5rem"
      h5LineHeight="150%"
      h5Padding=".5rem 0"
      h5TextTransform="uppercase"
      lineHeight="150%"
      padding="5%"
      pColor={props.pColor || COLORS.white}
      pFontSize="150%"
      pLineHeight="150%"
      pMaxWidth="900px"
      sectionMargin={props.sectionMargin || "auto"}
      width="100%"
    >
      {props.children}
    </ContentSection>
  )
}

export const Home = () => {
  return (
    <ContentSection 
      aColor={COLORS.dodgerBlue}
      aFontWeight="bold"
      display="flex" 
      flexFlow="column wrap"
      fontFamily={FONTS.content}
      h1Color={COLORS.black}
      h1FontFamily={FONTS.gothamUltra}
      h1FontSize="2.75rem"
      h1FontWeight="bold"
      h1LetterSpacing=".25rem"
      h1LineHeight="150%"
      h1Margin="auto"
      h1MaxWidth="500px"
      h1Padding="1rem"
      h1TextAlign="center"
      h1TextTransform="uppercase"
      h2FontFamily={FONTS.gothamUltra}
      h2FontSize="2rem"
      h2FontWeight="bold"
      h2LetterSpacing=".25rem"
      h2LineHeight="150%"
      h2Margin="auto"
      h2MaxWidth="500px"
      h2TextTransform="uppercase"
      padding="1rem 0"
      pFontFamily={FONTS.content}
      pFontSize="1.75rem"
      pLineHeight="175%"
      pMargin="auto"
      pMaxWidth="95%"
      pPadding="1rem 0"
      pWidth="900px"
    >
      <HeroHeader background={COLORS.dodgerBlue} />
      <h1>Massachusetts Voters Please Vote NO on Question 5!</h1>
      <p>An out of state radical activist group without the first clue about restaurant economics is attempting upend the lives of business owners and their tipped employees by eliminating the state's tip credit.</p>
      {/*<p>in order to grasp what's happening it's important to understand a little about the minimum wage and how tipped workers earn their wages.</p>*/}
      <h2>What's a tip credit?</h2>
      <p>The Fair Labor Standards Act (FLSA) established the minimum wage in 1938, in 1966 provisions were added for a tipped minimum wage creating the dual wage system that is in place today. Federally the hourly regular minimum wage is $7.25 and the tipped minimum wage. Individual states are allowed to set their own minimum wages and many do, including the Bay State. The Massachusetts hourly regular minimum wage is $15.00 and the tipped minimum wage is $6.75. In all states the difference between the two hourly wages is what constitutes the tip credit.</p>
      <p>The tip credit allows employers to pay tipped employees (any employee that makes at least $30 a month in tips) the tipped minimum wage provided that the hourly wage plus the tips earned in a given pay period amount to the regular minimum wage. If your tips plus your hourly don’t equal the regular minimum wage then employers must pay the difference. Everything after the minimum wage is paid goes into the tip pool.</p>
      <p>This means that tipped employees are <strong>already guaranteed the state minimum wage under current laws!</strong></p>
      {/*<p>As a simple example if I work 8 hours bartending and earn $100.00 in tips that comes out to $154.00 (8 hours X 6.75 + 100), the minimum wage for that shift would be $120.00 (8 hours X 15.00). My employer would owe me no further pay and $34.00 would be distributed to me in my next paycheck. However if I only made $50.00 in tips my employer would have to pay the $16.00 difference from the regular minimum wage.</p>*/}
      <h2>What's the issue?</h2>
      <p>Question 5 aims to eliminate the state's tip credit and have employers bare the full burden of paying tipped employees the regular minimum wage. The initiative also has implications for how employees’s tips are distributed. If enacted, the new law would green light restaurant tip pools – which could require tips be shared with non-tipped, non-customer-facing staff who are not paid a tipped wage but rather subject to salary or the hourly minimum wage.</p>
      <h2>Why is this bad?</h2>
      <p>We'll put aside the economic dumpster fire that this ignites for a minute and start with the fact that the very workers that this law claims to protect are overwhelmingly opposed to it. A <a href="https://files.constantcontact.com/0d5bb3c6be/5f54e7be-63cf-4756-a211-03833a3772d0.pdf">survey of 351 tipped employees</a> currently working at full-service restaurants in Massachusetts was conducted in February 2024. Here are the key findings:</p>
        <ol style={{width: "750px", maxWidth: "85%", margin: "auto", fontSize: "1.75rem"}}>
          <li><p><strong>86%</strong> think the current tipping system works for them.</p></li>
          <li><p><strong>90%</strong> believe that if tipped wages are eliminated, tipped employees will earn less.</p></li>
          <li><p><strong>88%</strong> oppose a mandatory tip pool where tips are shared with the kitchen and other non-service staff.</p></li>
          <li><p><strong>91%</strong> say they prefer the current system, with a lower base wage and tips that provide the ability to earn more than the minimum wage.</p></li>
          <li><p><strong>56%</strong> of respondents report earning more than $30.00/per hour.</p></li>
        </ol>
      <p>It's not just tipped workers in MA that feel this way. Surveys of tipped workers conducted in <a href="https://www.ctrestaurant.org/uploads/8/2/3/5/82358700/connecticut_restaurant_tipped_employee_survey_2024.pdf">Connecticut</a> and <a href="https://d3ciwvs59ifrt8.cloudfront.net/707c1f26-30bd-48a9-bf97-a1ed85ccbf72/477636f0-2745-438a-8d69-04fc2f9dbb81.pdf">Ohio</a> have produced similar results.</p>
      <p>You don't need an MBA from Harvard to see why server concerns are legitimate. Generally restaurants allocate <a href="https://pos.toasttab.com/blog/on-the-line/average-restaurant-profit-margin">one third</a> of their revenue for labor costs. The tip credit elimination amounts to a 58% increase in labor costs per tipped employee. The average profit margin of full service restaurants is already very thin at <a href="https://pos.toasttab.com/blog/on-the-line/average-restaurant-profit-margin">3% to 5%</a>. Since profits alone clearly won't be able to absorb this cost owners will be forced to reduce hourly staff or eliminate jobs completely, add service charges to menus, increase menu prices, or close down all together.</p>
      <p>One thing I hope we can all agree is that a closed bar or restaurant pays no wages to anyone!</p>
      <h2>Don't believe it?</h2>
      <p>This is not some grand experiment, seven states and Washington D.C have already eliminated their tips credits or have started to phase them out. The results thus far are not encouraging.</p>
      <p>Washington D.C most recently approved their measure Initiative 82 to phase out their tip credit. DC diners are clearly confused and frustrated by the change. Six months before passing the initiative the DC Attorney’s General office said it received three complaints about restaurant charges. In the six months after it passed, 152 complaints were filed.</p>
      <p>California has experienced a 14% increase in restaurant closures and now has one of the lowest average tipping percentages in the country.</p>
    </ContentSection>
  )
}
