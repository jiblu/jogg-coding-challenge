import styled, {css} from 'styled-components'
import { Colors } from '../styles'
import { ListViewStyle, ListLabelRowStyle, ListLabelStyle } from '../styles/componentStyles'
import ListCard from './listCard'

const titles = [
  {title:'CARDS',width: '210px'},
  {title:'',width: '100%'},
  {title:'REPLIES',width: '300px'},
  {title:'STATUS',width: '300px'},
  {title:'DATE CREATED',width: '300px'},
  {title:'OPTIONS',width: '300px'},
]

const ListView = props => (
  <ListViewStyle>
    <ListLabelRowStyle>
      {titles.map((t, i) => {
        let { title, width } = t
        return <ListLabelStyle key={i} width={width}>{title}</ListLabelStyle>
      })}
    </ListLabelRowStyle>
    {props.items.map(item => {
      return <ListCard item={item} key={item.id} />
    })}
    
  </ListViewStyle>
)

export default ListView
