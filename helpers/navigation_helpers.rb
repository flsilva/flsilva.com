module NavigationHelpers
  def get_active_nav_class(page)
    (current_resource.url == page) ? "active" : ""
  end
end
