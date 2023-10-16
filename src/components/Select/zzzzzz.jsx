function InputOptionHome({ label, options, isSelect }) {
  return (
    <Container>
      <p className="input-search-home__label">{label}</p>
      <ContainerInput>
        {isSelect ? (
          <select name="options" id="" className="input-search-home__select">
            <option
              value={options[0]}
              defaultValue
              className="input-search-home__option"
            >
              {options[0]}
            </option>
            <option
              value={options[1]}
              defaultValue
              className="input-search-home__option"
            >
              {options[1]}
            </option>
          </select>
        ) : (
          <>
            <input
              type="text"
              className="input-search-home__input"
              placeholder="Favorite district"
            />
            <RiArrowDownSLine></RiArrowDownSLine>
          </>
        )}
      </ContainerInput>
    </Container>
  );
}