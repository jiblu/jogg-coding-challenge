import styled from 'styled-components'
import { Metrics } from '../styles'
import { GridCardStyle, ImageStyle } from '../styles/componentStyles'


const GridCard = props => {
  let { image, title } = props.item
  return (
    <GridCardStyle>
      <ImageStyle src={props.item.image} width={Metrics.sizes.medium} />
      {/* <CardTitle>
        {title}
      </CardTitle> */}
      {/* {JSON.stringify(props.item)} */}
    </GridCardStyle>
  )
}

export default GridCard
