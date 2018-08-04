Rails.application.routes.draw do

  scope '/api/v1' do
    resources :posts, only: [:index, :show] do
      resources :votes, only: [:create]
    end
    resources :members, only: [:create]
  end

end
