import { useParams } from "react-router-dom"

export const UserDetails = () => {
  const {userId} = useParams()
  // const userId = params.userId
  return <div>User Details are here {userId}</div>
}