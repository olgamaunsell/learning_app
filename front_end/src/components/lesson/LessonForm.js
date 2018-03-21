import React, {Component} from 'react'

class LessonForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      description: "",
      blocker: "",
      resolution: ""
    }
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleBlockerChange = this.handleBlockerChange.bind(this);
    this.handleResolutionChange = this.handleResolutionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleDescriptionChange(event){
    this.setState({description: event.target.value})
  }

  handleBlockerChange(event){
    this.setState({blocker: event.target.value})
  }

  handleResolutionChange(event){
    this.setState({resolution: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    // .trim removes beginning and ending white space
    console.log("this.state.description", this.state.description);
    const description = this.state.description.trim()
    const blocker = this.state.blocker.trim()
    const resolution = this.state.resolution.trim()
    if(!description || !blocker || !resolution) {
      return
    }
    this.props.onLessonSubmit({description: description, blocker: blocker, resolution: resolution})
    // this clears the input values
    this.setState({description: '', blocker: '', resolution: ''})
  }

  render(){
    return (
      <form className="lesson-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Enter the description"
          value={this.state.description}
          onChange={this.handleDescriptionChange}/>
        <input
          type="text"
          placeholder="Enter the blocker or error message.."
          value={this.state.blocker}
          onChange={this.handleBlockerChange}/>
        <input
          type="text"
          placeholder="Enter the resolution.."
          value={this.state.resolution}
          onChange={this.handleResolutionChange}/>
        <input
          type="submit"
          value="Post lesson learned"/>
      </form>
    )
  }
}
export default LessonForm;
