import { hasClassProps } from "@utils/helpers";

function BrandLogoLight({ className }) {
  return (
    <>
      <img
        className={`brandLogo logo-dark${hasClassProps(className)}`}
        src="/image/brand-logo/hod-logo.png"
        alt="brand logo"
      />
    </>
  );
}
function BrandLogoDark({ className, logoUrl = "/image/brand-logo/hod-logo.png" }) {
  return (
    <>
      <img
        className={` logo-light${hasClassProps(className)}`}
        src={logoUrl}
        alt="brand logo"
      />
    </>
  );
}
export default function BrandLogo({ className, type, logoUrl }) {
  let logoSettings = {
    className,
    type,
    logoUrl,
  };
  if (type === "white") {
    return <BrandLogoLight {...logoSettings} />;
  } else {
    return <BrandLogoDark {...logoSettings} />;
  }
}
