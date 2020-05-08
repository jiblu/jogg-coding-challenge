import ListCard from './listCard'

const ListView = props => (
  <div>
    {props.items.map(item => {
      return <ListCard item={item} key={item.id} />
    })}
  </div>
)

export default ListView
