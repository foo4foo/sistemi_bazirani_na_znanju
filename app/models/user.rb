require 'bcrypt'

class User < ApplicationRecord
  include BCrypt

  devise :database_authenticatable,
         :recoverable, :rememberable, :validatable

  has_and_belongs_to_many :roles

  validates :first_name, presence: true
  validates :email, uniqueness: true, presence: true

  # before_create :hash_password, :set_invitation_token
  after_create :send_invitation_mail

  def password_valid?(password)
    Password.new(self.encrypted_password) == password
  end

  def verify_account
    if invitation_accepted_at.nil?
      if invitation_created_at + 30.minutes >= DateTime.now
        self.invitation_accepted_at = DateTime.now
        return save!
      end
    end

    false
  end

  def admin?
    self.roles.any? { |role| role.name == "admin" }
  end

  private

  def hash_password
    self.encrypted_password = Password.create(password)
  end

  def set_invitation_token
    self.invitation_token = Password.create(email)
    self.invitation_created_at = DateTime.now
  end

  def send_invitation_mail
    InviteMailer.with(user: self).invitation_email.deliver_later
  end
end
