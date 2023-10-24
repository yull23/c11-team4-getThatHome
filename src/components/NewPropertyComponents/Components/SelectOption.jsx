import styled from "@emotion/styled";

export default function SelectOption() {
  const Container = styled.div`
    select {
      border: none;
      // appearance: none;

      border-radius: 8px;
      border: 1px solid var(--Pink, #f48fb1);
      background: var(--White, #fff);
      padding: 0.5rem;

      /* Regular/Body2 */
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 142.857% */
      letter-spacing: 0.25px;
    }
    .option {
      border: none;
      appearance: none;

      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 142.857% */
      letter-spacing: 0.25px;
      color: var(--LightGray, #8e8e8e);
    }
  `;

  return (
    <Container>
      <select name="bedrom" id="bedrom">
        <option value="" className="option init-option">
          Select an option
        </option>
        <option value="1" className="option">
          1
        </option>
        <option value="2" className="option">
          2
        </option>
        <option value="3" className="option">
          3
        </option>
        <option value="4" className="option">
          4
        </option>
      </select>
    </Container>
  );
}
