import styled from "@emotion/styled";
import { ContainerColumn } from "../../Containers/ContainersDiv";

export default function AboutProperty() {
  const Containter = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    max-width: 37.5rem;

    .text {
      color: var(--DarkGray, #373737);
      font-family: Inter;
      font-size: 10px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 1.5px;
      text-transform: uppercase;
    }

    .description {
      color: var(--LightGray, #8e8e8e);

      /* Regular/Caption */
      font-family: Inter;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px; /* 133.333% */
      letter-spacing: 0.4px;
      text-transform: capitalize;
    }

    textarea {
      height: 5rem;
      overflow: auto;
      resize: none;
      padding: 0.5rem;

      display: flex;
      align-items: flex-start;

      border-radius: 8px;
      border: 1px solid var(--Pink, #f48fb1);
      background: var(--White, #fff);

      /* Regular/Body2 */
      color: var(--DarkGray, #373737);
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 142.857% */
      letter-spacing: 0.25px;
    }
  `;
  return (
    <Containter>
      <p className="text">About this property</p>
      <textarea name="description" />
      <p className="text description">
        Renters will read this first, so highlight any features or important
        information the apartment has.
      </p>
    </Containter>
  );
}
