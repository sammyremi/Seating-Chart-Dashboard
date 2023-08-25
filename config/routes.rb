Rails.application.routes.draw do
  resources :zone_qs
  resources :zone_ms
  resources :zone_ks
  resources :zone_is
  resources :zone_es
  resources :zone_rs
  resources :zone_ns
  resources :zone_ls
  resources :zone_js
  resources :zone_hs
  resources :zone_ds
  root 'pages#home'
  devise_for :users
  devise_scope :user do
    get '/users/sign_out', to: 'devise/sessions#destroy'
  end

  resources :csv_file, only: [:new, :create]

  get '/*path' => 'pages#home'
  # Defines the root path route ("/")
  # root "articles#index"


end
