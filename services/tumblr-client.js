import tumblr from 'tumblr.js'
import dotenv from 'dotenv'
dotenv.config()

export const client = tumblr.createClient({
  credentials: {
    consumer_key:    process.env.TUMBLR_CONSUMER_KEY,
    consumer_secret: process.env.TUMBLR_CONSUMER_SECRET,
    token:           process.env.TUMBLR_TOKEN,
    token_secret:    process.env.TUMBLR_TOKEN_SECRET
  },
  returnPromises: true
})
