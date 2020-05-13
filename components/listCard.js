import styled from 'styled-components'
import { ListCardStyle, ListImage, ListTitle, ListText } from '../styles/componentStyles'
import { getFormattedDate } from '../utils/date'

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
  title = title.toUpperCase()
  replies =  replies > 1 ? replies + ' replies' : replies + ' reply'
  status = status[0].toUpperCase() + status.slice(1)
  date = getFormattedDate(date)
  return (
    <ListCardStyle>
        <ListImage src={image} width='100px' height='50px' />
        <ListTitle>{title}</ListTitle>
        <ListText>{replies}</ListText>
        <ListText>{status}</ListText>
        <ListText>{date}</ListText>
        <ListText> ... </ListText>
    </ListCardStyle>
  )
}

export default ListCard
