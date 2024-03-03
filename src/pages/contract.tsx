import Web3 from 'web3';
import ContractPagePresenter from '../components/pages/contract'

const Contract = () => {
  return (
    <ContractPagePresenter
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

export default Contract
