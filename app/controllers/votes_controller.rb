class VotesController < ApplicationController
  before_action :set_vote

  # POST /votes
  def create
    puts params.inspect
    @vote.update vote_params
    render json: @vote
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_vote
      member_id = nil
      post_id = params[:post_id]
      @vote = Vote.where(member_id: member_id, post_id: post_id).first_or_create
      # @member = Member.find(member_token)
      # @vote = @member.votes.find_by post_id: params[:post_id]
    end

    def member_token
      params[member_token]
      # +++ get this from headers
    end

    def vote_params
      params.require(:vote).permit(:member_id, :post_id, :up_voted, :down_voted)
    end

end
