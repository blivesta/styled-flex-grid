import styled from 'styled-components'
import PropTypes from 'prop-types'

const Row = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  ${props => props.theme.gutter && `margin-left: -${props.theme.gutter};`}
  ${props => props.theme.gutter && `margin-right: -${props.theme.gutter};`}
  ${props => props.vAlign && `align-items: ${props.vAlign};`}
  ${props => props.align && `justify-content: ${props.align};`}
`

Row.propTypes = {
  align: PropTypes.string,
  vAlign: PropTypes.string
}

export default Row
