Rails.application.routes.draw do
  resources :zone_rs
  resources :zone_ns
  resources :zone_ls
  resources :zone_js
  resources :zone_hs
  resources :zone_ds
  devise_for :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
