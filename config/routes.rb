Rails.application.routes.draw do

  scope '/api/v1' do
    resources :posts, only: [:index, :show]
    resources :members, only: [:create]
  end

end
