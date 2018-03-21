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
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount(){
    const url = "http://localhost:3001/api/learned_lessons";

    const request = new XMLHttpRequest();
    request.open('GET', url)
    request.addEventListener('load', () => {
      if (request.status !== 200) return;
      const jsonString = request.responseText;
      const lessonsData = JSON.parse(jsonString);
      this.setState({lessons: lessonsData});
    });
    request.send();
  }


  handleLessonSubmit(newLesson){
    newLesson.id = Date.now()
    // appends the new lesson to the existing list of lessons
    const newLessonList = this.state.lessons.concat([newLesson])
    this.setState({lessons: newLessonList});

    const url = "http://localhost:3001/api/learned_lessons";
    const request = new XMLHttpRequest();
    request.open('POST', url)
    request.setRequestHeader('Content-Type', 'application/json');
    request.addEventListener('load', () => {
      if (request.status !== 200) return;

    });
    const lessonToSave = {learned_lesson: newLesson};
    request.send(JSON.stringify(lessonToSave));

  };


  handleDelete(id){
      // const url = `http://localhost:3001/api/learned_lessons/${id}`;


  }

  render(){
    return (
      <div className="lesson-container">
        <h2>Add a new lesson learned</h2>
        <LessonForm onLessonSubmit={this.handleLessonSubmit}/>
        <LessonList lessons={this.state.lessons} handleDelete={this.handleDelete}/>
      </div>
    )
  }

}
export default LessonContainer;
