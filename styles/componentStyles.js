import styled from 'styled-components'
import { Metrics, Colors } from './index'

export const IndexStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center
`

export const NavStyle = styled.div`
  display: flex;
  justify-content: space-between;
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
    // width: calc(${Metrics.sizes.medium} * 2 + ${Metrics.sizes.xsmall} * 2) + 40px};
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
    grid-gap: ${Metrics.sizes.xxsmall};
    grid-row-gap: ${Metrics.sizes.small};
    margin: ${Metrics.sizes.xsmall};
    max-width: calc(${Metrics.sizes.medium} * 2 + ${Metrics.sizes.xsmall} * 2)};
  }
  @media (max-width: 670px) { 
    grid-template-columns: 1fr;
    grid-gap: ${Metrics.sizes.xxsmall};
    grid-row-gap: ${Metrics.sizes.small};
    margin: ${Metrics.sizes.xsmall};
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