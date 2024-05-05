const ServiceCardTwo = ({ iconSrc, title, description, aos }) => {
  return (
    <div
      className="service-card undefined aos-init aos-animate"
      data-aos-duration={1000}
      data-aos={aos}
    >
      <div className="service-card__icon">
        <img src={iconSrc} alt="image alt" className="inline-svg" />
      </div>
      <div className="service-card__body">
        <h3 className="service-card__title">{title} </h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCardTwo;
