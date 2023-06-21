const formattedDate = (time) => {

    const date = new Date(time)

    const hours = date.getHours();
    const minutes = date.getMinutes();

    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10? `0${minutes}` : minutes;

    const formattedDate = `${formattedHours}:${formattedMinutes}`

    return formattedDate

}

export default formattedDate