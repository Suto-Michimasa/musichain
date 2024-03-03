import Head from 'next/head'

type Props = {
  title?: string
}

const MyHead = (props: Props) => {
  const siteName = 'MUSICHAIN'
  const title = props.title ? props.title + ' - ' + siteName : siteName
  return (
    <Head>
      <title>{title}</title>
      <meta property='og:title' content={title} />
    </Head>
  )
}

export default MyHead
