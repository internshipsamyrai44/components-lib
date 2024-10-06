import { ComponentPropsWithoutRef } from "react";

type policyLinks = [string, string]

export type RecaptchaProps = {
  variant: "default" | "checked" | "loading" | "withError" | "expired"
  policyLinks?: policyLinks
  errorMessage?: string
  expiredMessage?: string
  label?: string
  onClick?: () => void
} & ComponentPropsWithoutRef<"div">


export const Recaptcha = (props: RecaptchaProps) => {
  const {
    variant,
    policyLinks = [
      "https://policies.google.com/privacy?hl=ru",
      "https://policies.google.com/terms?hl=ru"
    ],
    errorMessage = "Please verify that you are not a robot",
    expiredMessage = "Verification expired. Check the checkbox again.",
    label = "I’m not a robot",
    onClick,
    ...rest
  } = props;

  return (
    <div {...rest} className={variant === "withError" ? "" : ""}>
      <div className={""}>
        <div className={""}>{label}</div>
        <div className={""}>
          <a href={policyLinks[0]}>Privacy</a>
          <span> - </span>
          <a href={policyLinks[1]}>Terms</a>
        </div>
        {variant === "expired" && <div className={""}>{expiredMessage}</div>}
      </div>
      {variant === "withError" && <div className={""}>{errorMessage}</div>}
    </div>
  );
};
