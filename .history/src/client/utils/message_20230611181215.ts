import { App, message as antdMessage } from 'antd'
import { MessageInstance, NoticeType } from 'antd/es/message/interface'

let messageInstance: MessageInstance = antdMessage

export const useInitMessage = () => {
  const staticFunction = App.useApp()
  messageInstance = staticFunction.message
}

export const message = (type: NoticeType, content: string) => {
  return messageInstance.open({ type, content })
}

export const messageSuccess = (content: string) => {
  return messageInstance.success(content)
}
