class Member
  include Mongoid::Document
  include Mongoid::Timestamps

  field :token
  field :email

  def self.find_by_email email
    Member.where(email: email.to_s.downcase).first
  end

end
