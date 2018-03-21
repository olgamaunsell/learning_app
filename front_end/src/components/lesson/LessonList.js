import React from 'react';
import Lesson from './Lesson.js'

const LessonList = (props) => {
  const lessonNodes = props.lessons.map(lesson => {
    return (
      <Lesson
        key={lesson.id}
        description={lesson.description}
        dateCreated={lesson.created_at}
        blocker={lesson.blocker}
        resolution={lesson.resolution}
      />
    );
  });

  return (
    <div className="lesson-list">
      {lessonNodes}
    </div>
  )

}

export default LessonList;
