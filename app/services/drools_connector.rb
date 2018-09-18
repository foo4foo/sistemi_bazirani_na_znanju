class DroolsConnector
  def self.match_illnesses(symptoms)
    JSON.parse(HTTParty.post("http://localhost:8080/match_illnesses",
      body: {
        symptoms: symptoms
      }.to_json,
      headers: {
        'Content-Type': 'application/json'
      }
    ).body)
  end
end
