export type User = {
  _id: string,
  firstName: string,
  lastName: string,
  email: string,
  friends: Array<User>,
  incomingFriendRequests: Array<User>,
  outgoingFriendRequests: Array<User>,
}