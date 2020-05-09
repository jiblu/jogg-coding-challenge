import styled from 'styled-components'
import { Metrics } from '../styles'
import GridCard from './gridCard'

const GridViewStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: ${Metrics.gridGap};
  grid-row-gap: ${Metrics.gridRowGap}
`

const GridView = props => (
  <GridViewStyle>
    {props.items.map(item => {
      return <GridCard item={item} key={item.id} />
    })}
  </GridViewStyle>
)

export default GridView
