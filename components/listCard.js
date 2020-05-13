import styled from 'styled-components'
import { ListCardStyle, ListImage, ListTitle, ListText } from '../styles/componentStyles'

const titles = [
  {title:'CARDS',width: '200px'},
  {title:'',width: '100%'},
  {title:'REPLIES',width: '300px'},
  {title:'STATUS',width: '300px'},
  {title:'DATE CREATED',width: '300px'},
  {title:'OPTIONS',width: '300px'},
]

const ListCard = props => {
  let { image, title, replies, status, date  } = props.item
  return (
    <ListCardStyle>
        <ListImage src={image} height='50px' />
        <ListTitle>{title}</ListTitle>
        <ListText>{replies}</ListText>
        <ListText>{status}</ListText>
        <ListText>{date}</ListText>
        <ListText> ... </ListText>
    </ListCardStyle>
  )
}

export default ListCard
