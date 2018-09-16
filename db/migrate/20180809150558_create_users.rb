class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name

      ## Invitable
      t.string   :invitation_token
      t.datetime :invitation_created_at
      t.datetime :invitation_accepted_at

      t.timestamps
    end

    add_index :users, :email,                unique: true
    add_index :users, :invitation_token,     unique: true
  end
end
