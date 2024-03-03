import ContractDetailPagePresenter from '../components/pages/contract-detail'

const ContractDetail = () => {
  return (
    <ContractDetailPagePresenter
      title='CONTRACT'
      name='Takuya Jodai'
      iconPath='/takuya-jodai_icon.png'
      select={3}
      selectJP={true}
      playerIconPath='/test_icon1.jpg'
      playerIcon2Path='/test_icon1.jpg'
      playerName='Hoge Hoge Song'
      playerAuthor='Kira・Yuse'
      time={200}
    />
  )
}

export default ContractDetail
