module PageHelpers
  def set_page_title
    url = current_page.url.to_s.downcase
    title_prefix = "Flavio Silva - "
    title_prefix += "Blog: " if /blog\/.+/.match(url)
    if /blog\/tag\/.+/.match(url).nil?
      title_prefix + current_page.data.title
    else
      title_prefix + url[url.rindex("tag/") + 4, url.size].chomp("/")
    end
  end
end
