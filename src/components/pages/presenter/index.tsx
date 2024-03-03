import { Box } from '@chakra-ui/react'
import MyHead from '../../head'
import Header from '../../header'
import Navi from '../../navi'
import Player from '../../player'

type Props = {
  title: string
  naviName: string
  naviIconPath: string
  naviSelect?: number
  headerSelectJP: boolean
  childrenElement: JSX.Element
  playerIconPath: string
  playerIcon2Path: string
  playerName: string
  playerAuthor: string
  time: number
}

const PagePresenter = (props: Props) => {
  return (
    <Box h='100%'>
      <MyHead title={props.title} />
      <Box display='flex'>
        <Box h='100%' position='fixed'>
          <Navi
            name={props.naviName}
            iconPath={props.naviIconPath}
            select={props.naviSelect}
          />
        </Box>
        <Box ml={364} mb={152}>
          <Box mt={45} ml={110}>
            <Header title={props.title} selectJP={props.headerSelectJP} />
            <Box mt={25}>{props.childrenElement}</Box>
          </Box>
        </Box>
        <Box position='fixed' bottom='20px' left='384px'>
          <Player
            iconPath={props.playerIconPath}
            icon2Path={props.playerIcon2Path}
            name={props.playerName}
            author={props.playerAuthor}
            time={props.time}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default PagePresenter
