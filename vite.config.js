const htmlTransform = {
  name: 'html-transform',
  transform(code, id) {
    if (!/\.html$/.test(id)) return
    return {
      code: `export default ${JSON.stringify(code)}`,
      map: null
    }
  }
}

export default {
  plugins: [
    htmlTransform
  ]
}
