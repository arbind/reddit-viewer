require 'net/http'
URL = URI.parse('https://www.reddit.com/r/webdev/')

class PostsController < ApplicationController

  # GET /posts
  def index
    puts "HIIII"
    @posts = RedditAdapter.posts nil
    puts @posts

    # @posts = [ 
    #   {id: :cool_topic_1, upvoted:false, downvoted: false},
    #   {id: :cool_topic_2, upvoted:false, downvoted: false},
    #   {id: :cool_topic_3, upvoted:false, downvoted: false}
    # ]
    render json: @posts
  end

  # GET /posts/1
  def show
    @post = {post_id: :cool_topic_1, upvoted:false, downvoted: false}
    render json: @post
  end

end
