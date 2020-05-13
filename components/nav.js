import styled from 'styled-components'
import { Metrics } from '../styles'
import { NavTitleStyle, NavStyle, IconsStyle, SpacerStyle } from '../styles/componentStyles'
import GridIcon from '../svgs/grid-view.svg'
import ListIcon from '../svgs/list-view.svg'

const Nav = props => (
  <NavStyle>
      <NavTitleStyle>My Joggs</NavTitleStyle>
      <SpacerStyle />
      <IconsStyle>
        <GridIcon
          width={Metrics.sizes.xsmall}
          height={Metrics.sizes.xsmall}
          onClick={() => props.changeView(true)}
        />
        <ListIcon
          width={Metrics.sizes.xsmall}
          height={Metrics.sizes.xsmall}
          onClick={() => props.changeView(false)}
        />
      </IconsStyle>
  </NavStyle>
)

export default Nav
