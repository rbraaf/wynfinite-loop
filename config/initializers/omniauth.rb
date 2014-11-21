OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, '748557115214826', 'c60b715ca16a5a731f4110380fa25ebd'
end