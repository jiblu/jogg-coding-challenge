import { Metrics } from '../styles'
import GridIcon from '../svgs/grid-view.svg'
import ListIcon from '../svgs/list-view.svg'

const Nav = props => (
  <nav onClick={() => props.changeView(!props.isGrid)}>
    <ul>
      <li>
        My Jogg
      </li>
    </ul>
    <ul>
      <li>
        <GridIcon width={Metrics.iconWidth} height={Metrics.iconHeight} />
      </li>
      <li>
        <ListIcon width={Metrics.iconWidth} height={Metrics.iconHeight} />
      </li>
    </ul>
    <style jsx>{`
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
    `}
    </style>
  </nav>
)

export default Nav
