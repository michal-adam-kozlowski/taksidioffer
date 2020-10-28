import React from "react";
import Slider from "react-slick";
import './ProgramCarousel.scss';
import Program from "./Program.js";
import './ProgramWrapper.scss';

var ProgramArr = [
    {
        index: 1,
        icon: 'fas fa-glass-cheers',
        program: "Party",
        info: 'Jeśli przede wszystkim chcesz świetnie się bawić i poznać masę nowych ludzi, ten wyjazd jest właśnie dla Ciebie!',
        btn: 'Imprezuj'
    },

    {
        index: 2,
        icon: 'fas fa-globe-europe',
        program: "Explore",
        info: 'Kładziemy nacisk na ciekawe doświadczenia, a wieczorne animacje opieramy na unikatowych atrakcjach.',
        btn: 'Zwiedzaj'
    },


    {
        index: 3,
        icon: 'fas fa-music',
        program: "Festiwal",
        info: 'Wyjazdy w stylu Festival to najciekawsze wyjazdy sezonu z masą atrakcji, warsztatów, apresów i koncertów.',
        btn: 'Baw się'
    },


    {
        index: 4,
        icon: 'fas fa-users',
        program: "Family",
        info: 'Ofertę Family kierujemy ją do tych, którzy chcą wspólnie ze swoimi pociechami spędzić owocny czas.',
        btn: 'Bądź z rodziną'
    },

];

class ProgramCarousel extends React.Component {
    render() {
        var settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 1150,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 770,
                    settings: {
                        dots: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <div className="containerCarousel">
                <Slider {...settings}> 
                {ProgramArr.map((singleProgram) =>
                    <Program icon={singleProgram.icon} program={singleProgram.program} info={singleProgram.info} btn={singleProgram.btn} />
                )}
                </Slider>
            </div>
        );
    }
}

export default ProgramCarousel





