import GridCard from './gridCard'

const GridView = props => (
  <div>
    {props.items.map(item => {
      return <GridCard item={item} key={item.id} />
    })}
  </div>
)

export default GridView
