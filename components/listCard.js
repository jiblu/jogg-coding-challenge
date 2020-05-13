import styled from 'styled-components'
import { ListCardStyle, ListImage, ListTitle, ListText, Dot } from '../styles/componentStyles'
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
  let repliesText =  replies > 1 ? replies + ' replies' : replies + ' reply'
  title = title.toUpperCase()
  status = status[0].toUpperCase() + status.slice(1)
  date = getFormattedDate(date)
  let dot = replies > 0 ? <Dot hasReplies /> : <Dot />
  return (
    <ListCardStyle>
        <ListImage src={image} height='50px'/>
        <ListTitle>{title}</ListTitle>
        <ListText>{dot} {repliesText}</ListText>
        <ListText>{status}</ListText>
        <ListText>{date}</ListText>
        <ListText> ... </ListText>
    </ListCardStyle>
  )
}

export default ListCard
