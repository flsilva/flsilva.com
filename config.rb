###
# Compass
###

# Susy grids in Compass
# First: gem install susy --pre
# require 'susy'

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

require "slim"
require "zurb-foundation"

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy (fake) files
# page "/this-page-has-no-template.html", :proxy => "/template-file.html" do
#   @which_fake_page = "Rendering a fake page with a variable"
# end

###
# Helpers
###

page "/index.html*", :layout => :blog
page "/blog/tag/*", :layout => :blog
page "google496e6b73c411bbe3.html", :directory_index => false
page "sitemap.xml", :layout => false

# Automatic image dimensions on image_tag helper
activate :automatic_image_sizes

# Pretty URLs
activate :directory_indexes

activate :blog do |blog|
  blog.layout = "blog"
  blog.prefix = "blog"
  blog.permalink = ":title/index.html"
  blog.taglink = "tag/:tag/index.html"
  blog.tag_template = "tag.html"
end

activate :deploy do |deploy|
  deploy.method = :rsync
  deploy.user = "flsilva"
  deploy.host = "66.228.57.112"
  deploy.path = "/var/www/flsilva.com"
  deploy.clean = true
end

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'images'

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  activate :gzip
  activate :asset_hash

  # Pretty up Slim output
  set :slim, :pretty => true

  # Enable cache buster
  # activate :cache_buster

  # Use relative URLs
  # activate :relative_assets

  # Compress PNGs after build
  # First: gem install middleman-smusher
  require "middleman-smusher"
  # temporary disabling due to slowness
  # activate :smusher

  # Or use a different image path
  # set :http_path, "/Content/images/"
end
