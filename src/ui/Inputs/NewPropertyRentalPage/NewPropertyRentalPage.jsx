import React, { useRef } from "react";
import { useFormik } from "formik";
import { NavLink } from "react-router-dom";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { TiDelete } from "react-icons/ti";
import { TbCoin } from "react-icons/tb";
import {
  StyledForm,
  StyledH1,
  StyledLinksContainer,
} from "./styles";

const Container = styled.div`
  padding: 16px 32px;
  display: flex;
  justify-content: space-between;
`;
const InputWithIcon = styled.div`
  display: flex;
  gap: 16px;
`;

export default function NewPropertyRentalPage() {
  const MAX_FILE_SIZE_MB = 5; // 5MB
  const KB = 1024;

  const formik = useFormik({
    initialValues: {
      address: "",
      monthly_rent: "",
      maintenance: "",
      property_type: "",
      bedrooms: "",
      bathrooms: "",
      area: "",
      pets_allowed: false,
      about: "",
      operation_type: "rent",
      user_id: user?.id,
      images: [],
    },
    validate,
    onSubmit: handleSubmit,
  });

  const { setValues } = formik;
  const { ref } = usePlacesWidget({
    apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
    onPlaceSelected: handlePlaceSelected,
    options: {
      types: ["address"],
      // componentRestrictions: { country: "pe" },
    },
  });

  const handleImages = (event) => {
    const images = Array.from(event.target.files);
    images.forEach((image) => {
      if (image.size / KB <= MAX_FILE_SIZE_MB) {
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

  const handleSubmit = (values) => {
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
  };

  const handlePlaceSelected = (place) => {
    setValues((prevValues) => ({
      ...prevValues,
      address: `${place.formatted_address}`,
    }));
  };

  return (
    <Section size="xs">
      <Container size="xl" padding="1rem">
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
          {/* Render form fields */}
          {/* ... */}
          {renderFormField(
            "ADDRESS",
            "address",
            "text",
            "Address",
            formik
          )}
          {renderFormField(
            "MONTHLY RENT",
            "monthly_rent",
            "number",
            "2000",
            formik
          )}
          {renderFormField(
            "MAINTENANCE",
            "maintenance",
            "number",
            "100",
            formik
          )}
          {renderSelect(
            "PROPERTY TYPE",
            "property_type",
            [
              { label: "Apartment", value: "apartment" },
              { label: "House", value: "house" },
            ],
            "Select...",
            formik
          )}
          {renderSelect(
            "BEDROOMS",
            "bedrooms",
            generateOptions(1, 10),
            "Select...",
            formik
          )}
          {renderSelect(
            "BATHROOMS",
            "bathrooms",
            generateOptions(1, 10),
            "Select...",
            formik
          )}
          {renderFormField("AREA IN M2", "area", "number", "##", formik, "input-area")}
          {/* ... */}
        </StyledForm>
      </Container>
    </Section>
  );
}

const generateOptions = (start, end) => {
  const options = [];
  for (let i = start; i <= end; i++) {
    options.push({ label: i.toString(), value: i.toString() });
  }
  return options;
};

const renderFormField = (label, name, type, placeholder, formik, className = "") => (
  <div>
    <label className="label">
      <InputWithIcon
        label={label}
        icon={<IconComponent size="1.25rem" />}
        isFullWidth={true}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
        className={className}
      />
    </label>
    {formik.touched[name] && formik.errors[name] && (
      <div className="form__error">{formik.errors[name]}</div>
    )}
  </div>
);

const renderSelect = (label, name, options, instruction, formik) => (
  <div>
    <Select
      label={label}
      name={name}
      options={options}
      instruction={instruction}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values[name]}
    />
    {formik.touched[name] && formik.errors[name] && (
      <div className="form__error">{formik.errors[name]}</div>
    )}
  </div>
);

