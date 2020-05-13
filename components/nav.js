import styled from 'styled-components'
import { Metrics } from '../styles'
import { NavTitleStyle, NavStyle, IconsStyle, IconStyle, SpacerStyle } from '../styles/componentStyles'
import GridIcon from '../svgs/grid-view.svg'
import ListIcon from '../svgs/list-view.svg'

const Nav = props => (
  <NavStyle>
      <NavTitleStyle>My Joggs</NavTitleStyle>
      <SpacerStyle />
      <IconsStyle>
        <IconStyle>
          <GridIcon
            width={Metrics.sizes.xsmall}
            height={Metrics.sizes.xsmall}
            onClick={() => props.changeView(true)}
          />
        </IconStyle>
        <IconStyle>
          <ListIcon
            width={Metrics.sizes.xsmall}
            height={Metrics.sizes.xsmall}
            onClick={() => props.changeView(false)}
          />
        </IconStyle>
      </IconsStyle>
  </NavStyle>
)

export default Nav
