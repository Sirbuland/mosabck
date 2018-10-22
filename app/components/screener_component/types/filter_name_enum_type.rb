ScreenerComponent::Types::FilterNameEnumType = GraphQL::EnumType.define do
  name 'FilterNameEnum'

  items = %w[
    priceBTC
    priceUSD
    circulatingSupply
    activeAddresses
    difficulty
    txVolume
    adjTxVolume
    txCount
    averageTxValue
    medianTxValue
    totalFees
    medianFee
    feesPercentOfValue
    marketCapRank
    paymentCount
    nvt
    circulatingMarketCap
    maxMarketCap
    totalMarketCap
    marketCapBy2030
    marketCapBy2050
    marketCapShare
    marketCapShareBy2050
  ]

  items.each { |item| value item }
end
