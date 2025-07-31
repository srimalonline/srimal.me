"use client";
import React, {useEffect} from 'react'

export default function Error({error, reset}: {error: Error, reset: () => void}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div>
      <p>Ammatasiri ! Site ekata kelawela wage... refresh karala balanna...</p>
    </div>
  )
}
