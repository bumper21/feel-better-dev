Rails.application.routes.draw do
  get 'journal_entries/new'
  get 'journal_entries/create'
  get 'journal_entries/index'
  get 'journal_entries/edit'
  get 'journal_entries/update'
  get 'journal_entries/destroy'
  root to: 'home#index'
  
  resources :users, only: [:new, :create, :show]
  resource :sessions, only: [:new, :create, :destroy]
  
  # post '/session/new', to: 'home#session'
  match '*path', to: 'home#index', via: :all
end
