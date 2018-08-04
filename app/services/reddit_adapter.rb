class RedditAdapter
  def self.list_posts(member, topic='webdev')
    raw_posts = RedditClient.list_posts topic
    posts = adapt_posts(member, raw_posts)
    posts
  end

  def self.get_post(member, id, topic='webdev')
    raw_post = RedditClient.get_post id, topic
    post = adapt_post member, raw_post
  end

  def self.adapt_posts(member, raw_posts)
    raw_posts.map {|raw_post| adapt_post member, raw_post}
  end

  def self.adapt_post(member, raw_post)
    member_id = nil
    member_id = member.id unless member.nil?
    vote_params = { member_id: member_id, post_id: raw_post[:id] }
    vote = Vote.where(vote_params).first
    vote ||= Vote.new vote_params
    raw_post[:vote] = vote.to_h
    raw_post
  end

end
