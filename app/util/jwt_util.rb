require 'jwt'

class JwtUtil
  def self.encode(obj)
    JWT.encode(user_data(obj), ENV['JWT_SECRET'], 'HS256')
  end

  def self.decode(header_token)
    token = header_token

    payload = JWT.decode(
      token,
      ENV['JWT_SECRET'],
      true,
      algorithm: 'HS256'
    )[0]

    JSON.parse(payload)
  end

  def self.user_data(user)
    {
      id: user[:_id],
      email: user[:email],
      first_name: user[:first_name],
      last_name: user[:last_name],
    }.to_json
  end
end
