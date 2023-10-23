import styled from "@emotion/styled";
import { BiEdit, BiHeart } from "react-icons/bi";
import Button from "../../../ui/Button";
import { useContext, useEffect, useState } from "react";
import { ShowPropertyContext } from "../../../pages/ShowPropertyPage";
import { RiUserAddLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/useAuth";
import { statusPropertyUser } from "../../../services/properties-services";

export function CardNoLogin() {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 2rem;
    border-radius: 8px;
    background: var(--White, #fff);
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
    p {
      text-align: center;
    }
    a {
      padding: 0.25rem 0.5rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      border-radius: 8px;
      background: var(--Pink, #f48fb1);

      // text
      color: var(--White, #fff);
      text-align: center;

      /* Button */
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px; /* 171.429% */
      letter-spacing: 1.25px;
      text-transform: uppercase;
    }
  `;
  return (
    <Container>
      <p>Log in or Join to contact the advertiser</p>
      <Link to="/login">
        <RiUserAddLine size={"1.5rem"} />
        LOGIN
      </Link>
    </Container>
  );
}
export function CardLogin() {
  const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    border-radius: 8px;
    background: var(--White, #fff);
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
    gap: 1rem;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 0.25rem;
    }
    p {
      color: var(--Gray, #616161);
      text-align: center;

      /* Caption */
      font-family: Inter;
      font-size: 0.75rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.33; /* 133.333% */
      letter-spacing: 0.4px;
    }

    .favorite__button {
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `;
  return (
    <Container>
      <Button type="primary" size="default">
        CONTACT ADVERTISER
      </Button>
      <div>
        <button className="favorite__button">
          <BiHeart
            style={{ fontSize: "1.5rem", margin: "0.5rem", color: "#616161" }}
          />
        </button>
        <p>Add to favorites</p>
      </div>
    </Container>
  );
}
export function CardView({ email, phone }) {
  const ContainerPrimary = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    border-radius: 8px;
    background: var(--White, #fff);

    /* Elevation1 */
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
  `;

  const ContainerSecundary = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h3 {
      color: var(--DarkGray, #373737);
      text-align: center;

      font-family: Montserrat;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 28px; /* 140% */
      letter-spacing: 0.15px;
    }
  `;

  const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    p {
      text-align: center;
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 142.857% */
      letter-spacing: 0.25px;
    }
    .atribute {
      color: var(--DarkPink, #bf5f82);
    }
  `;
  return (
    <ContainerPrimary>
      <ContainerSecundary>
        <h3>Contact Information</h3>
        <ContainerText>
          <p className="atribute">Email</p>
          <p>{email}</p>
        </ContainerText>
        <ContainerText>
          <p className="atribute">Phone</p>
          <p>{phone}</p>
        </ContainerText>
      </ContainerSecundary>
    </ContainerPrimary>
  );
}
export function CardEdit() {
  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  `;
  return (
    <Container>
      <Button type="primary" size="default">
        <BiEdit style={{ fontSize: "1.5rem" }} />
        EDIT PROPERTY
      </Button>
    </Container>
  );
}

export function CardUser() {
  const { property } = useContext(ShowPropertyContext);
  const { user } = useAuth();
  const [userContact, setUserContact] = useState({});

  const [interactionStatus, setInteractionStatus] = useState({
    contact: false,
    favorite: false,
    user_property: null,
    id: null,
  });

  useEffect(() => {
    async function fetchData() {
      const status = await statusPropertyUser(property.propertyID);
      setInteractionStatus(status);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      if (interactionStatus.user === null) {
        const user = await showUser(property.propertyID);
        setUserContact(user);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      {user == null ? (
        <CardNoLogin />
      ) : (
        <>
          {interactionStatus.contact ? (
            <CardView email={user.email} phone={user.phone} />
          ) : (
            <CardLogin />
          )}
        </>
      )}
    </>
  );
}
