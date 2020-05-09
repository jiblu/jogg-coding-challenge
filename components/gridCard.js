import styled from 'styled-components'
import { Metrics } from '../styles'

const GridCardStyle = styled.div`
  width: ${Metrics.cardWidth};
  height: ${Metrics.cardHeight};
  box-shadow: 0px 8px 8px 3px rgba(0, 0, 0, 0.2), 0 5px 10px 0 rgba(0, 0, 0, 0.19);
`

const Image = styled.img`

`
const CardTitle = styled.div`
  text-align: center
`

const GridCard = props => {
  let { image, title } = props.item
  return (
    <GridCardStyle>
      <Image src={props.item.image} width={Metrics.cardWidth} />
      {/* <CardTitle>
        {title}
      </CardTitle> */}
      {/* {JSON.stringify(props.item)} */}
    </GridCardStyle>
  )
}

export default GridCard
