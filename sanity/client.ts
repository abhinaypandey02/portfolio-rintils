import { createClient } from 'next-sanity'

import imageUrlBuilder from '@sanity/image-url'

import SanityPhoto from '../interfaces/SanityPhoto'

const client = createClient({
  projectId: '88oqe037',
  dataset: 'production',
  apiVersion: '2021-10-21',
})
export default client
export function urlFor(source: SanityPhoto): string {
  if (!source) return ''
  return imageUrlBuilder(client).image(source).url()
}
const pattern = /^image-([a-f\d]+)-(\d+x\d+)-(\w+)$/
