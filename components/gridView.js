import styled from 'styled-components'
import { Metrics } from '../styles'
import { GridViewStyle } from '../styles/componentStyles'
import GridCard from './gridCard'


const GridView = props => (
  <GridViewStyle>
    {props.items.map(item => {
      return <GridCard item={item} key={item.id} />
    })}
  </GridViewStyle>
)

export default GridView
