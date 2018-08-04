require 'open-uri'

REDIT_HOST = "https://www.reddit.com"
HEADERS = {'User-Agent' => 'reddit_viewer'}

class RedditClient
  def self.list_posts(topic='webdev')
    url = "#{REDIT_HOST}/r/#{topic}.json"
    json = get url
    # return json
    data = json["data"] || {}
    children = data["children"] || []
    posts = children.map do |c|
      content = c["data"]
      {
        id: content["id"],
        title: content["title"],
        text: content["selftext"],
        html: content["selftext_html"],
        slug: content["permalink"]
      }
    end
  end

  def self.get_post(id, topic='webdev')
    url = "#{REDIT_HOST}/r/#{topic}/comments/#{id}.json"
    json = get url
    return json
  end


  def self.get url
    response = open(url, {'User-Agent' => 'reddit_viewer'}).read
    json = JSON.parse(response) || {}
  end
end
