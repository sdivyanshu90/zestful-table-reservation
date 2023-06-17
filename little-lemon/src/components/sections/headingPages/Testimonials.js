import Carousel from './TestimonialCarousel'
import TestimonialCard from './CardInfo/TestimonialCard';
export default function Testimonials() {
    return (
        <section className="testimonials">
            <article className="testimonials-topbar">
                    <h1>Testimonials</h1>
            </article>


            <section className="testimonials-cards">
                <TestimonialCard name="Micheal Caldwell" description="This is the best Mediterranean food that I've ever had!"/>
                <TestimonialCard name="Alan Chen" description="My Shiba Inu, Mugi, really loved the cozy vibes and 
                delicious food here."/>
                <TestimonialCard name="Casey Lau" description="I've had some great Mediterranean food before, but none of them beats
             Little Lemon in flavor and texture."/>
                <TestimonialCard name="John Rosenblum" description="Great food, welcoming staff, cozy atmosphere. A great place to 
                treat your kids to."/>
                <TestimonialCard name="Jim Reynor" description="The food here really refreshed me after a late night shift
                at the local supply depot."/>
                <TestimonialCard name="Brian Dean" description="I came to Little Lemon after a 5 hour flight from the East Coast.
                 The food here tasted so delicious after the trip here."/>
                <TestimonialCard name="Tyler Tohmine" description="The food here was fire!! Everyone should try this place
                 out at least once if they live in Chicago."/>
                <TestimonialCard name="Jack Hu" description="This restaurant served as a perfect dinner for me after a 
                long night of studying. I would definitely order from here again!"/>
                <TestimonialCard name="Rahul" description=" Highly recommended for a memorable 
                and exceptional Indian cuisine experience." />
                <TestimonialCard name="Kavya" description=" A must-visit for an extraordinary culinary journey in authentic Indian cuisine." />
                <TestimonialCard name="Nisha" description="A haven for food lovers seeking the best of Indian flavors." />
                <TestimonialCard name="Sodhi" description="The Chole Bhature showcased a perfect balance of flavors and textures, while the 
                Rajma Rice impressed with tender kidney beans in a rich tomato-based gravy." />
            </section>

            <section className="testimonials-carousel">
                <Carousel />
            </section>
        </section>
    );
}