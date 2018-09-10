ActiveAdmin.register Patient do
  permit_params :email, :first_name, :last_name, :birth_date, :height, :weight
end
