import styled from 'styled-components'
import { Metrics } from '../styles'
import { NavStyle, IconsStyle, SpacerStyle } from '../styles/componentStyles'
import GridIcon from '../svgs/grid-view.svg'
import ListIcon from '../svgs/list-view.svg'

const Nav = props => (
  <NavStyle>
      <div>My Jogg</div>
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
