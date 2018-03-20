Rails.application.routes.draw do

  scope path: "api" do
    resources :learned_lessons
  end

end
