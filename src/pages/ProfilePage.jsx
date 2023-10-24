import React, { useEffect, useState } from 'react'
import styled from "@emotion/styled";
import { useAuth } from "../context/useAuth";
const ContainerProfile = styled.div`
  background: linear-gradient(to bottom, #f48fb122 50%, white 50%);
  padding-top: 7.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  .container-profile {
    width: 100%;
    max-width: 24.5rem;
    height: max-content;
    display: flex;
    padding: 1rem;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    border-radius: 0.5rem;
    background: #fff;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
  }
  h3 {
    color: #000;
    font-family: Montserrat;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.33;
  }
  label {
    color: var(--DarkGray, #373737);
    /* Regular/Overline */
    font-family: Inter;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }
  p {
    color: var(--LightGray, #8e8e8e);

    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 133.333% */
    letter-spacing: 0.4px;
    padding: 0.5rem;
    border-bottom: solid;
    border-bottom-color: #FFC1E3;
  }
`;
const ContainerInputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const ContainerLabel = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const ProfilePage = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
    });
    const { user } = useAuth();
    console.log(user)
    useEffect(() => {
        if (user) {
          setFormData({
            name: user.name,
            // email: user.email, User can't change their email
            phone: user.email,
            phone: user.phone,
          });
        }
    }, [user]);

    return (
        <ContainerProfile>
              <div className='container-profile'> 
                <ContainerInputs>
                    <ContainerLabel>
                        <label htmlFor="">NAME</label>
                        <p>{user.name}</p>
                        {/* <p>{user.name}</p>    */}
                    </ContainerLabel>
                    <ContainerLabel>
                        <label htmlFor="">PHONE</label>
                        <p>{user.phone}</p> 
                        {/* <p>{user.phone}</p>    */}
                    </ContainerLabel>
                    <ContainerLabel>
                        <label htmlFor="">Email</label>
                        <p>{user.email}</p>
                        {/* <p>{user.email}</p>    */}
                    </ContainerLabel>
                </ContainerInputs>
              </div>
        </ContainerProfile>
    )
}
