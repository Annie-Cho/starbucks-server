const getPhoneNum = () => {
    const phone1 = document.getElementById("PhoneNumber01").value
    const phone2 = document.getElementById("PhoneNumber02").value
    const phone3 = document.getElementById("PhoneNumber03").value

    result = phone1 + phone2 + phone3
    return result
}

const getUserInfo = () => {
    const result = {}
    let personal = []

    result.name = document.getElementById("SignupName").value
    result.email = document.getElementById("SignupEmail").value

    personal.push(document.getElementById("SignupPersonal1").value)
    personal.push(document.getElementById("SignupPersonal2").value)
    result.personal = personal.join('-')

    result.prefer = document.getElementById("SignupPrefer").value
    result.pwd = document.getElementById("SignupPwd").value
    result.phone = getPhoneNum()
    console.log(result)
    return result
}