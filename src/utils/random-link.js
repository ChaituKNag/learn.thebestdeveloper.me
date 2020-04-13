export default (links, currIdx) => {
  const maxIdx = links.length
  let newIdx = null
  while (newIdx === null || newIdx === currIdx) {
    newIdx = Math.floor(Math.random() * Math.floor(maxIdx))
  }

  return links[newIdx]
}
