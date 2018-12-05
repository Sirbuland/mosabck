require 'sidekiq/web'

Rails.application.routes.draw do
  root 'welcome#index'

  mount Sidekiq::Web => '/sidekiq'

  namespace :admin do
    resources :users
    resources :authors
    resources :approved_users
    resources :asset_mappings
    resources :crypto_assets
    resources :dashboards
    resources :events
    resources :exchanges
    resources :keywords
    resources :merchants
    resources :panels
    resources :people
    resources :researches
    resources :resources
    resources :vars
    resources :videos
    resources :wallets

    get 'feedbacks/download', to: 'feedbacks#download'
    resources :feedbacks, path: 'feedback', only: %i[index show destroy]

    root to: 'users#index'
    get 'session/login'
    post 'session/login'
    get 'session/logout'
  end

  resources :user, only: %i[confirm_email] do
    member do
      get :confirm_email
      post :sms_verify
    end
  end

  mount GraphiQL::Rails::Engine, at: '/graphiql', graphql_path: '/graphql'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # post '/graphql', to: 'graphql#execute'
  post 'graphql' => 'graphql#execute'
  get 'voyager' => 'voyager#index'
end
