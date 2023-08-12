import { Link, useNavigate } from "react-router-dom";
import Btn from "../components/Btn";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { object, string } from "yup";
import axios from "axios";
import { Auth } from "../utils/Auth";

/* -------------------------------- Language -------------------------------- */
import { useTranslation } from "react-i18next";

const Login = () => {
  /* ------------------------------- Local State ------------------------------ */
  const [stepOne, setStepOne] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [checkLogin, setCheckLogin] = useState(false);

  /* -------------------------------- Language -------------------------------- */
  const { t } = useTranslation();

  /* ------------------------------ Global State ------------------------------ */
  const { setToken } = useContext(Auth);

  /* -------------------------------- Navigate -------------------------------- */
  const navigate = useNavigate();

  /* --------------------------------- Schema --------------------------------- */
  //  First Step
  const loginSchemaStepOne = object({
    email: string().required().trim().email(),
  });
  // Second Step
  const loginSchemaStepTwo = object({
    password: string().required().trim().min(8).max(18),
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
    } else {
      postData(data);
    }
  };

  /* ------------------------------ Send Request Api ----------------------------- */
  const postData = (data) => {
    axios
      .post(process.env.REACT_APP_LOGIN, data)
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("token", JSON.stringify(res.data.token));
          setCheckLogin(false);
          setToken(true);
          navigate("/");
        }
      })
      .catch((err) => {
        setCheckLogin(true);
      });
  };

  /* ------------------------------- Change Step ------------------------------ */
  const handleBackToStepOne = () => {
    setStepOne(false);
    reset(formData);
  };

  /* ----------------------- Clear login ----------------------- */
  useEffect(() => {
    if (checkLogin) {
      if (errors.password) {
        setCheckLogin(false);
      }
    }
  }, [checkLogin, errors.password]);

  return (
    <main>
      <section className="form">
        <div className="row">
          <div className="login">
            <h3 className="title">{t("form.login-title")}</h3>
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
                  {checkLogin && (
                    <div className="error-message">{t("form.login-err")}</div>
                  )}
                </div>
              )}

              <Btn
                text={`${!stepOne ? t("btn.continue") : t("btn.sign-in")}  `}
                onClick={(e) => handleSubmit(onSubmit)(e)}
              />
              <div className="fotget-password">
                <Link> {t("form.fotget-password")}?</Link>
              </div>
            </form>
            <div className="form-divader">
              <hr />
              <span>OR</span>
              <hr />
            </div>
            <Btn text={t("btn.create-account") } link={"/register"} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
