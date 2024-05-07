import  { Fragment } from 'react'
import PropTypes from 'prop-types'
function DashboardLayout({children}) {
  return (
    <div>
      <Fragment>
        <h1>Dashboard layout</h1>
        {children}
        <h1>end dashboard layout</h1>
      </Fragment>
    </div>
  )
}
DashboardLayout.propTypes = {
    children: PropTypes.any,
}

export default DashboardLayout
