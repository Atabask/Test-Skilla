const formattedPhone = (phone) => {

    const countryCode = phone.slice(0, 1)
    const phoneNumber = phone.slice(1)
    const groups = phoneNumber.match(/(\d{3})(\d{3})(\d{2})(\d{2})/).slice(1)
    const formattedNumber = `+${countryCode} (${groups[0]}) ${groups[1]}-${groups[2]}-${groups[3]}`

    return formattedNumber
}

export default formattedPhone