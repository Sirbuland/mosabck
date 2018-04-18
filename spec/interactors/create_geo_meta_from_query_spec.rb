require 'rails_helper'

RSpec.describe GeoComponent::Interactors::CreateGeoMetaFromQuery, type: :interactor do
  describe '.call' do
    before do
      @location = build(:location)
    end

    subject { GeoComponent::Interactors::CreateGeoMetaFromQuery.call(location: @location) }

    it 'should create location if it`s present in context' do
      expect { subject }.to change { Location.count }.by(1)
    end

    it 'should raise error if location is invalid' do
      @location = Location.new
      expect(subject.failure?).to be_truthy
    end

    it 'should not create anything if location is not present' do
      @location = nil
      expect { subject }.to_not change { Location.count }
    end
  end
end
