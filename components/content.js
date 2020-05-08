import styled from 'styled-components'
import { Metrics } from '../styles'
import GridView from './gridView'
import ListView from './listView'

const Page = styled.div`
    padding: 0px ${Metrics.pagePadding}
`
const Content = props => {
  let view = props.isGrid ?
    <GridView items={props.items} /> :
    <ListView items={props.items} />
  return (
    <Page>
      {view}
    </Page>
  )
}

export default Content
