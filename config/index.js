const isProduction = process.env.NODE_ENV === 'production'
const isSSL = process.env.SSL === 'on'
const protocol = isSSL ? 'https' : 'http'

export const rootApi = isProduction ? protocol + '://xquant.ai:1337' : 'http://127.0.0.1:1337';
export const imagePath = isProduction ? protocol + '://xquant.ai:1337' : 'http://127.0.0.1:1337';