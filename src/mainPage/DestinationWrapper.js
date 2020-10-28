
import React from 'react';
import './Destination.scss';
import Destination from './Destination.js'

var DestinationArr = [
    {
        index: 2,
        image: "./img/francja.jpg",
        country_name: 'Francja',
        number_of_offers: 3,
        more_destinations: "Wyjazdy do Francji",
    },

    {
        index: 1,
        image: './img/szwajcaria.jpg',
        country_name: 'Szwajcaria',
        number_of_offers: 2,
        more_destinations: "Wyjazdy do Szwajcarii",
    }

];

DestinationArr.sort(function(a,b){
    return parseInt(a.index)  - parseInt(b.index);
   })


function DestinationWrapper() {
    return (
        <div id="destinationContainer">
            <div className="content">
                <div className="mainText">
                    <h2>Obierz swój kierunek</h2>
                    <p className="mainText">TAKSIDI to zorganizowane wyjazdy narciarskie i snowboardowe dla młodych i aktywnych ludzi do renomowanych alpejskich ośrodków we Francji, Włoszech, Szwajcarii i Austrii. Nasze wyjazdy to połączenie dobrej zabawy na najlepszych stokach, imprez, warsztatów i mnóstwa dodatkowych atrakcji.</p>
                </div>
                <div className="destinationWrapper">
                    {DestinationArr.map((oneCountry,index) =>
                        <Destination key={index} text={oneCountry.text} image={oneCountry.image} country_name={oneCountry.country_name} number={oneCountry.number_of_offers} />
                    )}
                    <div className="oneDestination">
                        <div className="text">
                            <h3>... i wiele więcej</h3>
                            <p>Sprawdź wszystkie dostępne destynacje w sezonie 2020/2021.</p>
                            <button className="destinationButton btn">Sprawdź</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DestinationWrapper






