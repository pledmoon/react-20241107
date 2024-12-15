import { useGetUsersQuery } from '@/redux/services/api'

export const Review = ({ review }) => {
  const { userId, text, rating } = review

  const { data, isLoading, isError } = useGetUsersQuery()

  if (isLoading) return 'Loading...'

  if (isError) return 'Error'

  const currentUser = data.find((user) => user.id === userId)

  if (!currentUser) return null

  return (
    <>
      <strong>{currentUser.name}</strong>
      <div>
        {text} ({rating}/5)
      </div>
    </>
  )
}
