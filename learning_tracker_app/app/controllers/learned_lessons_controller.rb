class LearnedLessonsController < ApplicationController


  def lesson_params
    params.require(:learned_lesson).permit([:description, :blocker, :resolution])
  end

  def index
    # Get all lessons in descending order of creation
    @learned_lessons = LearnedLesson.order("created_at DESC")
    render :json => @learned_lessons
    # if I add a method to learned_lesson model - use & update line below replacing
    # ':method' with the method name. same applies to show route aswell.
    # render :json => @learned_lessons.as_json(methods: :method)
  end

  def show
    @learned_lesson = LearnedLesson.find(params[:id])
    render :json => @learned_lesson
  end

  def create
    learned_lesson = LearnedLesson.create(lesson_params)
    render :json => learned_lesson
  end

  def update
    learned_lesson = LearnedLesson.find(params[:id])

    if learned_lesson.update_attributes(lesson_params)
      render :json => learned_lesson
    else
      render :json => {status: :update_failed}
    end
  end

  def destroy
    learned_lesson = LearnedLesson.find(params[:id])

    if learned_lesson.destroy!
      render :json => { status: :success  }
    else
      render :json => { status: :delete_failed }
    end
  end
end
