import { useRef } from "react";
import { useForm } from "react-hook-form";


function NewPropertyPage () {
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

        <label>ADDRESS:</label>
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
        <label>MONTLY RENT</label>
        <input
          type="email"
          name="correo"
          {...register("correo", {
            required: {
              value: true,
              message: "Correo es requerido",
            },
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "Correo no válido",
            },
          })}
        />
        {errors.correo && <span>{errors.correo.message}</span>}
      </div>

      <div>
        <label>Contraseña:</label>
        <input
          type="password"
          name="password"
          {...register("password", {
            required: {
              value: true,
              message: "Contraseña es requerida",
            },
            minLength: {
              value: 6,
              message: "Contraseña debe ser mayor a 6 caracteres",
            },
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>
      
      <div>
        <label>Confirma Contraseña:</label>
        <input
          type="password"
          name="confirmarPassword"
          {...register("confirmarPassword", {
            required: {
              value: true,
              message: "Confirmar contraseña es requerida",
            },
            minLength: {
              value: 6,
              message: "Confirmar contraseña debe ser mayor a 6 caracteres",
            },
            validate: (value) =>
              value === password.current || "Las contraseñas no coinciden",
          
        })}
        />
        {errors.confirmarPassword && (
          <span>{errors.confirmarPassword.message}</span>
        )}
      </div>
      
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

export {NewPropertyPage };