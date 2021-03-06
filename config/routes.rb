require 'sidekiq/web'

Rails.application.routes.draw do
  root 'welcome#index'

  mount Sidekiq::Web => '/sidekiq'

  namespace :admin do
    resources :users
    resources :address_trackers
    resources :authors
    resources :approved_users
    resources :crypto_assets
    resources :dashboards
    resources :events
    resources :exchanges
    resources :attachments
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

  get 'auth/oauth2/callback' => 'auth0#callback'
  get 'auth/failure' => 'auth0#failure'

  mount GraphiQL::Rails::Engine, at: '/graphiql', graphql_path: '/graphql' unless Rails.env.production?
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # post '/graphql', to: 'graphql#execute'
  post 'graphql' => 'graphql#execute'
  get 'voyager' => 'voyager#index'
end
