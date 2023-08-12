/* ---------------------------------- React --------------------------------- */
import { useEffect, useState } from "react";

/* --------------------------------- Router --------------------------------- */
import { Link, useNavigate } from "react-router-dom";

/* ------------------------- React Hook Form && Yup ------------------------- */
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";

/* -------------------------------- Component ------------------------------- */
import Btn from "../components/Btn";

/* --------------------------------- Axios --------------------------------- */
import axios from "axios";

/* -------------------------------- Language -------------------------------- */
import { useTranslation } from "react-i18next";

const Register = () => {
  /* ------------------------------- Local State ------------------------------ */
  const [stepOne, setStepOne] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    repassword: "",
  });
  const [checkPassword, setCheckPassword] = useState(false);

  /* -------------------------------- Navigate -------------------------------- */
  const navigate = useNavigate();

  /* -------------------------------- Language -------------------------------- */
  const { t } = useTranslation();

  /* --------------------------------- Schema --------------------------------- */
  //  First Step
  const registerSchemaStepOne = object({
    name: string().required().trim(),
    surname: string().required().trim(),
  });
  // Second Step
  const registerSchemaStepTwo = object({
    email: string().required().trim().email(),
    password: string().required().trim().min(8).max(18),
    repassword: string().required().trim().min(8).max(18),
  });

  /* ----------------------------- React Hook Form ---------------------------- */
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: yupResolver(
      !stepOne ? registerSchemaStepOne : registerSchemaStepTwo
    ),
    defaultValues: formData,
  });

  /* ------------------------------ Confirm Login ----------------------------- */
  const onSubmit = (data) => {
    if (!stepOne) {
      setStepOne(true);
      setFormData({ ...formData, ...data });
      setValue("name", data.name);
      setValue("surname", data.surname);
    } else {
      if (data.password === data.repassword) {
        setCheckPassword(false);
        postData(data);
      } else {
        setCheckPassword(true);
      }
    }
  };

  /* ------------------------------ Send Request Api ----------------------------- */
  const postData = (data) => {
    axios
      .post(process.env.REACT_APP_REGISTER, data)
      .then((res) => {
        if (res.status === 200) {
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
  };

  /* ------------------------------- Change Step ------------------------------ */
  const handleBackToStepOne = () => {
    setStepOne(false);
    reset(formData);
  };

  /* ----------------------- Clear Same  Password Error ----------------------- */
  useEffect(() => {
    if (checkPassword) {
      if (errors.repassword || errors.password) {
        setCheckPassword(false);
      }
    }
  }, [checkPassword, errors.repassword, errors.password]);

  return (
    <main>
      <section className="form">
        <div className="row">
          <div className="register">
            <h3 className="title">{t("form.register-title")}</h3>
            <h5 className="text">
              {!stepOne
                ? `${t("form.step")} 1 of 2`
                : `${t("form.step")} 2 of 2`}
              {stepOne && (
                <span className="back" onClick={handleBackToStepOne}>
                  {t("header.cart-box-back")}
                </span>
              )}
            </h5>
            <form className="register-form" noValidate>
              {!stepOne ? (
                <div className="personal-info">
                  <div className="form-group">
                    <label>{t("form.name")}</label>
                    <input
                      type="text"
                      name="name"
                      className={errors.name && "error"}
                      defaultValue={formData.name}
                      {...register("name")}
                    />
                    {errors.name && (
                      <div className="error-message">{errors.name.message}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <label>{t("form.surname")}</label>
                    <input
                      type="text"
                      name="surname"
                      defaultValue={formData.surname}
                      className={errors.surname && "error"}
                      {...register("surname")}
                    />
                    {errors.surname && (
                      <div className="error-message">
                        {errors.surname.message}
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="general-info">
                  <div className="form-group">
                    <label>{t("form.email")}</label>
                    <input
                      type="email"
                      name="email"
                      className={errors.email && "error"}
                      {...register("email")}
                    />
                    {errors.email && (
                      <div className="error-message">
                        {errors.email.message}
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <label>{t("form.password")}</label>
                    <input
                      type="password"
                      name="password"
                      className={errors.password && "error"}
                      {...register("password")}
                    />
                    {errors.password && (
                      <div className="error-message">
                        {errors.password.message}
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <label>{t("form.repassword")}</label>
                    <input
                      type="password"
                      name="repassword"
                      className={errors.repassword && "error"}
                      {...register("repassword")}
                    />
                    {errors.repassword && (
                      <div className="error-message">
                        {errors.repassword.message}
                      </div>
                    )}
                    {checkPassword && (
                      <div className="error-message">
                        {t("form.same-pass-err")}
                      </div>
                    )}
                  </div>
                </div>
              )}
              {!stepOne && (
                <p className="low-text">
                  {t("form.privacy-first-text")}
                  <Link>{t("form.privacy-first-link")}</Link>
                  {t("form.and")}
                  <Link>{t("form.privacy-second-link")}</Link>
                  {t("form.privacy-second-text")}
                </p>
              )}

              <Btn
                text={`${!stepOne ? t("btn.continue") : t("btn.sign-in")}  `}
                onClick={(e) => handleSubmit(onSubmit)(e)}
              />
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Register;
