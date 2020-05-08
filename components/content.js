import GridView from './gridView'
import ListView from './listView'
import { Page } from '../styles/component'

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
