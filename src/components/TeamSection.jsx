import styled from "@emotion/styled";
import Member from "./Member";
import { members } from "../data/members";
const MembersContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 32px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
  background-color: white;
  padding: 4rem 12rem;
  h2 {
    color: var(--DarkPink, #bf5f82);
    text-align: center;
    /* Regular/Headline3 */
    font-family: Montserrat;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
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
