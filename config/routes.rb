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
  get '/users/sign_up', to: redirect('/users/sign_in')
  get '/zone_ds', to: redirect('/zones/zone_ds')
  get '/zone_es', to: redirect('/zones/zone_es')
  get '/zone_hs', to: redirect('/zones/zone_hs')
  get '/zone_is', to: redirect('/zones/zone_is')
  get '/zone_js', to: redirect('/zones/zone_js')
  get '/zone_ks', to: redirect('/zones/zone_ks')
  get '/zone_ls', to: redirect('/zones/zone_ls')
  get '/zone_ms', to: redirect('/zones/zone_ms')
  get '/zone_ns', to: redirect('/zones/zone_ns')
  get '/zone_qs', to: redirect('/zones/zone_qs')
  get '/zone_rs', to: redirect('/zones/zone_rs')
  get '/zone_ds/:id/edit', to: redirect('/edit/zone_ds/:id')
  get '/zone_es/:id/edit', to: redirect('/edit/zone_es/:id')
  get '/zone_hs/:id/edit', to: redirect('/edit/zone_hs/:id')
  get '/zone_is/:id/edit', to: redirect('/edit/zone_is/:id')
  get '/zone_js/:id/edit', to: redirect('/edit/zone_js/:id')
  get '/zone_ks/:id/edit', to: redirect('/edit/zone_ks/:id')
  get '/zone_ls/:id/edit', to: redirect('/edit/zone_ls/:id')
  get '/zone_ms/:id/edit', to: redirect('/edit/zone_ms/:id')
  get '/zone_ns/:id/edit', to: redirect('/edit/zone_ns/:id')
  get '/zone_qs/:id/edit', to: redirect('/edit/zone_qs/:id')
  get '/zone_rs/:id/edit', to: redirect('/edit/zone_rs/:id')
  get '/zone_ds/:id', to: redirect('/edit/zone_ds/:id')
  get '/zone_es/:id', to: redirect('/edit/zone_es/:id')
  get '/zone_hs/:id', to: redirect('/edit/zone_hs/:id')
  get '/zone_is/:id', to: redirect('/edit/zone_is/:id')
  get '/zone_js/:id', to: redirect('/edit/zone_js/:id')
  get '/zone_ks/:id', to: redirect('/edit/zone_ks/:id')
  get '/zone_ls/:id', to: redirect('/edit/zone_ls/:id')
  get '/zone_ms/:id', to: redirect('/edit/zone_ms/:id')
  get '/zone_ns/:id', to: redirect('/edit/zone_ns/:id')
  get '/zone_qs/:id', to: redirect('/edit/zone_qs/:id')
  get '/zone_rs/:id', to: redirect('/edit/zone_rs/:id')
  
  resources :csv_files, only: [:new, :create]



  get '/*path' => 'pages#home'
  # Defines the root path route ("/")
  # root "articles#index"


end
