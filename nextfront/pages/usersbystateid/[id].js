import { useRouter } from 'next/router'
import UserTable from '../../components/usersdetails.component';


const UsersByState = () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <>
    {console.log("this.props====>", id)}
      <UserTable stateid={id}/>
    </>
  );
}

export default UsersByState;