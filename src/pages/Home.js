import React, { useState, useEffect } from 'react';
import AuthService from '../services/auth-service';
import UserService from '../services/user-service';
import { useHistory } from 'react-router-dom';
import PersistentDrawerLeft from '../components/containers/drawer/DrawerNavigation';

function getUserData(){
  let user_data;

  return user_data
}

function Home(){
    const [userProfile, setUserProfile] = useState(null);
    useEffect(() => {
      UserService.getUserByUsername()
        .then((user) => {

          UserService.getEmployeesByID(user.data.id)
            .then(({ data }) => {
              user.data["employee"] = data
              setUserProfile(user.data)
            })
        }).catch((err) => {
          const user_data = {"message": err}
        })
    },[])
    const history = useHistory()
    return(
        <React.Fragment>
          <PersistentDrawerLeft>
            {userProfile?
              <ul key={userProfile.id}>
                <li>
                  {userProfile.role}
                </li>
                <li>
                  {userProfile.employee.firstname}
                </li>
              </ul>
            :<p>No data Found</p>}
          </PersistentDrawerLeft>
        </React.Fragment>
    );
}

export default Home;
