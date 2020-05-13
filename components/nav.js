import styled from 'styled-components'
import { Metrics, Colors } from '../styles'
import { NavTitleStyle, NavStyle, IconsStyle, IconStyle, SpacerStyle } from '../styles/componentStyles'
import GridIcon from '../svgs/grid-view.svg'
import GridIconActive from '../svgs/grid-view-active.svg'
import ListIcon from '../svgs/list-view.svg'
import ListIconActive from '../svgs/list-view-active.svg'

const Nav = props => {
let gridIcon = props.isGrid ? 
  <GridIconActive onClick={() => props.changeView(true)} width={Metrics.sizes.xsmall} height={Metrics.sizes.xsmall}/> :
  <GridIcon onClick={() => props.changeView(true)} width={Metrics.sizes.xsmall} height={Metrics.sizes.xsmall}/>

let listIcon = !props.isGrid ? 
  <ListIconActive onClick={() => props.changeView(false)} width={Metrics.sizes.xsmall} height={Metrics.sizes.xsmall}/> :
  <ListIcon onClick={() => props.changeView(false)} width={Metrics.sizes.xsmall} height={Metrics.sizes.xsmall}/>

  return (
    <NavStyle>
        <NavTitleStyle>My Joggs</NavTitleStyle>
        <SpacerStyle />
        <IconsStyle>
          <IconStyle>
            {gridIcon}
          </IconStyle>
          <IconStyle>
            {listIcon}
          </IconStyle>
        </IconsStyle>
    </NavStyle>
  )
}
export default Nav
