import { api } from "."
import { WaitlistType, Waitlist } from "./types"

export const getWaitlistType = async (): Promise<WaitlistType> => {
  return await api.get('/')
}
export const postWaitlist = async (payload: Waitlist): Promise<Waitlist> => {
  return await api.post('/', payload)
}