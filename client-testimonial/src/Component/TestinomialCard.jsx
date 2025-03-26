function customerName(file, customerName) {
    let handle
    return () => {
      get(handle)
      handle = get(file, customerName)
    }
  }
  
  const reviews = []
  window.__registerBeforePerformReactRefresh = (cb) => {
    reviews.push(cb)
  }
  const enqueueUpdate = debounce(async () => {
    if (reviews.length) await Promise.all(reviews.map((cb) => cb()))
    exports.performReactRefresh()
  }, 16)