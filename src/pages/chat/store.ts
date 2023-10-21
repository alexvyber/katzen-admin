import { Chat, ChatState, Contact, Message, initialState, time } from "@/mock/chat-data"

import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit"

export const appChatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    openChat: (
      state,
      action: PayloadAction<{
        contact: RequiredByKeys<Partial<Contact>, "id">
      }>
    ) => {
      const contact = getContactById(state.contacts, action.payload.contact.id)
      if (!contact) return

      const chat = getChatByContactId(state.chats, action.payload.contact.id)
      if (!chat) return

      state.isActiveChat = true
      state.isMobileChatSidebar = !state.isMobileChatSidebar
      state.user = contact
      state.messages = chat.messages
    },

    toggleisMobileChatSidebar: (state, action: PayloadAction<boolean>) => {
      state.isMobileChatSidebar = action.payload
    },

    infoToggle: (state, action: PayloadAction<boolean>) => {
      state.isOpenInfo = action.payload
    },

    sendMessage: (state, action: PayloadAction<MessageDraft>) => {
      const index = state.chats.findIndex((item) => item.userId === action.payload.to)
      state.chats[index].messages.push(composeMessage(action.payload, state))
      state.messages.push(composeMessage(action.payload, state))
    },

    setContactSearch: (state, action: PayloadAction<string>) => {
      state.searchContactTerm = action.payload
    },

    toggleisActiveChat: (state, action: PayloadAction<boolean>) => {
      state.isActiveChat = action.payload
    },
  },
})

type MessageDraft = Prettify<
  Omit<PartialByKeys<Message, "id" | "time" | "from">, "img"> & {
    to: Contact["id"]
  }
>
function composeMessage(messageDraft: MessageDraft, state: ChatState): Message {
  return {
    id: nanoid(),
    from: state.profileInfo.id,
    img: state.profileInfo.avatar,
    time: time(new Date()),
    ...messageDraft,
  }
}

function getContactById(contacts: Contact[], id: Contact["id"]): Contact | undefined {
  return contacts.find((item) => item.id === id)
}

function getChatByContactId(chats: Chat[], contactId: Contact["id"]): Chat | undefined {
  return chats.find((item) => item.id === contactId)
}

export const {
  openChat,
  toggleisMobileChatSidebar,
  infoToggle,
  sendMessage,
  setContactSearch,
  toggleisActiveChat,
} = appChatSlice.actions
export const chatReducer = appChatSlice.reducer
