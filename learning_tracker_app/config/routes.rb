Rails.application.routes.draw do

  # get( { 'learned_lessons' => 'learned_lessons#index' } )
  scope path: "api" do
    resources :learned_lessons
  end

end
