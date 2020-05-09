import styled from 'styled-components'
import { Metrics } from '../styles'
import GridView from './gridView'
import ListView from './listView'

const Page = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr
`
const Content = props => {
  let view = props.isGrid ?
    <GridView items={props.items} /> :
    <ListView items={props.items} />
  return (
    <Page>
      <div> </div>
      {view}
      <div> </div>
    </Page>
  )
}

export default Content
