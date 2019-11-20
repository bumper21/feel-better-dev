Rails.application.routes.draw do
  root to: 'home#index'

  get '/about', to: 'about#index'

  
  
  resources :users, only: [:new, :create, :show]
  resource :sessions, only: [:new, :create, :destroy]
  resources :exercises
  resources :journal_entries, only: [:destroy, :index]

  # React API
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :exercises, only: [ :index, :show, :create, :destroy, :show_random ]
      get 'exercise/random', to: 'exercises#show_random'
      resources :journal_entries, only: [ :new, :create, :index, :destroy ]
    end
  end
  
  # post '/session/new', to: 'home#session'
  match '*path', to: 'home#index', via: :all
end
