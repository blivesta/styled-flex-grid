# styled-flex-grid

[![npm Version](https://img.shields.io/npm/v/styled-flex-grid.svg)](https://www.npmjs.com/package/styled-flex-grid) [![License](https://img.shields.io/npm/l/styled-flex-grid.svg)](https://www.npmjs.com/package/styled-flex-grid) [![Build Status](https://travis-ci.org/blivesta/styled-flex-grid.svg)](https://travis-ci.org/blivesta/styled-flex-grid) [![Coverage Status](https://coveralls.io/repos/blivesta/styled-flex-grid/badge.svg?branch=master&service=github)](https://coveralls.io/github/blivesta/styled-flex-grid?branch=master)

> Responsive flexbox grid for [styled-components](https://github.com/styled-components/styled-components).

## Install

```
$ yarn add styled-flex-grid

// or

$ npm install styled-flex-grid
```

## Usage

```js
import { Row, Col } from 'styled-flex-grid'

const App () = (
  <Row
   vAlign='flex-start' // align-items
   align='center' // justify-content
  >
    <Col       // breakpoints
      xs={1}   // 0(init)~
      sm={1/2} // 36em(576px)~
      md={1/3} // 48em(768px)~
      lg={1/4} // 62em(992px)~
      xl={5/1} // 75em(1200px)~
    >
      Col1
    </Col>
  </Row>
)
```

## Theming

```js
import { Row, Col } from 'styled-flex-grid'
import { ThemeProvider } from 'styled-components'

const theme ={
  breakpoints: {
    sm: '36em',
    md: '48em',
    lg: '62em',
    xl: '75em'
  },
  gutter: '1.5rem'
}

const App () = (
  <ThemeProvider theme={theme}>
    <Row>
     <Col xs={1} sm={1/2} md={1/3} lg={1/4} xl={5/1}>Col1</Col>
     <Col xs={1} sm={1/2} md={1/3} lg={1/4} xl={5/1}>Col2</Col>
     <Col xs={1} sm={1/2} md={1/3} lg={1/4} xl={5/1}>Col3</Col>
    </Row>
  </ThemeProvider>
)
```

## License

Released under the MIT license.
