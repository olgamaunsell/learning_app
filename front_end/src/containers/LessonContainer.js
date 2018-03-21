import React from 'react';
import LessonList from '../components/lesson/LessonList';
import LessonForm from '../components/lesson/LessonForm';
// import TitleBar from '../components/lesson/TitleBar';

class LessonContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      lessons: []
    }
    this.handleLessonSubmit = this.handleLessonSubmit.bind(this)
    // console.log("this.state.lessons", this.state.lessons);
  }

  componentDidMount(){
    const url = "http://localhost:3001/api/learned_lessons";

    const request = new XMLHttpRequest();
    request.open('GET', url)
    request.addEventListener('load', () => {
      if (request.status !== 200) return;
      const jsonString = request.responseText;
      // console.log("jsonString", jsonString);
      const lessonsData = JSON.parse(jsonString);
      this.setState({lessons: lessonsData});
    });
    request.send();
  }

  handleLessonSubmit(newLesson){
    console.log("date now", Date.now);
    newLesson.id = Date.now()
    // appends the new lesson to the existing list of lessons
    const newLessonList = this.state.lessons.concat([newLesson])
    this.setState({lessons: newLessonList})
  }

  render(){
    return (
      <div className="lesson-container">
        <h2>Add a new lesson learned</h2>
        <LessonForm onLessonSubmit={this.handleLessonSubmit}/>
        <LessonList lessons={this.state.lessons} />
      </div>
    )
  }

}
export default LessonContainer;
