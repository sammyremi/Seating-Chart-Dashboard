Rails.application.routes.draw do
  namespace :admin do
      resources :users
      resources :zone_ds
      resources :zone_es
      resources :zone_hs
      resources :zone_is
      resources :zone_js
      resources :zone_ks
      resources :zone_ls
      resources :zone_ms
      resources :zone_ns
      resources :zone_qs
      resources :zone_rs
      resources :csv_files
      root to: "users#index"
    end
  
  resources :zone_qs, only: [:index, :show, :edit, :update, :destroy]
  resources :zone_ms, only: [:index, :show, :edit, :update, :destroy]
  resources :zone_ks, only: [:index, :show, :edit, :update, :destroy]
  resources :zone_is, only: [:index, :show, :edit, :update, :destroy]
  resources :zone_es, only: [:index, :show, :edit, :update, :destroy]
  resources :zone_rs, only: [:index, :show, :edit, :update, :destroy]
  resources :zone_ns, only: [:index, :show, :edit, :update, :destroy]
  resources :zone_ls, only: [:index, :show, :edit, :update, :destroy]
  resources :zone_js, only: [:index, :show, :edit, :update, :destroy]
  resources :zone_hs, only: [:index, :show, :edit, :update, :destroy]
  resources :zone_ds, only: [:index, :show, :edit, :update, :destroy]
  root 'pages#home'
  devise_for :users
  devise_scope :user do
    get '/users/sign_out', to: 'devise/sessions#destroy'
  end

  get '/csv_files/new', to: redirect('/admin/csv_files')

  resources :csv_files, only: [:new, :create]



  get '/*path' => 'pages#home'
  # Defines the root path route ("/")
  # root "articles#index"


end
