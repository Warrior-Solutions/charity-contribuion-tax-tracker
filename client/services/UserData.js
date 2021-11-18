import { getUserId } from "./UserThingyRenameThis";

export const loadUserData = () => {
  const userId = getUserId();
  if (!userId) {
    // TODO Throw excption
  }
  return fetch("http://localhost:3000/dashboard", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId }),
  }).then(res => res.json());
};