import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import 'jest-styled-components'

import {
  Row,
  Col,
  defaultTheme
} from '../src'

it ('<Row />', () => {
  const renderedElement = renderer.create(
    <Row />
  ).toJSON()
  expect(renderedElement).toMatchStyledComponentsSnapshot()
})

it ('<Row ...props />', () => {
  const renderedElement = renderer.create(
    <Row
      align='flex-start'
      vAlign='center'
    />
  ).toJSON()
  expect(renderedElement).toMatchStyledComponentsSnapshot()
})

it ('<Col />', () => {
  const renderedElement = renderer.create(
    <Col />
  ).toJSON()
  expect(renderedElement).toMatchStyledComponentsSnapshot()
})

it ('<Col ...props />', () => {
  const renderedElement = renderer.create(
    <Col
      xs={1}
      sm={1/2}
      md={1/3}
      lg={1/4}
      xl={1/5}
    />
  ).toJSON()
  expect(renderedElement).toMatchStyledComponentsSnapshot()
})

it ('<ThemeProvider theme />', () => {
  const renderedElement = renderer.create(
  	<ThemeProvider theme={defaultTheme}>
      <Row>
        <Col
          xs={1}
          sm={1/2}
          md={1/3}
          lg={1/4}
          xl={1/5}
        />
      </Row>
    </ThemeProvider>
  ).toJSON()
  expect(renderedElement).toMatchStyledComponentsSnapshot()
})
