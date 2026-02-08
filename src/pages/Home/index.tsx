import ButtonAdd from '../../components/ButtonAdd'
import ContactsList from '../../containers/ContacsList'
import SideBar from '../../containers/SideBar'

const Home = () => (
  <>
    <SideBar showFilters />
    <ContactsList />
    <ButtonAdd />
  </>
)

export default Home
