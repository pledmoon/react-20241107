export const Review = ({ review }) => {
  const { name, text, rating } = review

  return (
    <>
      <strong>{name}</strong>
      <div>
        {text} ({rating}/5)
      </div>
    </>
  )
}
