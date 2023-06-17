import Carousel from './SpecialsCarousel';
import GreekSalad from '../../../assets/food/greek-salad.webp';
import Bruschetta from '../../../assets/food/bruschetta.jpeg';
import LemonDessert from '../../../assets/food/lemon-dessert.webp';
import SpecialCard from './CardInfo/SpecialCard';
import paneer_tikka_masala from '../../../assets/food/paneer_tikka_masala.jpg'
import chole from '../../../assets/food/chole.webp'
import rajmachawal from '../../../assets/food/rajma-chawal.jpg'


export default function Specials() {
    return (
        <section className="specials">
            <article className="specials-topbar">
                <h1>This weeks specials</h1>
                <a className="action-button" href={require('../../../assets/menu.webp')} target="_blank" rel="noreferrer">Online Menu</a>
            </article>

            <section className="specials-cards">
                <SpecialCard image={GreekSalad} name="Greek Salad" price="$12.99" description="Refreshing salad, made with tomato, lettuce, feta cheese, and olives.
                 Dressed with salt, hot pepper, and olive oil."/>
                <SpecialCard image={Bruschetta}name="Bruschetta" price="$16.99" description="Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with
                 salt and olive oil."/>
                <SpecialCard image={LemonDessert} name="Lemon Dessert" price="$8.50" description="Fresh baked lemon bread coated in salt and sugar. Powdered in citrus
                 and lemon zest."/>
                <SpecialCard image={paneer_tikka_masala} name="Paneer Tikka Masala" price="$14.99" description="A delicious Indian curry with 
                 marinated paneer, onions, peppers, and creamy tomato sauce, perfect with naan or rice."
                />
                <SpecialCard image={chole} name="Chole Bhature" price="$7.50" description="Chole Bhature is a popular North Indian dish featuring spicy chickpea curry 
                served with deep-fried bread. It offers a flavorful combination of aromatic spices and crispy textures, making it a beloved choice for breakfast or brunch."
                />
                <SpecialCard image={rajmachawal} name="Rajma Rice" price="$8.50" description="A flavorful and comforting Indian dish with red kidney beans in a tomato-based gravy, 
                served with steamed rice, perfect for a wholesome and satisfying meal." 
                />
            </section>

            <section className="specials-carousel">
                <Carousel />
            </section>
        </section>
    );
}