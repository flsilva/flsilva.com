module PageHelpers
  def get_page_title_suffix
    " | flsilva's Blog"
  end

  def set_page_title
    url = current_page.url.to_s.downcase
    title = current_page.data.title

    if /blog\/.+/.match(url).nil?
      title
    else
      if title.nil? || title == "Blog"
        title = url[url.rindex("blog/") + 5, url.size].chomp("/")
        title = title.split(" ").each { |w| w.capitalize! }.join(" ")
        title = title + " Articles"
        title = title + get_page_title_suffix
      else
        title + get_page_title_suffix
      end
    end
  end

  def set_meta_description
    url = current_page.url.to_s.downcase
    title = current_page.data.title
    description = current_page.data.description

    unless /blog\/.+/.match(url).nil?
      if (title.nil? || title == "Blog")
        tag_name = url[url.rindex("blog/") + 5, url.size].chomp("/").to_s
        file_name = tag_name << "_tag"
        description = data.send(file_name.underscore.to_sym).description
      end
    end

    return "" if description.nil?
    description
  end

  def get_clean_url
    url = "http://flsilva.com" << current_page.url
  end

  def get_shortened_url
    url = get_clean_url

    http = Net::HTTP.new('tinyurl.com', 80)
    response = http.get("/api-create.php?url=#{CGI.escape(url)}")

    return response.read_body if response.code == '200'
    return get_clean_url
  end
end
