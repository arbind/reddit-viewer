class RedditAdapter
  def self.list_posts(member, topic='webdev')
    posts = RedditClient.list_posts topic
  end

  def self.get_post(member, id, topic='webdev')
    posts = RedditClient.get_post id, topic
  end

end
