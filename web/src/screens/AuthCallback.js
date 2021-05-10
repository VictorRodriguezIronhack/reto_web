import { useContext, useEffect } from "react"
import { useHistory } from "react-router"
import { AuthContext } from "../contexts/AuthStore"
import services from "../services/users-service"

function AuthCallback() {
  const { onUserChange, user } = useContext(AuthContext)
  const { replace } = useHistory()

  useEffect(() => {
    async function fetch() {
      const user = await services.googleProfile()

      onUserChange(user)
    }

    fetch()
  }, [onUserChange])

  useEffect(() => {
    if (user) {
      replace('/telefonos')
    }
  }, [user, replace])

  return null
}

export default AuthCallback;