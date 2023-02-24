import React from 'react'

const App = () => {
  return (
    <div id="main">
      {/* Do not remove the main div */}
      <ol key={relativeList}>
        <li key={relativeListItem1} > goa</li>
        <li key={relativeListItem2}> kerla </li>
      </ol>
    </div>
  )
}

export default App
