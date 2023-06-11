import { App, message as antdMessage } from 'antd'
import { MessageInstance, NoticeType } from 'antd/es/message/interface'

let messageInstance: MessageInstance = antdMessage

export const useInitMessage = () => {
  const staticFunction = App.useApp()
  messageInstance = staticFunction.message
}
