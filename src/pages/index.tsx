import HomePagePresenter from '../components/pages/home'

const Home = () => {
  return (
    <HomePagePresenter
      title='HOME'
      name='Michimasa Suto'
      iconPath='/michimasa-suto_icon.png'
      select={0}
      selectJP={true}
      playerIconPath='/test_icon1.jpg'
      playerIcon2Path='/test_icon1.jpg'
      playerName='Hoge Hoge Song'
      playerAuthor='Kira・Yuse'
      time={200}
    />
  )
}

export default Home
