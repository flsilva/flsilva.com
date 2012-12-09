module PageHelpers
  def set_page_title
    url = current_page.url.to_s.downcase
    if /blog\/tag\/.+/.match(url).nil?
      current_page.data.title
    else
      title = url[url.rindex("tag/") + 4, url.size].chomp("/")
      title = title.split(" ").each { |w| w.capitalize! }.join(" ")
      title << " Articles | flsilva's Blog"
    end
  end

  def set_meta_description
    url = current_page.url.to_s.downcase
    description = current_page.data.description

    unless /blog\/tag\/.+/.match(url).nil?
      tag_name = url[url.rindex("tag/") + 4, url.size].chomp("/").to_s
      file_name = tag_name << "_tag"
      description = data.send(file_name.to_sym).description
    end

    return "" if description.nil?
    description
  end
end
