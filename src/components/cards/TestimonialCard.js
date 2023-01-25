const TestimonialCard = ({ testimonial }) => {
  return (
    <article className='testimonial-card'>
      <div>
        <span className='sr-only'>{testimonial.rating.length} out of 5 stars</span>
        <span aria-hidden='true'>{testimonial.rating}</span>
      </div>
      <div className='name-title'>
        <img src={testimonial.image} alt='' />
        <h3>{testimonial.name}</h3>
      </div>
      <p>{testimonial.review}</p>
    </article>
  );
};
export default TestimonialCard;
