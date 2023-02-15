export type Info = {
  title: string
  description: string
}

export type Languages = {
  name: string
}

export type Currency = {
  code: string
  name: string
}

export type Country = {
  capital: string
  flags: {
    png: string
    svg: string
  }
  independent: boolean
  name: string
  population: number
  region: string
}

export type CountryInfo = {
  alpha2Code: string
  alpha3Code: string
  altSpellings: string[]
  area: number
  borders: string[]
  callingCodes: string[]
  capital: string
  cioc: string
  currencies: {
    code: string
    name: string
    symbol: string
  }[]
  demonym: string
  flag: string
  flags: {
    svg: string
    png: string
  }
  gini: number
  independent: true
  languages: {
    iso639_1: string
    iso639_2: string
    name: string
    nativeName: string
  }[]
  latlng: number[]
  name: string
  nativeName: string
  numericCode: string
  population: number
  region: string
  subregion: string
  timezones: string[]
  topLevelDomain: string[]
  translations: {
    br: string
    de: string
    es: string
    fa: string
    fr: string
    hr: string
    hu: string
    it: string
    ja: string
    nl: string
    pt: string
  }
}
