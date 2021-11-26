class localCaChe {
  setCache(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  getCaChe(key: string) {
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  deleteCaChe(key: string) {
    window.localStorage.removeItem(key)
  }

  clearCaChe() {
    window.localStorage.clear()
  }
}

export default new localCaChe()
