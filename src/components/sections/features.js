import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

const Features = () => (
  <Section id="features">
    <StyledContainer>
      <Subtitle>Features</Subtitle>
      <SectionTitle>A purpose-built tool for accessibility teams</SectionTitle>
      <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>Manual testing</FeatureTitle>
          <FeatureText>
            Guided testing and streamlined logging to get issues to developers
            quickly.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Automated testing</FeatureTitle>
          <FeatureText>
            Integrated testing to catch issues that slip through.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Reporting</FeatureTitle>
          <FeatureText>
            Visualize and monitor progress across pages and products from one
            dashboard.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Compliance</FeatureTitle>
          <FeatureText>
            Create VPATs from existing issues and easily update when fixes are
            pushed.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Compatibility</FeatureTitle>
          <FeatureText>
            Plays well with Jira, Github, Pivotal Tracker, and others.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Aggregation</FeatureTitle>
          <FeatureText>
            Manage all issues across products from both manual and automated
            testing in a single location.
          </FeatureText>
        </FeatureItem>
      </FeaturesGrid>
    </StyledContainer>
  </Section>
)

export default Features

const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
  color: ${(props) => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${(props) => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FeatureTitle = styled.h4`
  color: ${(props) => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const FeatureText = styled.p`
  text-align: center;
`
