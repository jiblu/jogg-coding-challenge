import { Metrics } from '../styles'
import GridIcon from '../svgs/grid-view.svg'
import ListIcon from '../svgs/list-view.svg'

const Nav = props => (
  <nav>
    <ul>
      <li>
        <div>My Jogg</div>
      </li>
    </ul>
    <ul>
      <li>
        <GridIcon
          width={Metrics.iconWidth}
          height={Metrics.iconHeight}
          onClick={() => props.changeView(true)}
        />
      </li>
      <li>
        <ListIcon
          width={Metrics.iconWidth}
          height={Metrics.iconHeight}
          onClick={() => props.changeView(false)}
        />
      </li>
    </ul>
    <style jsx>{`
      nav {
        display: flex;
        justify-content: space-between;
      }
      ul {
        display: flex;
      }
      nav > ul {
        padding: 0px 0px;
      }
      li {
        display: flex;
        padding: 0px ${Metrics.pagePadding};
      }
    `}
    </style>
  </nav>
)

export default Nav
