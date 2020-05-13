import styled, {css} from 'styled-components'
import { ListViewStyle } from '../styles/componentStyles'
import ListCard from './listCard'

const titles = [
  {title:'CARDS',width: '210px'},
  {title:'',width: '100%'},
  {title:'REPLIES',width: '300px'},
  {title:'STATUS',width: '300px'},
  {title:'DATE CREATED',width: '300px'},
  {title:'OPTIONS',width: '300px'},
]

const ListLabelRowStyle = styled.div`
  display: flex;
  margin: 5px;
`
const ListLabelStyle = styled.div`
  margin: 0 5px;
  ${props => props.width && css`
    width: ${props.width}
  `};
`

const ListView = props => (
  <ListViewStyle>
    <ListLabelRowStyle>
      {titles.map(t => {
        let { title, width } = t
        return <ListLabelStyle width={width}>{title}</ListLabelStyle>
      })}
    </ListLabelRowStyle>
    {props.items.map(item => {
      return <ListCard item={item} key={item.id} />
    })}
    
  </ListViewStyle>
)

export default ListView
