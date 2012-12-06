module BlogHelpers
  def get_tag_link(tag, font_size = nil)
    link = "<a href='#{tag_path(tag)}' id='tag-cloud-#{tag}'"
    link = link + " style='font-size:#{font_size}px'" unless font_size.nil?
    link = link + ">"
    link = link + tag
    link = link + "</a>"
  end

  def get_tag_size_for_cloud(tag, percent)
    min_font_size = 14
    max_font_size = 24

    size = ((percent / 100) * (max_font_size - min_font_size)) + min_font_size
    size.round
  end

  def get_tag_cloud
    tags = []
    tag_quantities = []
    tag_cloud = {}

    blog.articles.each do |article|
      article.tags.each do |tag|
        tag_cloud.store(tag, 0) unless tag_cloud.has_key?(tag)
        tag_cloud.store(tag, tag_cloud[tag] + 1)

        tags.push(tag) unless tags.include?(tag)
      end
    end

    tag_cloud.each_pair do |tag, value|
      tag_quantities.push(value)
    end

    min_value = tag_quantities.min
    max_value = tag_quantities.max

    tag_links = ""
    tags.sort!

    tags.each do |tag|
      begin
        percent = (tag_cloud.fetch(tag) - min_value) / (max_value - min_value) * 100
      rescue
        percent = 50
      end

      tag_size = get_tag_size_for_cloud(tag, percent)
      tag_links = tag_links + get_tag_link(tag, tag_size) + "  "
    end

    tag_links
  end

  def get_post_link_id(is_internal_post_page, post_title, button)
    prefix = (is_internal_post_page) ? "blog-post-page-" : "blog-index-page-"
    id = prefix + button + "-" + post_title.downcase.gsub(" - ", "-")
    id = id.gsub(" ", "-")
    id = id.gsub(/[^-0-9A-Za-z]/, '')
  end
end
