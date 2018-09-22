ActiveAdmin.register Illness do
  permit_params :name, :description, :group, symptom_ids: []

  form multipart: true do |f|

    f.inputs "Illness" do
     f.input :name
     f.input :description

     f.input 'symptoms' do
      f.input :symptoms, as: :select, multiple: true, collection: Symptom.all
     end
    end
    f.submit
  end
end
