export type BorderType = {
  commonName: string
  officialName: string
  countryCode: string
  region: string
  borders: [
    {
      commonName: string
      officialName: string
      countryCode: string
      region: string
      borders: null
    }
  ]
}

export type CountryPopulationDataType = {
  error: string
  msg: string
  data: [
    {
      country: string
      code: string
      iso3: string
      populationCounts: [
        {
          year: number
          value: number
        }
      ]
    }
  ]
}

export type CountryPopulationType = {
  year: number
  value: number
}

export type FlagData = {
  error: string
  msg: string
  data: [
    {
      name: string
      flag: string
      iso2: string
      iso3: string
    }
  ]
}
