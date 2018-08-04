require 'open-uri'

REDIT_HOST = "https://www.reddit.com"
HEADERS = {'User-Agent' => 'reddit_viewer'}

class RedditClient
  def self.posts(topic='webdev')
    url = "#{REDIT_HOST}/r/#{topic}.json"
    response = open(url, {'User-Agent' => 'reddit_viewer'}).read
    json = JSON.parse(response) || {}
    # return json
    data = json["data"] || {}
    children = data["children"] || []
    posts = children.map do |c|
      content = c["data"]
      {
        id: content["id"],
        title: content["title"],
        text: content["selftext"],
        html: content["selftext_html"]
      }
    end
  end
end
