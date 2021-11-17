
const UserIdKey = 'user-id';

export function getUserId() {
  return localStorage.getItem(UserIdKey)
}

export function saveUserId(userId) {
  localStorage.setItem(UserIdKey, userId)
}

export function removeUserId() {
  localStorage.removeItem(UserIdKey)
}
