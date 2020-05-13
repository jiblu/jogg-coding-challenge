import { ListViewStyle } from '../styles/componentStyles'
import ListCard from './listCard'


const ListView = props => (
  <ListViewStyle>
    {props.items.map(item => {
      return <ListCard item={item} key={item.id} />
    })}
    
  </ListViewStyle>
)

export default ListView
