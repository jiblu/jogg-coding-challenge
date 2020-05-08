import GridView from './gridView'
import ListView from './listView'

// conditionally render gridview vs listview to content

const Content = props => (
  <div>
    Content here {props.isGrid.toString()}
  </div>
)

export default Content
