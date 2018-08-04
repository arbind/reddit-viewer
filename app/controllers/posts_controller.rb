require 'net/http'
URL = URI.parse('https://www.reddit.com/r/webdev/')

class PostsController < ApplicationController

  # GET /posts
  def index
    current_member = nil
    @posts = RedditAdapter.list_posts current_member
    render json: @posts
  end

  # GET /posts/1
  def show
    current_member = nil
    @post = RedditAdapter.get_post current_member, params[:id]
    render json: @post
  end

end
