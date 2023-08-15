Rails.application.routes.draw do
  resources :zones do 
    collection { post :import }
    # resources :zone_qs
    # resources :zone_ms
    # resources :zone_ks
    # resources :zone_is
    # resources :zone_es
    # resources :zone_rs
    # resources :zone_ns
    # resources :zone_ls
    # resources :zone_js
    # resources :zone_hs
    # resources :zone_ds
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

  get '/*path' => 'pages#home'
  # Defines the root path route ("/")
  # root "articles#index"

  devise_scope :user do
    get '/users/sign_out', to: 'devise/sessions#destroy'
  end
end
