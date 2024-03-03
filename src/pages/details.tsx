import DetailsPagePresenter from '../components/pages/details'

const Details = () => {
  return (
    <DetailsPagePresenter
      title='DETAILS'
      name='Takuya Jodai'
      iconPath='/takuya-jodai_icon.png'
      selectJP={true}
      playerIconPath='/test_icon1.jpg'
      playerIcon2Path='/test_icon1.jpg'
      playerName='Hoge Hoge Song'
      playerAuthor='Kira・Yuse'
      time={200}
    />
  )
}

export default Details
