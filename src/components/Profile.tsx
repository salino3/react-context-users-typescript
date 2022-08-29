import React, { useContext } from 'react'
import myUserContext, { myUserContextProps } from '../context/UserContext';

const Profile = () => {

    
   const {selectedUser, TF } = useContext<myUserContextProps>(myUserContext);


  return (
    <>
     {TF && TF ? (
    <div className='card card-body text-center divProfile mt-3'>
    <img className='card-img-top rounded m-auto img-fluid' style={{width: 180 }}src={selectedUser.avatar} alt={selectedUser.first_name} />
    <h1>{`${selectedUser.first_name} ${selectedUser.last_name}`}</h1>
    <h3>email: {selectedUser.email}</h3>
  </div>
  ) : (<h1>* No user selected *</h1>) }
      
    </>
  )
}

export default Profile



