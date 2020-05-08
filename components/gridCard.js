import styled from 'styled-components'
import { Metrics } from '../styles'

const GridCardStyle = styled.div`
  margin: 2px;
  width: 300px;
  height: 300px
`
const GridCard = props => (
  <GridCardStyle>
    {JSON.stringify(props.item)}
  </GridCardStyle>
)

export default GridCard
