DashboardComponent::Mutations::DeleteDashboard =
  GraphQL::Relay::Mutation.define do
    name 'deleteDashboard'

    return_field :dashboard, DashboardComponent::Types::DashboardType

    input_field :id, !types.ID

    resolve DashboardComponent::Resolvers::DeleteDashboardResolver.new
  end
