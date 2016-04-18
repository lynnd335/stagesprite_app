json.array!(@users) do |user|
  json.extract! user, :id, :name, :photo, :about
  json.url user_url(user, format: :json)
end
