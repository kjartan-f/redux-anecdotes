import React from 'react'
import { changeFilter } from '../reducers/filterReducer'
import { connect } from 'react-redux'


const Filter = (props) => {

  return (
    <>
      <form>
      Filter <input onChange={(e) => props.changeFilter(e.target.value)} />
      </form>
    </>
  )
}


export default connect(null, { changeFilter })(Filter)