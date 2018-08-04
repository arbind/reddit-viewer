class Vote
  include Mongoid::Document
  include Mongoid::Timestamps

  field :post_id
  field :up_voted, type: :boolean, default: false
  field :down_voted, type: :boolean, default: false

  belongs_to :member, optional: true

  def to_h
    {
      post_id: post_id,
      up_voted: up_voted,
      down_voted: down_voted
    }
  end
end
