import { useRef } from "react";
import { useForm } from "react-hook-form";
// import { Menu } from "../components/Menu/Menu";
// import Footer from "../ui/Footer";


function NewPropertyPage() {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm();

  const password = useRef(null);
  password.current = watch("password", "");

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <>
      <form onSubmit={onSubmit}>
      <h1>OPERATION TYPE</h1>
      <div>
        <input
          type="checkbox"
          {...register("opcion1")}
        />
        <label>Rent</label>
      </div>

      <div>
        <input
          type="checkbox"
          {...register("opcion2")}
        />
        <label>Sale</label>
      </div>
    
        <h2>ADDRESS</h2>
        <input
          type="text"
          {...register("nombre", {
            required: {
              value: true,
              message: "Nombre es requerido",
            },
            maxLength: 20,
            minLength: 2,
          })}
        />
        {errors.nombre?.type === "required" && <span>Nombre requerido</span>}
        {errors.nombre?.type === "maxLength" && (
          <span>Nombre no debe ser mayor a 20 caracteres</span>
        )}
        {errors.nombre?.type === "minLength" && (
          <span>Nombre debe ser mayor a 2 caracteres</span>
        )}

       <h3>MONTLY RENT</h3>
        <input
          type="text"
          {...register("nombre", {
            required: {
              value: true,
              message: "Nombre es requerido",
            },
            maxLength: 20,
            minLength: 2,
          })}
        />
        {errors.nombre?.type === "required" && <span>Nombre requerido</span>}
        {errors.nombre?.type === "maxLength" && (
          <span>Nombre no debe ser mayor a 20 caracteres</span>
        )}
        {errors.nombre?.type === "minLength" && (
          <span>Nombre debe ser mayor a 2 caracteres</span>
        )}
      
      <h4>MAINTANCE</h4>
        <input
          type="text"
          {...register("nombre", {
            required: {
              value: true,
              message: "Nombre es requerido",
            },
            maxLength: 20,
            minLength: 2,
          })}
        />
        {errors.nombre?.type === "required" && <span>Nombre requerido</span>}
        {errors.nombre?.type === "maxLength" && (
          <span>Nombre no debe ser mayor a 20 caracteres</span>
        )}
        {errors.nombre?.type === "minLength" && (
          <span>Nombre debe ser mayor a 2 caracteres</span>
        )}
      
      <div>
        <label htmlFor="pais">Pais:</label>
        <select id="pais" {...register("pais")}>
          <option value="pe">Perú</option>
          <option value="co">Colombia</option>
          <option value="mx">México</option>
        </select>

        {watch("pais") === "ar" && (
          <input
            type="text"
            placeholder="Provincia"
            {...register("provincia", {
              // required: {
              //   value: true,
              //   message: "Provincia es requerida",
              // },
            })}
          />
        )}
      </div>
      <div>
        <label htmlFor="archivo">Photos</label>
        <input
          type="file"
          onChange={(e) => {
            setValue("archivo", e.target.files[0].name);
          }}
          placeholder="Choose a file"
        />
        {errors.archivo && <span>{errors.archivo.message}</span>}
      </div>
      <button type="submit">Enviar</button>
      <div>
        <input
          type="checkbox"
          {...register("aceptaTerminos", {
            required: {
              value: true,
              message: "Acepta los términos y condiciones",
            },
          })}
        />
        <label>Acepto los términos y condiciones</label>
        {errors.aceptaTerminos && <span>{errors.aceptaTerminos.message}</span>}
      </div>
    </form>
  
    </>
  );
}

export {NewPropertyPage};