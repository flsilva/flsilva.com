module NavigationHelpers
  def get_active_nav_class(page_regex)
    #(current_resource.url == page) ? "active" : ""
    #(Regexp.new(page.downcase).match(current_resource.url.to_s.downcase) != nil) ? "active" : ""
    (page_regex.match(current_resource.url.to_s.downcase) != nil) ? "active" : ""
  end
end
