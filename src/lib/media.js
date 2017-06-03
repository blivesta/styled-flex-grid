import { defaultTheme } from '..'

const minWidth = width => `@media screen and (min-width: ${width})`
const media = point => props =>
  typeof props.theme.breakpoints === 'object'
    ? minWidth(props.theme.breakpoints[point])
    : minWidth(defaultTheme.breakpoints[point])

export default media
