import tumblr from 'tumblr.js'
import { env } from './dotenv'

export const client = tumblr.createClient({
  credentials: {
    consumer_key:    env.TUMBLR_CONSUMER_KEY,
    consumer_secret: env.TUMBLR_CONSUMER_SECRET,
    token:           env.TUMBLR_TOKEN,
    token_secret:    env.TUMBLR_TOKEN_SECRET
  },
  returnPromises: true
})
