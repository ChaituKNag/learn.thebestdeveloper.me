import React, { useState, useEffect } from "react"
import Button from "./styled/Button"

const randomIndex = (curr, maxIndex) => {
  let newIdx = null
  while (newIdx === null || newIdx === curr) {
    newIdx = Math.floor(Math.random() * Math.floor(maxIndex))
  }
  return newIdx
}

const Trivia = ({ data }) => {
  const [current, setCurrent] = useState(null)
  useEffect(() => {
    if (data) {
      setCurrent(c => randomIndex(c, data.length))
    }
  }, [data])

  const handleRandomTrivia = () => {
    setCurrent(randomIndex(current, data.length))
  }
  return (
    <div>
      {data.map((trivia, idx) => {
        return idx === current ? (
          <div
            key={trivia.node.id}
            dangerouslySetInnerHTML={{ __html: trivia.node.html }}
          />
        ) : null
      })}
      {data.length > 1 && current !== null ? (
        <Button onClick={handleRandomTrivia}>Random Trivia</Button>
      ) : null}
    </div>
  )
}

export default Trivia
