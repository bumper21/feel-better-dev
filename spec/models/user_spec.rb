require 'rails_helper'

RSpec.describe User, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"

  describe ".full_name" do
    it "returns the first and last name concatenated" do
      u = User.new({first_name: "John", last_name: "Smith"})
      expect(u.full_name).to eq("John Smith")
    end
  end
end
