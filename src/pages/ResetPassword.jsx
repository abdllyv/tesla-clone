/* ---------------------------------- React --------------------------------- */
import { useContext, useEffect, useState } from "react";

/* --------------------------------- Router --------------------------------- */
import { useNavigate } from "react-router-dom";

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
import { Auth } from "../utils/Auth";

const ResetPassword = () => {
  /* ------------------------------- Local State ------------------------------ */
  const [checkPassword, setCheckPassword] = useState(false);

  /* -------------------------------- Navigate -------------------------------- */
  const navigate = useNavigate();

  /* -------------------------------- Language -------------------------------- */
  const { t } = useTranslation();

  /* --------------------------------- Context -------------------------------- */
  const { setToken } = useContext(Auth);

  /* --------------------------------- Schema --------------------------------- */
  const passwordSchema = object({
    password: string().required().trim().min(8).max(18),
    repassword: string().required().trim().min(8).max(18),
  });

  /* ----------------------------- React Hook Form ---------------------------- */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(passwordSchema),
  });

  /* ------------------------------ Confirm Login ----------------------------- */
  const onSubmit = async (data) => {
    if (data.password === data.repassword) {
      await axios
        .post(process.env.REACT_APP_CHANGE_PASSWORD, {
          token: JSON.parse(localStorage.getItem("token")),
          password: data.password,
        })
        .then((res) => {
          if (res.status === 200) {
            navigate("/login");
            setToken(false);
            localStorage.setItem("token", JSON.stringify(""));
          }
        })
        .catch((err) => console.log(err));
      setCheckPassword(false);
    } else {
      setCheckPassword(true);
    }
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
            <h3 className="title">Reset Password</h3>
            <form className="register-form" noValidate>
              <div className="general-info">
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

              <Btn
                text={"Change Password"}
                onClick={(e) => handleSubmit(onSubmit)(e)}
              />
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ResetPassword;
