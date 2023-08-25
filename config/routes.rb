Rails.application.routes.draw do
  
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

  resources :csv_file, only: [:new, :create]

  get '/*path' => 'pages#home'
  # Defines the root path route ("/")
  # root "articles#index"


end
