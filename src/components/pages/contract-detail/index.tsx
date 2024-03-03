import { Box } from '@chakra-ui/react'
import ContractDetail from '../../contract'
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

const ContractDetailPagePresenter = (props: Props) => {
  const main = (
    <Box>
      <ContractDetail />
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

export default ContractDetailPagePresenter
