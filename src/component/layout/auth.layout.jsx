import { Fragment } from "react"
import PropTypes from 'prop-types'
function AuthLayout({children}) {
  return (
    <div>
      <Fragment>
        <h1>Auth Layout</h1>
        {children}
        <h1>End AuthLayout</h1>
      </Fragment>
    </div>
  )
}
AuthLayout.propTypes = {
  children: PropTypes.any,
}
export default AuthLayout
