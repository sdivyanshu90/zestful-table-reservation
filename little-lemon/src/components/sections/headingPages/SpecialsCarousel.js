import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import GreekSalad from '../../../assets/food/greek-salad.webp';
import Bruschetta from '../../../assets/food/bruschetta.jpeg';
import LemonDessert from '../../../assets/food/lemon-dessert.webp';
import SpecialCard from './CardInfo/SpecialCard';
import paneer_tikka_masala from '../../../assets/food/paneer_tikka_masala.jpg';
import chole from '../../../assets/food/chole.webp';
import rajmachawal from '../../../assets/food/rajma-chawal.jpg'

export default function CarouselPage() {
    return (
        <Carousel infiniteLoop={true} autoPlay={true} Interval={5000} showStatus={false}>
            <SpecialCard image={GreekSalad} name="Greek Salad" price="$12.99" description="Feta Cheese, tomato, lettuce"/>
            <SpecialCard image={Bruschetta}name="Bruschetta" price="$16.99" description="Bread, mango, green onions"/>
            <SpecialCard image={LemonDessert} name="Lemon Dessert" price="$8.50" description="Lemon bread, vanilla Icing"/>
            <SpecialCard image={paneer_tikka_masala} name="Paneer Tikka Masala" price="$14.99" description="Indian cottage cheese, various spices"/>
            <SpecialCard image={chole} name="Chole Bhature" price="$7.50" description="Chickpeas, deep-fried bread"/>
            <SpecialCard image={rajmachawal} name="Rajma Rice" price="$8.50" description="Kidney Beans, Basmati Rice, salads, chutneys"/>


        </Carousel>
    )
}