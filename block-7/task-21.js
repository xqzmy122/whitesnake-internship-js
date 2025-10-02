function createSecretHolder(secret) {
  let _secret = secret

  return {
    getSecret: () => {
      return _secret
    },
    setSecret: (value) => {
      _secret = value
    }
  }
}
