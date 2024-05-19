export default async function fetcher(url: string): Promise<any> {
  try {
    // revalidate at most every hour
    const res = await fetch(url, { next: { revalidate: 3600 } })
    if (!res.ok) {
      throw new Error('Failed to load data.')
    }
    return await res.json()
  } catch (e) {
    console.error(e)
  }
}
