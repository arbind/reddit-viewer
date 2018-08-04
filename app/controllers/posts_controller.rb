class PostsController < ApplicationController

  # GET /posts
  def index
    @posts = [ 
      {id: :cool_topic_1, upvoted:false, downvoted: false},
      {id: :cool_topic_2, upvoted:false, downvoted: false},
      {id: :cool_topic_3, upvoted:false, downvoted: false}
    ]
    render json: @posts
  end

  # GET /posts/1
  def show
    @post = {post_id: :cool_topic_1, upvoted:false, downvoted: false}
    render json: @post
  end

end
