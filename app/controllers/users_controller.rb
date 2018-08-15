class UsersController < ApplicationController
  skip_before_action :authenticate_user, only: %w[sign_in create verify]
  before_action :set_user, only: [:sign_in]
  before_action :passwords_match?, only: [:create]
  before_action :set_user_by_invitation_token, only: [:verify]

  def sign_in
    if @user.password_valid?(user_params[:password])
      @token = JwtUtil.encode(@user)
      render 'sign_in', status: :ok
    else
      head :unauthorized
    end
  end

  def create
    user = User.create(user_params)
    head :created if user.save!
  end

  def verify
    if @user.verify_account
      head :ok
    else
      head :bad_request
    end
  end

  def sign_out
  end

  private

  def set_user_by_invitation_token
    @user ||= User.find_by_invitation_token(params[:invitation_token])
    head :not_found if @user.nil?
  end

  def set_user
    @user ||= User.find_by_email(params[:email])
    head :not_found if @user.nil?
  end

  def passwords_match?
    head :not_acceptable if params[:password] != params[:password_confirmation]
  end

  def user_params
    params.require(:user).permit(
      :first_name,
      :last_name,
      :email,
      :password,
      :password_confirmation
    )
  end
end
