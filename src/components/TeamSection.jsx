import styled from "@emotion/styled";
import Member from "./Member";
import { members } from "../data/members";
const MembersContainer = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  gap: 32px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
  background-color: white;
  padding-top: 64px;
  padding-bottom: 64px;
  h2 {
    font-size: 48px;
    font-weight: 400;
    font-family: "Montserrat";
    color: #bf5f82;
    text-align: center;
  }
`;

function TeamSection() {
  return (
    <Container>
      <h2>Meet the team</h2>
      <MembersContainer>
        {members.map((member) => (
          <Member key={member.id} name={member.name} url={member.url} />
        ))}
      </MembersContainer>
    </Container>
  );
}

export default TeamSection;
