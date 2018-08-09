class InviteMailer < ApplicationMailer
  default from: 'notifications@example.com'

  def invitation_email
    @user = params[:user]
    @url = "localhost:3000/api/users/verify?invitation_token=#{@user.invitation_token}"
    mail(to: @user.email, subject: 'Welcome to My Awesome Site')
  end
end
