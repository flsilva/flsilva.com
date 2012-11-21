module PageHelpers
  def set_page_title
    url = current_page.url.to_s.downcase
    title_prefix = "Flavio Silva - "
    title_prefix += "Blog: " if /blog\/.+/.match(url)
    if /blog\/tag\/.+/.match(url)
      title_prefix + url[url.rindex("/") + 1, url.size]
    else
      title_prefix + current_page.data.title
    end
  end
end
