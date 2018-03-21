import React from 'react'

const Lesson = (props) => {
  // const dateCreated = new Date(props.dateCreated).toString().substring(0,15);
  return (
    <div className="lesson">
      <h3 className="lesson-desc">
        { props.description }
      </h3>
      <p><strong>Blocker: </strong> {props.blocker}</p>
      <p><strong>Resolution: </strong> {props.resolution}</p>
      {/* <button onClick={() => props.handleDelete()}>Delete</button> */}
    </div>
  )
}

export default Lesson;
