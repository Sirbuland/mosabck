require 'spec_helper'

RSpec.describe CheckJwtRequired, type: :interactor do
  describe '.call' do
    context 'when JWT is required and query is provided, blank referrer' do
      before do
        @context = CheckJwtRequired.call(query: all_users_query, referrer: '')
      end

      it 'succeeds' do
        expect(@context).to be_a_success
      end

      it 'stores true inside context.jwt_required' do
        expect(@context.jwt_required).to be_truthy
      end
    end

    context 'when no referrer is provided' do
      before do
        @context = CheckJwtRequired.call(query: all_users_query)
      end

      it 'fails' do
        expect(@context).to be_a_failure
      end

      it 'returns No referrer provided as message' do
        expect(@context.message).to eq 'No referrer provided'
      end
    end

    context 'when no query is provided' do
      before do
        @context = CheckJwtRequired.call(referrer: '')
      end

      it 'fails' do
        expect(@context).to be_a_failure
      end

      it 'returns No query provided as message' do
        expect(@context.message).to eq 'No query provided'
      end
    end

    context 'when JWT is not required because of referrer' do
      before do
        @context = CheckJwtRequired.call(query: all_users_query, referrer: %w[graphiql voyager].sample)
      end

      it 'succeeds' do
        expect(@context).to be_a_success
      end

      it 'stores false inside context.jwt_required' do
        expect(@context.jwt_required).to be_falsey
      end
    end

    context 'when JWT is not required because of query' do
      before do
        @context = CheckJwtRequired.call(query: sign_in_mutation_classic(
          'someone@mail.com', 'abc1234', 'AAbB-CFD343-2342223'
        ), referrer: '')
      end

      it 'succeeds' do
        expect(@context).to be_a_success
      end

      it 'stores false inside context.jwt_required' do
        expect(@context.jwt_required).to be_falsey
      end
    end
  end
end
