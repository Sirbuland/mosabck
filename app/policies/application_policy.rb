class ApplicationPolicy
  # Tiers of access
  # 0 - owned by user
  # 1 - owned by other users
  # 50 - owned by moderators
  # 75 - owned by admins
  # 100 - owned by super admins
  # ======================
  # Tiers of user status:
  # 0 - simple user
  # 50 - moderator
  # 75 - admin
  # 100 - super admin
  # ======================
  DEFAULT_USER_ACCESS = {
    '0' => true,
    '1' => false,
    '50' => false,
    '75' => false,
    '100' => false
  }.freeze

  DEFAULT_MODERATOR_ACCESS = {
    '0' => true,
    '1' => true,
    '50' => true,
    '75' => false,
    '100' => false
  }.freeze
  DEFAULT_ADMIN_ACCESS = {
    '0' => true,
    '1' => true,
    '50' => true,
    '75' => true,
    '100' => false
  }.freeze
  FULL_ACCESS = {
    '0' => true,
    '1' => true,
    '50' => true,
    '75' => true,
    '100' => true
  }.freeze
  DEFAULT_POLICIES = {
    admin: {
      admin_panel: true,
      users: {
        create: DEFAULT_ADMIN_ACCESS,
        update: DEFAULT_ADMIN_ACCESS,
        delete: DEFAULT_ADMIN_ACCESS,
        read: DEFAULT_ADMIN_ACCESS
      },
      auth_identities: {
        create: DEFAULT_ADMIN_ACCESS,
        update: DEFAULT_ADMIN_ACCESS,
        delete: DEFAULT_ADMIN_ACCESS,
        read: DEFAULT_ADMIN_ACCESS
      },
      posts: {
        create: DEFAULT_ADMIN_ACCESS,
        update: DEFAULT_ADMIN_ACCESS,
        delete: DEFAULT_ADMIN_ACCESS,
        read: DEFAULT_ADMIN_ACCESS
      },
      chat_groups: {
        create: DEFAULT_ADMIN_ACCESS,
        update: DEFAULT_ADMIN_ACCESS,
        delete: DEFAULT_ADMIN_ACCESS,
        read: DEFAULT_ADMIN_ACCESS
      },
      comments: {
        create: DEFAULT_ADMIN_ACCESS,
        update: DEFAULT_ADMIN_ACCESS,
        delete: DEFAULT_ADMIN_ACCESS,
        read: DEFAULT_ADMIN_ACCESS
      }
    },
    user: {
      admin_panel: false,
      users: {
        create: DEFAULT_USER_ACCESS,
        update: DEFAULT_USER_ACCESS,
        delete: DEFAULT_USER_ACCESS,
        read: FULL_ACCESS
      },
      auth_identities: {
        create: DEFAULT_USER_ACCESS,
        update: DEFAULT_USER_ACCESS,
        delete: DEFAULT_USER_ACCESS,
        read: DEFAULT_USER_ACCESS
      },
      posts: {
        create: DEFAULT_USER_ACCESS,
        update: DEFAULT_USER_ACCESS,
        delete: DEFAULT_USER_ACCESS,
        read: FULL_ACCESS
      },
      chat_groups: {
        create: DEFAULT_USER_ACCESS,
        update: DEFAULT_USER_ACCESS,
        delete: DEFAULT_USER_ACCESS,
        read: DEFAULT_USER_ACCESS
      },
      comments: {
        create: DEFAULT_USER_ACCESS,
        update: DEFAULT_USER_ACCESS,
        delete: DEFAULT_USER_ACCESS,
        read: FULL_ACCESS
      }
    },
    moderator: {
      admin_panel: false,
      users: {
        create: DEFAULT_USER_ACCESS,
        update: DEFAULT_MODERATOR_ACCESS,
        delete: DEFAULT_USER_ACCESS,
        read: FULL_ACCESS
      },
      auth_identities: {
        create: DEFAULT_USER_ACCESS,
        update: DEFAULT_MODERATOR_ACCESS,
        delete: DEFAULT_USER_ACCESS,
        read: DEFAULT_USER_ACCESS
      },
      posts: {
        create: DEFAULT_USER_ACCESS,
        update: DEFAULT_MODERATOR_ACCESS,
        delete: DEFAULT_USER_ACCESS,
        read: FULL_ACCESS
      },
      chat_groups: {
        create: DEFAULT_USER_ACCESS,
        update: DEFAULT_USER_ACCESS,
        delete: DEFAULT_USER_ACCESS,
        read: DEFAULT_USER_ACCESS
      },
      comments: {
        create: DEFAULT_USER_ACCESS,
        update: DEFAULT_MODERATOR_ACCESS,
        delete: DEFAULT_USER_ACCESS,
        read: FULL_ACCESS
      }
    },
    superadmin: {
      admin_panel: true,
      users: {
        create: FULL_ACCESS,
        update: FULL_ACCESS,
        delete: FULL_ACCESS,
        read: FULL_ACCESS
      },
      auth_identities: {
        create: FULL_ACCESS,
        update: FULL_ACCESS,
        delete: FULL_ACCESS,
        read: FULL_ACCESS
      },
      posts: {
        create: FULL_ACCESS,
        update: FULL_ACCESS,
        delete: FULL_ACCESS,
        read: FULL_ACCESS
      },
      chat_groups: {
        create: FULL_ACCESS,
        update: FULL_ACCESS,
        delete: FULL_ACCESS,
        read: FULL_ACCESS
      },
      comments: {
        create: FULL_ACCESS,
        update: FULL_ACCESS,
        delete: FULL_ACCESS,
        read: FULL_ACCESS
      }
    }
  }.freeze

  attr_reader :user, :record

  def initialize(user, record)
    @user = user
    @record = record
  end

  def index?
    false
  end

  def show?
    scope.where(id: record.id).exists?
  end

  def create?
    false
  end

  def new?
    create?
  end

  def update?
    false
  end

  def edit?
    update?
  end

  def destroy?
    false
  end

  def scope
    Pundit.policy_scope!(user, record.class)
  end

  class Scope
    attr_reader :user, :scope

    def initialize(user, scope)
      @user = user
      @scope = scope
    end

    def resolve
      scope
    end
  end
end
