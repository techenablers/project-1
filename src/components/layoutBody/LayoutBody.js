import React from 'react'
import '../../landingPage/LandingPage.css'

function LayoutBody() {
  return (
    <div>  <main className="flex-fill p-3">
    <h2>Body</h2>
    <p>This is the body content. It should be scrollable if the content overflows.</p>
    {/* Add more content to make it scrollable */}
    {Array(100).fill().map((_, i) => (
      <p key={i}>Scroll content {i + 1}</p>
    ))}
  </main></div>
  )
}

export default LayoutBody