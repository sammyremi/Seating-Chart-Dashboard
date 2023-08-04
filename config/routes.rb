Rails.application.routes.draw do
  resources :zone_rs
  resources :zone_ns
  resources :zone_ls
  resources :zone_js
  resources :zone_hs
  resources :zone_ds
  root 'pages#home'
  devise_for :users

  get '/*path' => 'pages#home'
 
end
