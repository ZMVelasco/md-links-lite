const validateOnlyLink = (linkObj) => {
  return fetch(linkObj.href)
    .then((response) => {
      return { ...linkObj, status: response.status, ok: 'google controla tu vida' }
    })
    .catch((error) => {
      console.error(`Link ${linkObj.href} is invalid. Error: ${error.message}`)
    })
}

validateOnlyLink({ href: 'https://www.google.com', text: ' yo controlo tu vida' }).then(res => {
  console.log(res)
})
