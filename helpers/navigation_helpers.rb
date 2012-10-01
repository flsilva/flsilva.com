module NavigationHelpers
  def get_nav_item_class(page)
    (current_resource.url == page) ? "active" : ""
  end
end
