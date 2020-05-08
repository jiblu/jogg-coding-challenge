import styled from 'styled-components'
import { Metrics } from '../styles'
import GridCard from './gridCard'

const GridViewStyle = styled.div`
  width: 80%;
  margin: auto;
  display: grid;
  padding: 2px;
  grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
  grid-gap: 2rem;
`

const GridView = props => (
  <GridViewStyle>
    {props.items.map(item => {
      return <GridCard item={item} key={item.id} />
    })}
  </GridViewStyle>
)

export default GridView
