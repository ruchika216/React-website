import React, { Component } from 'react'
import Card from './CardUI';

import img1 from './../../assets/col3.jpg';
import img2 from './../../assets/col5.jpg';
import img3 from './../../assets/col7.jpg';
import img4 from './../../assets/col9.jpg';

class Cards extends Component {
    render(){
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <Card 
                    imgsrc={img1} 
                    title='Goa' 
                    text="Goa, with its sunny beaches, seafood, nightlife, parties, flea markets and church exudes an enticing vibe that is hard to resist."/>
                </div>  
                <div className="col-md-3">
                    <Card 
                    imgsrc={img2} 
                    title='Himachal' 
                    text="You’re off to Great Places! Today is your day! Your mountain is waiting, so get on your way! and Himachal Pradesh is known for the same."/>
                </div>
                <div className="col-md-3">
                    <Card 
                    imgsrc={img3} 
                    title='Manali' 
                    text="The hill town is evergreen to unwind and celebrate your vacation amidst the beauty of nature and several attractions all vying for your attention."/>
                </div>
                <div className="col-md-3">
                    <Card 
                    imgsrc={img4} 
                    title='Kerala' 
                    text="From natural beauty, to its culture and traditions, this state in the south of India does justice to its sobriquet of ‘God’s Own Country’."/>
                </div>
            </div>
            
        </div>
    );
}
}

export default Cards
