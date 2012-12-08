module PageHelpers
  def set_page_title
    url = current_page.url.to_s.downcase
    title = current_page.data.title
    if /blog\/tag\/.+/.match(url).nil?
      title
    else
      title = url[url.rindex("tag/") + 4, url.size].chomp("/")
      title = title.split(" ").each { |w| w.capitalize! }.join(" ")
      title << " Articles | flsilva's Blog"
    end
  end
end
