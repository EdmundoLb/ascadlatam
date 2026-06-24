const content = {
  es: [
    'Argentina', 'Bolivia', 'Brasil', 'Chile', 'Colombia', 'Costa Rica', 'Cuba',
    'Ecuador', 'El Salvador', 'Guatemala', 'Honduras', 'México', 'Nicaragua',
    'Panamá', 'Paraguay', 'Perú', 'República Dominicana', 'Uruguay', 'Venezuela', 'Otro'
  ],
  pt: [
    'Argentina', 'Bolívia', 'Brasil', 'Chile', 'Colômbia', 'Costa Rica', 'Cuba',
    'Equador', 'El Salvador', 'Guatemala', 'Honduras', 'México', 'Nicarágua',
    'Panamá', 'Paraguai', 'Peru', 'República Dominicana', 'Uruguai', 'Venezuela', 'Outro'
  ]
}

export function getCountries(locale) {
  return content[locale] || content.es
}
