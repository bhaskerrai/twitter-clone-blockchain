
// client.ts
import {createClient} from '@sanity/client'
// import sanityClient from '@sanity/client'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  apiVersion: 'v1',
  useCdn: false,
})