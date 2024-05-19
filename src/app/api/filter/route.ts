import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { params, page, country, category, year }: any = await req.json()
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_DANH_SACH}/${params}?country=${country}&year=${year}&category=${category}&page=${page}`
    )
    if (!result.ok) {
      return NextResponse.json({ error: 'Resource not found' }, { status: 404 })
    }
    const data = await result.json()
    return NextResponse.json(data, { status: 200 })
  } catch (e) {
    return NextResponse.json({ status: 500 })
  }
}
