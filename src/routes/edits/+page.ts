import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
  const response = await fetch('/api/edits')
  const data = await response.json()

  return { count: data.count, edits: data.edits }
};