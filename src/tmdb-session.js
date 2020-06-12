import axios from "./utils/axios"

const isValidToken = () => {
  let token = getToken()
  let expiresAt = getTokenExpiryDate()

  // token not set
  if (!token) {
    return false
  }

  // check if token has expired because of inactivity
  if (expiresAt) {
    const now = new Date()
    const diffInSeconds = expiresAt - now.getUTCDate()

    // if diff is larger than 1 ms, expiry date has surpassed current datetime
    return diffInSeconds > 0
  }

  return true
}

const getToken = () => {
  return localStorage.getItem("tmdbGuestSession.token")
}

const getTokenExpiryDate = () => {
  const expiresAt = localStorage.getItem("tmdbGuestSession.expiresAt")

  if (expiresAt) {
    return new Date(expiresAt)
  }

  return null
}

const createToken = async () => {
  const response = await axios.get("/authentication/guest_session/new")

  if (response.data.success) {
    localStorage.setItem("tmdbGuestSession.token", response.data.guest_session_id)
    localStorage.setItem("tmdbGuestSession.expiresAt", response.data.expires_at)
  }
}

const getTmdbGuestSessionToken = async () => {
  if (isValidToken()) {
    return getToken()
  }

  await createToken()

  return getToken()
}

export default getTmdbGuestSessionToken
