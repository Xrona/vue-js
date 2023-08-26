export const apiHelper = async <T>(callback: () => T | undefined): Promise<T> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = callback()

      if (!result) {
        reject({ message: 'data not found' })

        return
      }

      resolve(result)
    }, 700)
  })
}
