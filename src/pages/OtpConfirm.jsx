/* ---------------------------------- React --------------------------------- */
import {  useEffect, useState } from "react";

/* --------------------------------- Router --------------------------------- */
import {  useNavigate } from "react-router-dom";

/* ------------------------- React Hook Form && yup ------------------------- */
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { object, string } from "yup";

/* -------------------------------- Component ------------------------------- */
import Btn from "../components/Btn";

/* ---------------------------------- Axios --------------------------------- */
import axios from "axios";

/* -------------------------------- Language -------------------------------- */
import { useTranslation } from "react-i18next";

const OtpConfirm = () => {
  /* ------------------------------- Local State ------------------------------ */
  const [stepOne, setStepOne] = useState(false);
  const [formData, setFormData] = useState({ email: "", otp: "" });
  const [checkLogin, setCheckLogin] = useState(false);

  /* -------------------------------- Language -------------------------------- */
  const { t } = useTranslation();

  /* -------------------------------- Navigate -------------------------------- */
  const navigate = useNavigate();

  /* --------------------------------- Schema --------------------------------- */
  //  First Step
  const loginSchemaStepOne = object({
    email: string().required().trim().email(),
  });
  // Second Step
  const loginSchemaStepTwo = object({
    otp: string().required().trim().max(4),
  });

  /* ----------------------------- React Hook Form ---------------------------- */
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: yupResolver(!stepOne ? loginSchemaStepOne : loginSchemaStepTwo),
    defaultValues: formData,
  });

  /* ------------------------------ Confirm Login ----------------------------- */
  const onSubmit = (data) => {
    if (!stepOne) {
      setStepOne(true);
      setFormData({ ...formData, email: data.email });
      setValue("email", data.email);
      axios.post(process.env.REACT_APP_SEND_RESET_LINK, {
        token: JSON.parse(localStorage.getItem("token")),
        email: data.email,
      });
    } else {
      axios
        .post(process.env.REACT_APP_VERIFY_OTP_CODE, {
          token: JSON.parse(localStorage.getItem("token")),
          otp: data.otp,
        })
        .then((res) => {
          if (res.status === 200) {
            setCheckLogin(false);
            navigate("/reset-password");
          }
        })
        .catch((err) => {
          setCheckLogin(true);
        });
    }
  };

  /* ------------------------------- Change Step ------------------------------ */
  const handleBackToStepOne = () => {
    setStepOne(false);
    reset(formData);
  };

  /* ----------------------- Clear login ----------------------- */
  useEffect(() => {
    if (checkLogin) {
      if (errors.otp) {
        setCheckLogin(false);
      }
    }
  }, [checkLogin, errors.otp]);

  return (
    <main>
      <section className="form">
        <div className="row">
          <div className="login">
            <h3 className="title">OTP</h3>
            {stepOne && (
              <h5 className="text">
                {formData.email}
                <span className="back" onClick={handleBackToStepOne}>
                  {t("form.change")}
                </span>
              </h5>
            )}
            <form className="login-form" noValidate>
              {!stepOne ? (
                <div className="form-group">
                  <label>{t("form.login-email")} </label>
                  <input
                    type="email"
                    name="email"
                    className={errors.email && "error"}
                    defaultValue={formData.email}
                    {...register("email")}
                  />
                  {errors.email && (
                    <div className="error-message">{errors.email.message}</div>
                  )}
                </div>
              ) : (
                <div className="form-group">
                  <label> {t("form.password")}</label>
                  <input
                    type="text"
                    name="otp"
                    className={errors.otp && "error"}
                    {...register("otp")}
                  />
                  {errors.otp && (
                    <div className="error-message">
                      {errors.otp.message}
                    </div>
                  )}
                  {checkLogin && (
                    <div className="error-message">Invalid OTP</div>
                  )}
                </div>
              )}

              <Btn
                text={`${!stepOne ? t("btn.continue") : "Confirm"}  `}
                onClick={(e) => handleSubmit(onSubmit)(e)}
              />
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OtpConfirm;
