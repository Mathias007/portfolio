import React from "react";

export default function TestimonialBox(props) {
    const { testimonialContent, authorName, authorTitle } = props;

    return (
        <section className="testimonial-box">
            <p className="testimonial-box__text">{testimonialContent}</p>
            {authorName ? (
                <h3 className="testimonial-box__meta meta">
                    {authorName} <br />
                    {authorTitle ? (
                        <span className="meta__addition-info">
                            {authorTitle}
                        </span>
                    ) : null}
                </h3>
            ) : null}
        </section>
    );
}
