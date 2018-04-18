module UserComponent
  module Interactors
    class UserFriendshipStatus
      include Interactor

      def call
        args = context.args
        user_id = args[:userId]
        sender_id = args[:senderId]
        clause = "friendable_type = 'User' AND friendable_id=? AND friend_id=?"
        friendship =
          HasFriendship::Friendship.where(clause, user_id, sender_id).first

        context.friendship_status =
          friendship.present? ? friendship.status : nil
      end
    end
  end
end
