import Content from '../components/content'
import Nav from '../components/nav'

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  getData = async () => {
    const data = await fetch("/api/cards")
      .then((res) => res.json())
      .then(json => {this.setState({items: json})})
      .catch(err => {console.log(`error: ${err}`)})
  };

  componentDidMount() {
    this.getData()
  }

  render() {
    return (
      <div>
        <Nav />
        <Content items={this.state.items} />
        <style jsx>{`
          :global(body) {
            margin: 0;
            font-family: -apple-system,BlinkMacSystemFont,Avenir Next,Avenir,Helvetica,sans-serif;
          }
        `}
        </style>
      </div>
    )
  }
}
