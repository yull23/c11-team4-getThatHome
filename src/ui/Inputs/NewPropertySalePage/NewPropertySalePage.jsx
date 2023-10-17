import { HiMagnifyingGlass } from "react-icons/hi2";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { TiDelete } from "react-icons/ti";
import { TbCoin } from "react-icons/tb";
import { useFormik } from "formik";
import {
    StyledForm,
    StyledH1,
    StyledLinksContainer,
    StyledTextArea,
  } from "./styles";

  export default function NewPropertySalePage() {
    const formik = useFormik({
      initialValues: {
        address: "",
        price: "",
        property_type: "",
        bedrooms: "",
        bathrooms: "",
        area: "",
        about: "",
        operation_type: "sale",
        user_id: user?.id,
        images: [],
      },
      validate,
      onSubmit: (values) => {
        const propertyData = new FormData();
        for (const [key, value] of Object.entries(values)) {
          if (key === "address") {
            const pattern = /\s\d{3,}$/; // Format for Peruvian address, removes the postal code in the city
            const arrayAddress = value.split(", ");
  
            propertyData.append("address", arrayAddress[0].trim());
            propertyData.append(
              "city",
              arrayAddress[1].trim().replace(pattern, "").trim()
            );
            propertyData.append("country", arrayAddress.at(-1).trim());
            continue;
          }
          if (key === "images") {
            for (let i = 0; i < values.images.length; i++) {
              propertyData.append("images[]", values.images[i]);
            }
            continue;
          }
          propertyData.append(key, value);
        }
  
        createOwnProperty(propertyData);
      },
    });
  
    const { setValues } = formik;
  
    const { ref } = usePlacesWidget({
      apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
      onPlaceSelected: (place) => {
        setValues((prevValues) => ({
          ...prevValues,
          address: `${place.formatted_address}`,
        }));
      },
      options: {
        types: ["address"],
        // componentRestrictions: { country: "pe" },
      },
    });
  
    const handleImages = (event) => {
      const MAX_FILE_SIZE = 5120; //MB
      const KB = 1024;
      const images = Array.from(event.target.files);
      images.forEach((image) => {
        if (image.size / KB <= MAX_FILE_SIZE) {
          setValues((prevValues) => ({
            ...prevValues,
            images: [...prevValues.images, image],
          }));
        } else {
          alert("Some image size exceeds the allowed limit");
        }
      });
    };
  
    const handleDeleteImages = (index) => {
      const newImages = [...formik.values.images];
      newImages.splice(index, 1);
      setValues((prevValues) => ({
        ...prevValues,
        images: newImages,
      }));
    };
  
    return (
      <Section size="xs">
        <Container size="xl" padding={"1rem"}>
          <>
            <StyledH1 className="title">Create a property listing</StyledH1>
            <StyledLinksContainer>
              <p className="links-title">OPERATION TYPE</p>
              <div className="links-container">
                <NavLink
                  to="/property/create/rent"
                  className={({ isActive }) =>
                    isActive ? "link-left active" : "link-left"
                  }
                >
                  Rent
                </NavLink>
                <NavLink
                  to="/property/create/sale"
                  className={({ isActive }) =>
                    isActive ? "link-right active" : "link-right"
                  }
                >
                  Sale
                </NavLink>
              </div>
            </StyledLinksContainer>
            <StyledForm className="form" onSubmit={formik.handleSubmit}>
              <InputWithIcon
                label={"ADDRESS"}
                icon={<HiMagnifyingGlass size={"1.25rem"} />}
                isFullWidth={true}
                name="address"
                type="text"
                placeholder="Address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address}
                googleRef={ref}
              />
              {formik.touched.address && formik.errors.address ? (
                <div className="form__error">{formik.errors.address}</div>
              ) : (
                <div className="form__error"></div>
              )}
              <InputWithIcon
                label="PRICE"
                icon={<TbCoin size={"1.25rem"} />}
                type="number"
                min="1"
                name="price"
                placeholder="30000"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.price}
              />
              {formik.touched.price && formik.errors.price ? (
                <div className="form__error">{formik.errors.price}</div>
              ) : (
                <div className="form__error"></div>
              )}
              <Select
                label={"PROPERTY TYPE"}
                name="property_type"
                options={[
                  { label: "Apartment", value: "apartment" },
                  { label: "House", value: "house" },
                ]}
                instruction={"Select..."}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.property_type}
              />
              {formik.touched.property_type && formik.errors.property_type ? (
                <div className="form__error">{formik.errors.property_type}</div>
              ) : (
                <div className="form__error"></div>
              )}
              <div className="form__selects">
                <div>
                  <Select
                    label={"BEDROOMS"}
                    name="bedrooms"
                    options={[
                      { label: "1", value: "1" },
                      { label: "2", value: "2" },
                      { label: "3", value: "3" },
                      { label: "4", value: "4" },
                      { label: "5", value: "5" },
                      { label: "6", value: "6" },
                      { label: "7", value: "7" },
                      { label: "8", value: "8" },
                      { label: "9", value: "9" },
                      { label: "10", value: "10" },
                    ]}
                    instruction={"Select..."}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.bedrooms}
                  />
                  {formik.touched.bedrooms && formik.errors.bedrooms ? (
                    <div className="form__error">{formik.errors.bedrooms}</div>
                  ) : (
                    <div className="form__error"></div>
                  )}
                </div>
                <div>
                  <Select
                    label={"BATHROOMS"}
                    name="bathrooms"
                    options={[
                      { label: "1", value: "1" },
                      { label: "2", value: "2" },
                      { label: "3", value: "3" },
                      { label: "4", value: "4" },
                      { label: "5", value: "5" },
                      { label: "6", value: "6" },
                      { label: "7", value: "7" },
                      { label: "8", value: "8" },
                      { label: "9", value: "9" },
                      { label: "10", value: "10" },
                    ]}
                    instruction={"Select..."}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.bathrooms}
                  />
                  {formik.touched.bathrooms && formik.errors.bathrooms ? (
                    <div className="form__error">{formik.errors.bathrooms}</div>
                  ) : (
                    <div className="form__error"></div>
                  )}
                </div>
                <div>
                  <Input
                    label="AREA IN M2"
                    name="area"
                    type="number"
                    min="1"
                    placeholder="##"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="input-area"
                    value={formik.values.area}
                  />
                  {formik.touched.area && formik.errors.area ? (
                    <div className="form__error">{formik.errors.area}</div>
                  ) : (
                    <div className="form__error"></div>
                  )}
                </div>
              </div>
              <label>
                <p className="label__info">ABOUT THIS PROPERTY</p>
                <StyledTextArea
                  name="about"
                  placeholder="My Apartment is great because..."
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.about}
                />
                <blockquote className="quote">
                  Renters will read this first, so highlight any features or
                  important information the apartment has.
                </blockquote>
              </label>
              <div>
                <h3 className="photos-title">Photos</h3>
                <label>
                  <p className="photos-instructions">
                    Upload as many photos as you wish
                  </p>
                  <input
                    type="file"
                    multiple
                    name="images"
                    onChange={handleImages}
                    accept="image/*"
                  />
                  <blockquote className="quote">Only images, max 5MB</blockquote>
                </label>
                <div className="images-container">
                  {formik.values.images.length === 0 ? (
                    <div className="images-container__no-image">
                      No photos yet
                    </div>
                  ) : (
                    formik.values.images.map((image, index) => (
                      <div key={index} className="images-container__container">
                        <img
                          src={URL.createObjectURL(image)}
                          className="images-container__image"
                          alt={`image-${index}`}
                        />
                        <TiDelete
                          size={"2rem"}
                          className="images-container__delete"
                          onClick={() => handleDeleteImages(index)}
                        />
                      </div>
                    ))
                  )}
                </div>
                {formik.touched.images && formik.errors.images ? (
                  <div className="form__error">{formik.errors.images}</div>
                ) : (
                  <div className="form__error"></div>
                )}
              </div>
              <Button
                type="primary"
                size="lg"
                disabled={!(formik.isValid && formik.dirty)}
              >
                PUBLISH PROPERTY LISTING
              </Button>
            </StyledForm>
          </>
        </Container>
      </Section>
    );



  }