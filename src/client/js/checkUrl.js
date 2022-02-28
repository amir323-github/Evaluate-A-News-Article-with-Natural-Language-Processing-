function checkTheUrl(inputText) {
    console.log("::: Running checkTheUrl :::", inputText);
    let checkingUrl= /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
  return  checkingUrl.test(inputText)
}

export { checkTheUrl }
