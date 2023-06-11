import { FC } from 'react'
import { Helmet } from 'react-helmet'

interface IProps {
  title: string
}

export const PageTitle: FC<IProps> = (props) => {
  return (
    <Helmet>
      <title>{props.title} - flash card</title>
    </Helmet>
  )
}
