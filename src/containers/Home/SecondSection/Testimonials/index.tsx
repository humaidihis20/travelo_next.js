import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
    return (
        <>
            <h3 className="text-heading-3 font-label font-bold mb-1 mt-10">
                Testimonial Pelanggan
            </h3>
            <p className="text-heading-4 mb-4">
                Pendapat Pelanggan tentang kami
            </p>

            <div className="flex justify-between">
                {Array.from({ length: 4 }).map((_, index) => {
                    return <TestimonialCard key={index} />
                })}
            </div>
        </>
    )
}

export default Testimonials;