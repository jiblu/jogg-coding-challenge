import { ListCardStyle } from '../styles/componentStyles'
import styled from 'styled-components'

const ListImage = styled.img`
  flex: 1;
  margin: 0 5px;
`
const ListTitle = styled.div`
  flex: 4;
  margin: 0 5px;
`
const ListText = styled.div`
  flex: 2;
  margin: 0 5px;
`
const ListCard = props => {
  let { image, title, replies, status, date  } = props.item
  return (
    <ListCardStyle>
        <ListImage src={image} width='20px' />
        <ListTitle>{title}</ListTitle>
        <ListText>{replies}</ListText>
        <ListText>{status}</ListText>
        <ListText>{date}</ListText>
    </ListCardStyle>
  )
}

export default ListCard
