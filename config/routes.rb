require 'sidekiq/web'

Rails.application.routes.draw do
  root 'welcome#index'

  mount Sidekiq::Web => '/sidekiq'

  namespace :admin do
    resources :app_settings
    resources :auth_identities
    namespace :auth_identities do
      resources :classic_identities
      resources :facebook_identities
    end
    resources :locations
    resources :users
    resources :user_devices

    root to: 'app_settings#index'
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
