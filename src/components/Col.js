import styled from 'styled-components'
import PropTypes from 'prop-types'
import { media } from '..'

const basis = (size) => size && `flex-basis: ${(size) * 100.00000000}%;`

const Col = styled.div`
  box-sizing: border-box;
  ${props => basis(props.xs)}
  ${props => props.theme.gutter && `padding-left: ${props.theme.gutter};`}
  ${props => props.theme.gutter && `padding-right: ${props.theme.gutter};`}

  ${props => props.sm && media('sm')} {
    ${props => basis(props.sm)}
  }

  ${props => props.md && media('md')} {
    ${props => basis(props.md)}
  }

  ${props => props.lg && media('lg')} {
    ${props => basis(props.lg)}
  }

  ${props => props.xl && media('xl')} {
    ${props => basis(props.xl)}
  }
`

Col.propTypes = {
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number
}

export default Col
