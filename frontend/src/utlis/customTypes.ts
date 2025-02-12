export type CountryListType = {
  status: string
  data: [
    {
      countryCode: string
      name: string
    }
  ]
}

export type CountryDetailsType = {
  status: string
  data: {
    country: string
    countryCode: string
    region: string
    flag: string
    borders: [
      {
        commonName: string
        officialName: string
        countryCode: string
        region: string
        borders: null
      }
    ]
    population: [
      {
        year: number
        value: number
      }
    ]
  }
}

export type populationChartProps = [
  {
    year: number
    value: number
  }
]
