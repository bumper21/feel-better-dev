class Ability
  include CanCan::Ability

  def initialize(user)
    
    user ||= User.new 

    if user.admin?
    
      can :manage, :all
  
    else
      can :read, :all
    end

    alias_action(:create, :read, :update, :delete, to: :crud)

    can(:crud, JournalEntry) do |journal_entry|
      user == journal_entry.user
    end

  end
end
