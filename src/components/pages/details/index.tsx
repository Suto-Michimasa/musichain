import { Box } from '@chakra-ui/react'
import Daw from '../../daw'
import Music from '../../details'
import PagePresenter from '../presenter'

type Props = {
  title: string
  name: string
  iconPath: string
  select?: number
  selectJP: boolean
  playerIconPath: string
  playerIcon2Path: string
  playerName: string
  playerAuthor: string
  time: number
}

const DetailsPagePresenter = (props: Props) => {
  const main = (
    <Box>
      <Daw />
      <Box mt='20px'>
        <Music />
      </Box>
    </Box>
  )
  return (
    <PagePresenter
      title={props.title}
      naviName={props.name}
      naviIconPath={props.iconPath}
      naviSelect={props.select}
      headerSelectJP={props.selectJP}
      childrenElement={main}
      playerIconPath={props.playerIconPath}
      playerIcon2Path={props.playerIcon2Path}
      playerName={props.playerName}
      playerAuthor={props.playerAuthor}
      time={props.time}
    />
  )
}

export default DetailsPagePresenter
