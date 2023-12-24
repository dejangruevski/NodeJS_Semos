const euroToMkd = iznos => iznos * 61.50 + ' MKD'
const euroToUsd = iznos => iznos * 1.10 + ' USD'
const mkdToUsd = iznos => iznos / 56 + ' USD'
const mkdToEuro = iznos => iznos / 61.50 + ' EURО'

module.exports = {
    euroToMkd,
    euroToUsd,
    mkdToUsd,
    mkdToEuro,
}


