Rails.application.routes.draw do
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
  end
end
