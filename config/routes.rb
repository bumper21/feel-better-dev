Rails.application.routes.draw do
  root to: 'home#index'
  
  resources :users, only: [:new, :create, :show]
  resource :sessions, only: [:new, :create, :destroy]
  
  # post '/session/new', to: 'home#session'
  match '*path', to: 'home#index', via: :all
end
