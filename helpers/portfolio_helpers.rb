module PortfolioHelpers
  def get_job_link_id(is_internal_job_page, job_title, button)
    prefix = (is_internal_job_page) ? "portfolio-job-page-" : "portfolio-index-page-"
    id = prefix + button + "-" + job_title.downcase.gsub(" - ", "-")
    id = id.gsub(" ", "-")
    id = id.gsub(/[^-0-9A-Za-z]/, '')
  end
end
