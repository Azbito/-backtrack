import './styles.css'
import '../../assets/backgroundimg.png'
export const LayoutComponents = props => {
  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">{props.children}</div>
      </div>
    </div>
  )
}
