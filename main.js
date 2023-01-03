axios
  .get('https://api.github.com/users/atilaCSilva')
  .then(response => {
    const data = response.data
    picture.src = data.avatar_url
  })
  .catch(err => console.log(err))
