import React from 'react'

const Lesson = (props) => {
  const dateCreated = new Date(props.dateCreated).toString().substring(0,15);
  return (
    <div className="lesson">
      <h4 className="lesson-desc">
        { props.description } - {dateCreated}
      </h4>
      <p>Blocker: {props.blocker}</p>
      <p>Resolution: {props.resolution}</p>
    </div>
  )
}

export default Lesson;
