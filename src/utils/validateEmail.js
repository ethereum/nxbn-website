// eslint-disable-next-line
const validEmailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const validateEmail = value => {
  if (!value && value.trim() === "") {
    throw new Error("Email is empty")
  }
  if (!validEmailReg.test(value)) {
    throw new Error("Email is not valid, please try again")
  }
}

export default validateEmail
