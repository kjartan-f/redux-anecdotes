
import React from 'react'
import { connect } from 'react-redux'

const Notifications = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  return (
    <>
      {props.notification.map((n) =>
        <div key={n.id} style={style}>{n.msg}</div>
      )}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

export default connect(mapStateToProps)(Notifications)