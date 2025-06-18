import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'jmkqy2hr',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-01-01',
})