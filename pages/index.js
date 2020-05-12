import styled from 'styled-components'
import { Colors } from '../styles'
import { IndexStyle } from '../styles/componentStyles'
import Content from '../components/content'
import Nav from '../components/nav'


export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isGrid: false,
      items: []
    }
    this.changeView = this.changeView.bind(this)
  }

  getData = async () => {
    const data = await fetch("/api/cards")
      .then((res) => res.json())
      .then(json => {this.setState({items: json})})
      .catch(err => {console.log(`error: ${err}`)})
  }

  changeView(isGrid) {
    console.log(`click: ${isGrid}`)
    this.setState({isGrid: isGrid})
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    let { isGrid, items } = this.state
    return (
      <IndexStyle>
        <Nav isGrid={isGrid} changeView={this.changeView}/>
        <Content items={items} isGrid={isGrid}/>
        <style jsx>{`
          :global(body) {
            margin: 0;
            font-family: -apple-system,BlinkMacSystemFont,Avenir Next,Avenir,Helvetica,sans-serif;
            background: ${Colors.background};
          }
        `}
        </style>
      </IndexStyle>
    )
  }
}
