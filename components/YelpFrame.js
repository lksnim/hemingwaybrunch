import { useIntersectionObserver } from '@react-hooks-library/core'
import React, { useRef } from 'react'

export default function YelpFrame() {
  const outer = useRef(null)
  const inner = useRef(null)

  const { inView } = useIntersectionObserver(inner, {
    root: outer,
    threshold: 0.5,
  })

  return (
    <div ref={outer}>
      <div ref={inner}>
        {inView && (
          <iframe
            title="Delicious Brunch at Hemingway in Coppell"
            src="https://www.yelp.com/waitlist/hemingway-brunch-coppell/widget"
            className="block"
            width="250"
            height="326"
            frameBorder="0"
          ></iframe>
        )}
      </div>
    </div>
  )
}
