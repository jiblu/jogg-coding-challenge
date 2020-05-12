import styled from 'styled-components'
import { Metrics, Colors } from '../styles'
import { ContentStyle } from '../styles/componentStyles'
import GridView from './gridView'
import ListView from './listView'


const Content = props => {
  let view = props.isGrid ?
    <GridView items={props.items} /> :
    <ListView items={props.items} />
  return (
    <ContentStyle>
      {view}
    </ContentStyle>
  )
}

export default Content
