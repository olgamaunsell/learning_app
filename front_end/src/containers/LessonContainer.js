import React from 'react';
import LessonList from '../components/lesson/LessonList';
import LessonForm from '../components/lesson/LessonForm';
// import TitleBar from '../components/lesson/TitleBar';

class LessonContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      // lessons: []
      lessons: [
        {
          "id": 1,
          "description": "Ruby on rails - create app",
          "blocker": "New model not being created",
          "resolution": "Don't name the app the same as directory",
          "created_at": "2018-03-20"
        }
      ]
    }
    console.log("this.state.lessons", this.state.lessons);
  }
  // this.handleLessonSubmit = this.handleLessonSubmit.bind(this)

  // componentDidMount(){
  //   const url = "http://localhost:3000/api/learned_lessons";
  //
  //   const request = new XMLHttpRequest();
  //   request.open('GET', url)
  //   request.addEventListener('load', () => {
  //     if (request.status !== 200) return;
  //     const jsonString = request.responseText;
  //     console.log(jsonString);
  //     const lessonsData = JSON.parse(jsonString);
  //     this.setState({lessons: lessonsData});
  //   });
  //   request.send();
  // }
  // handleLessonSubmit(newLesson){
  //   // newLesson.id = Date.now()
  //   // appends the new lesson to the existing list of lessons
  //   const newLessonList = this.state.data.concat([newLesson])
  //   this.setState({data: newLessonList})
  // }


  render(){
    return (
      <div className="lesson-container">
        <h2>Add a new lesson learned</h2>
        <LessonList lessons={this.state.lessons} />
      </div>
    )
  }

}
export default LessonContainer
