// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0]
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input by specifying an `id` on
  // the input and a matching value as an `htmlFor` prop on the label.

  // MAIN EXERCISE
  //   function handleSubmit(event) {
  //     event.preventDefault()
  //     const userName = event.target.elements.usernameInput.value

  //     onSubmitUsername(userName)
  //   }

  //   return (
  //     <form onSubmit={handleSubmit}>
  //       <div>
  //         <label htmlFor="usernameInput">Username:</label>
  //         <input type="text" id="usernameInput" />
  //       </div>
  //       <button type="submit">Submit</button>
  //     </form>
  //   )
  // }

  // function App() {
  //   const onSubmitUsername = username => alert(`You entered: ${username}`)
  //   return <UsernameForm onSubmitUsername={onSubmitUsername} />
  // }

  // EXTRA CREDIT 1

  //   const usernameInputRef = React.useRef()

  //   function handleSubmit(event) {
  //     event.preventDefault()
  //     onSubmitUsername(usernameInputRef.current.value)
  //   }

  //   return (
  //     <form onSubmit={handleSubmit}>
  //       <div>
  //         <label htmlFor="usernameInput">Username:</label>
  //         <input id="usernameInput" type="text" ref={usernameInputRef} />
  //       </div>
  //       <button type="submit">Submit</button>
  //     </form>
  //   )
  // }

  // function App() {
  //   const onSubmitUsername = username => alert(`You entered: ${username}`)
  //   return <UsernameForm onSubmitUsername={onSubmitUsername} />
  // }

  // EXTRA CREDIT 2

  //   const [error, setError] = React.useState(null)

  //   function handleSubmit(event) {
  //     event.preventDefault()
  //     onSubmitUsername(event.target.elements.usernameInput.value)
  //   }

  //   function handleChange(event) {
  //     const {value} = event.target
  //     const isLowerCase = value === value.toLowerCase()
  //     setError(isLowerCase ? null : 'Username must be lower case')
  //   }

  //   return (
  //     <form onSubmit={handleSubmit}>
  //       <div>
  //         <label htmlFor="usernameInput">Username:</label>
  //         <input id="usernameInput" type="text" onChange={handleChange} />
  //       </div>
  //       <div role="alert" style={{color: 'red'}}>
  //         {error}
  //       </div>
  //       <button disabled={Boolean(error)} type="submit">
  //         Submit
  //       </button>
  //     </form>
  //   )
  // }

  // function App() {
  //   const onSubmitUsername = username => alert(`You entered: ${username}`)
  //   return (
  //     <div style={{minWidth: 400}}>
  //       <UsernameForm onSubmitUsername={onSubmitUsername} />
  //     </div>
  //   )
  // }

  // EXTRA CREDIT 3

  const [username, setUsername] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(username)
  }

  function handleChange(event) {
    const {value} = event.target
    setUsername(value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          id="usernameInput"
          type="text"
          onChange={handleChange}
          value={username}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return (
    <div style={{minWidth: 400}}>
      <UsernameForm onSubmitUsername={onSubmitUsername} />
    </div>
  )
}

export default App
