import styled, {css} from 'styled-components'
import { Metrics, Colors } from './index'

export const IndexStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center
`
export const NavTitleStyle = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: ${Colors.gray}
`

export const NavStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  @media (min-width: 1000px) {
    width: calc(${Metrics.sizes.medium} * 3 + ${Metrics.sizes.xsmall} * 2 + 40px);
  }
  @media (min-width: 670px) and (max-width: 1000px) { 
    width: 665px
  }
  @media (max-width: 670px) { 
    width: 350px
  }
`

export const SpacerStyle = styled.div`
  flex-grow: 1;
  min-width: 100px
`

export const IconsStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContentStyle = styled.div`
  background: ${Colors.white};
  padding: ${Metrics.sizes.xxxsmall};
  width: calc(${Metrics.sizes.medium} * 3 + ${Metrics.sizes.xsmall} * 2 + 40px)
`
export const GridViewStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: ${Metrics.sizes.xxsmall};
  grid-row-gap: ${Metrics.sizes.small};
  margin: ${Metrics.sizes.xsmall};
  max-width: calc(${Metrics.sizes.medium} * 3 + ${Metrics.sizes.xsmall} * 2)};
  @media (max-width: 1000px) { 
    grid-template-columns: 1fr 1fr;
    max-width: calc(${Metrics.sizes.medium} * 2 + ${Metrics.sizes.xsmall} * 2)};
  }
  @media (max-width: 670px) { 
    grid-template-columns: 1fr;
    max-width: calc(${Metrics.sizes.medium} * 1 + ${Metrics.sizes.xsmall} * 2)};
  }
`
export const GridCardStyle = styled.div`
  width: ${Metrics.sizes.medium};
  height: ${Metrics.sizes.medium};
  box-shadow: 0px 8px 8px 3px rgba(0, 0, 0, 0.2), 0 5px 10px 0 rgba(0, 0, 0, 0.19);
`
export const ImageStyle = styled.img`

`
export const ListViewStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 0px 25px 25px
`
export const ListLabelRowStyle = styled.div`
  display: flex;
  margin: 5px;
`
export const ListLabelStyle = styled.div`
  margin: 10px 5px 0 5px;
  color: ${Colors.gray};
  ${props => props.width && css`
    width: ${props.width}
  `};
  font-size: 12px;
  font-weight: bold
`
export const ListCardStyle = styled.div`
  display: flex;
  margin: 10px 5px;
  height: 50px;
  align-items: center
`

export const ListImage = styled.img`
  margin: 0 5px;
  width: 82px;
`

export const ListTitle = styled.div`
  margin: 0 5px;
  width: 100%;
  color: ${Colors.persianGreen};
  font-size: 12px;
  font-weight: bold
`

export const ListText = styled.div`
  margin: 0 5px;
  width: 300px;
  color: ${Colors.gray};
    font-size: 12px;
`