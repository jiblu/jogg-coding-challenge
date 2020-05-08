import GridView from './gridView'
import ListView from './listView'
import { Page } from '../styles/component'
// conditionally render gridview vs listview to content

const Content = props => (
  <Page>
    Content here {props.isGrid.toString()}
  </Page>
)

export default Content
