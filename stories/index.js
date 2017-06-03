import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { storiesOf } from '@storybook/react'
import {
  Row,
  Col,
  defaultTheme
} from '../src'

const color = {
  primary: '22, 58, 128'
}

const StoryCol = Col.extend`
  border: 1px solid #ddd;
`

const Fixture = styled.div`
  background-color: rgb(${color.primary});
  color: rgb(${color.primary});
  height: 6rem;
`

const FixtureMini = Fixture.extend`
  height: 3rem;
`

storiesOf('Row', module)
  .add('<Row />', () => (
    <Row>
      <StoryCol xs={1/5}>
        <Fixture />
      </StoryCol>
      <StoryCol xs={1/5}>
        <Fixture />
      </StoryCol>
      <StoryCol xs={1/5}>
        <Fixture />
      </StoryCol>
      <StoryCol xs={1/5}>
        <Fixture />
      </StoryCol>
      <StoryCol xs={1/5}>
        <Fixture />
      </StoryCol>
    </Row>
  ))
  .add('<ThemeProvider theme={defaultTheme}>', () => (
  	<ThemeProvider theme={defaultTheme}>
      <Row>
        <StoryCol xs={1/3}>
          <Fixture />
        </StoryCol>
        <StoryCol xs={1/3}>
          <Fixture />
        </StoryCol>
        <StoryCol xs={1/3}>
          <Fixture />
        </StoryCol>
      </Row>
    </ThemeProvider>
  ))
  .add('<Row align="center">', () => (
    <Row align='center'>
      <StoryCol xs={1/3}>
        <Fixture />
      </StoryCol>
      <StoryCol xs={1/2}>
        <Fixture />
      </StoryCol>
      <StoryCol xs={1/2}>
        <Fixture />
      </StoryCol>
      <StoryCol xs={1/2}>
        <Fixture />
      </StoryCol>
    </Row>
  ))
  .add('<Row vAlign="center">', () => (
    <Row vAlign='center'>
      <StoryCol xs={2/7}>
        <FixtureMini />
      </StoryCol>
      <StoryCol xs={3/7}>
        <Fixture />
      </StoryCol>
      <StoryCol xs={1/7}>
        <FixtureMini />
      </StoryCol>
      <StoryCol xs={1/7}>
        <Fixture />
      </StoryCol>
    </Row>
  ))
  .add('Responsive', () => (
  	<ThemeProvider theme={defaultTheme}>
      <Row vAlign='center'>
        <StoryCol xs={1/2} sm={1/3} md={1/4} lg= {1/5} xl={1/6}>
          <Fixture />
        </StoryCol>
        <StoryCol xs={1/2} sm={1/3} md={1/4} lg= {1/5} xl={1/6}>
          <Fixture />
        </StoryCol>
        <StoryCol xs={1/2} sm={1/3} md={1/4} lg= {1/5} xl={1/6}>
          <Fixture />
        </StoryCol>
        <StoryCol xs={1/2} sm={1/3} md={1/4} lg= {1/5} xl={1/6}>
          <Fixture />
        </StoryCol>
        <StoryCol xs={1/2} sm={1/3} md={1/2} lg= {1/5} xl={1/6}>
          <Fixture />
        </StoryCol>
        <StoryCol xs={1/2} sm={1/3} md={1/2} lg= {1} xl={1/6}>
          <Fixture />
        </StoryCol>
      </Row>
    </ThemeProvider>
  ))
