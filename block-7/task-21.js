function createSecretHolder(secret) {
  this.secret = secret

  return {
    getSecret: () => {
      return this.secret
    },
    setSecret: (value) => {
      this.secret = value
    }
  }
}