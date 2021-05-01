import React from "react";

export default function TestimonialBox(props) {
    const { testimonialContent, authorName, authorTitle } = props;

    return (
        <section className="testimonial-box">
            <p className="testimonial-box__text">{testimonialContent}</p>
            <h3 className="testimonial-box__meta meta">
                {authorName} <br />
                <span className="meta__addition-info">{authorTitle}</span>
            </h3>
        </section>
    );
}
