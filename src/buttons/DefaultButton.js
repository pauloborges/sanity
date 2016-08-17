import React, {PropTypes} from 'react'
import Ink from 'react-ink'
import styles from 'style:@sanity/components/buttons/default'
import Spinner from 'component:@sanity/components/loading/spinner'

export default class DefaultButton extends React.Component {
  static propTypes = {
    kind: PropTypes.oneOf(['add', 'danger', 'colored']),
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
    inverted: PropTypes.bool,
    icon: PropTypes.node,
    loading: PropTypes.bool,
    ripple: PropTypes.bool,
    colored: PropTypes.bool,
    className: PropTypes.string,
    disabled: PropTypes.bool
  }

  static defaultProps = {
    ripple: true,
    icon: false,
    onClick() {}
  }

  constructor(...args) {
    super(...args)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    event.stopPropagation()
    event.preventDefault()
    this.props.onClick()
  }

  render() {

    const {kind, ripple, inverted, colored, icon, loading, className, ...rest} = this.props

    const Icon = icon

    if (!styles[kind] && kind) {
      console.error(`There is no ${kind} button`) // eslint-disable-line no-console
    }

    const style = `${className} ${styles[kind] || (inverted && styles.inverted) || styles.root} ${colored && styles.colored} ${Icon && styles.hasIcon}` // eslint-disable-line max-len

    return (
      <button
        {...rest}
        className={style}
        type="button"
        onClick={this.handleClick}
      >
        {
          loading && <Spinner />
        }
        {
          Icon && <span className={styles.iconContainer}><Icon className={styles.icon} /></span>
        }
        <span className={styles.content}>
          {this.props.children}
        </span>

        {
          ripple && <Ink duration={200} opacity={0.10} radius={200} />
        }
      </button>
    )
  }
}
