Rails.application.routes.draw do
  devise_for :users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope 'api' do
    resources :users do
      collection do
        get 'verify'
        scope 'session' do
          post 'sign_in'
          delete 'sign_out'
        end
      end
    end

    resources :patients, only: [:create] do
      collection do
        get 'search'
      end
    end

    resources :illnesses do
      collection do
        get 'search'
        post 'match'
      end
      member do
        resources :medicines
        resources :symptoms
      end
    end

    resources :symptoms, only: [:create, :destroy, :index] do
      get 'search', on: :collection
    end

    resources :allergens, only: [:index]

    resources :medicines, only: [] do
      collection do
        post 'match_against_allergens'
      end
    end

    resources :patient_files

    resources :diagnoses, only: [:create]
  end
end
