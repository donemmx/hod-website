import { Link } from "react-router-dom";

const ServiceCardOne = ({
  to = "/",
  className,
  iconSrc,
  title,
  text,
  linkText,
}) => {
  return (
    <div className={`service-card${className ? ` ${className}` : ""}`}>
      <div className="service-card__icon">
        <img src={iconSrc} alt="image alt" />
      </div>
      <div className="service-card__body">
        <h3 className="service-card__title">{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ServiceCardOne;
