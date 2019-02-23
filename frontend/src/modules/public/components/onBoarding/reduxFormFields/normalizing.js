const UPPERCASE = value=> value && value.charAt(0).toUpperCase() + value.slice(1);

const PHONENUMBER = (value, previousValue) => {
    if (!value) {
        return value
    }
    const onlyNums = value.replace(/[^\d]/g, '')
    if (onlyNums.substring(0, 2)=== '07') {
        return onlyNums + ' '
    }
    return onlyNums
}
