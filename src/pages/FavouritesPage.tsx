import React from 'react'
import { useAppSelector } from '../hooks/redux'

export function FavouritesPage() {
  const { favourites } = useAppSelector(state => state.github)

  if (favourites.length === 0) {
    return <p className="text-center">No items.</p>
  }

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      <ul className="list-none flex flex-wrap pb-12">
        {favourites.map(f => (
          <li key={f} className="w-1/2 h-1/5 p-2">
            <div className="border-2 border-radius rounded-xl bg-gray-50 hover:bg-gray-100 p-3 h-1/2 flex items-center">
              <ul>
                <li>
                  <a href={f}>{f}</a>
                </li>
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
