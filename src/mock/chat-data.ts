import { faker } from "@faker-js/faker"
import { nanoid } from "@reduxjs/toolkit"

type ChatState = {
  isOpenInfo: boolean
  isActiveChat: boolean
  searchContactTerm: string
  isMobileChatSidebar: boolean
  profileInfo: Contact
  messages: Message[]
  user: Contact
  contacts: Contact[]
  chats: Chat[]
}

//
type Contact = {
  id: number
  fullName: string
  role: string
  lastMessage: string
  lastMessageTime: string
  unredMessages: number
  avatar: string
  status: "offline" | "online"
}
const profileInfo = generateContact(100)
const contacts: Contact[] = []

for (let i = 0; i < 15; i++) {
  contacts.push(generateContact(i))
}
function generateContact(userId: Contact["id"]): Contact {
  return {
    id: userId,
    fullName: faker.person.fullName(),
    role: faker.person.jobTitle(),
    lastMessage: faker.lorem.sentence({ min: 1, max: 1 }),
    lastMessageTime: time(),
    unredMessages: random(Math.floor(Math.random() * 10), 0),
    avatar: faker.image.avatar(),
    status: random("online", "offline"),
  }
}

//
type Message = {
  id: string
  img: string | undefined
  content: string
  time: string
  from: Contact["id"]
  to: Contact["id"]
}
function generateMessage(contact: Contact): Message {
  const fromMe = random("me", "them") === "me"
  return {
    id: nanoid(),
    img: fromMe ? profileInfo.avatar : contact.avatar,
    content: faker.lorem.sentences({ min: 1, max: 5 }),
    time: time(),
    from: fromMe ? profileInfo.id : contact.id,
    to: fromMe ? contact.id : profileInfo.id,
  }
}

//
type Chat = {
  id: number
  userId: number
  messages: Message[]
}
const chats: Chat[] = []
for (const contact of contacts) {
  chats.push({
    id: contact.id,
    userId: contact.id,
    messages: randomTimes(() => generateMessage(contact), randomInt(15)),
  })
}

//
function time(initDate?: Date | string) {
  const date = initDate
    ? new Date(initDate)
    : faker.date.between({ from: new Date("1995-12-17T03:24:00"), to: new Date() })
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const ampm = hours >= 12 ? "pm" : "am"
  const hours12 = hours % 12 || 12
  const minutesStr = minutes < 10 ? "0" + minutes : minutes
  return hours12 + ":" + minutesStr + " " + ampm
}

function random<T, U>(left: T, right: U): T | U {
  return Math.random() > 0.5 ? left : right
}

function randomInt(endRange: number = 1) {
  return Math.floor(Math.random() * endRange)
}

function randomTimes<R>(callback: () => R, repeats: number = 5): R[] {
  return [...Array(repeats)].map((_) => callback())
}

const initialState: ChatState = {
  isOpenInfo: true,
  isActiveChat: true,
  searchContactTerm: "",
  isMobileChatSidebar: false,
  profileInfo,
  messages: chats[0].messages,
  user: contacts[0],
  contacts,
  chats,
}

export { initialState, contacts, chats, time, profileInfo }
export type { Message, Chat, ChatState, Contact }
