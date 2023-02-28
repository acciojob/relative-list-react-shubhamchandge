import React from 'react'

const App = () => {

  const list = ["ramesh", "suresh", "ganesh"];

  return (
    <div id="main">
      <ol >
        {list?.map((relative, index) => {
          return (
            <li key={"relativeitem1" + parseInt(index) + 1} >
              {relative}
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export default App
