ActiveAdmin.register Symptom do
  permit_params :name, :symptom_type, illness_ids: []

  form multipart: true do |f|

    f.inputs "Symptom" do
     f.input :name

     f.input 'illnesses' do
      f.input :illnesses, as: :select, multiple: true, collection: Illness.all
     end
    end
    f.submit
  end
end
