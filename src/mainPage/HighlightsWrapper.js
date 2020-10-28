import React, { Component } from 'react';
import Highlight from './Highlight.js';
import './HighlightsWrapper.scss';
import $ from 'jquery';

var highlightsArr = [
    {
        name: 'Warsztaty kulinarne',
        image: './img/warsztaty-kulinarne.jpg',
        text: 'Na wyjazdy zabieramy zawodowego kucharza, który będzie prowadził dla Was warsztaty kulinarne. Będzie to niepowtarzalna okazja, żeby ugotować coś wspólnie pod okiem specjalisty. Przy okazji możecie się wiele dowiedzieć na temat jedzenia, a także poznać nowe osoby, bowiem nic tak nie łączy jak np. wspólne rolowanie sushi. Warsztaty będą bezpłatne, uczestnicy zrzucają się jedynie na zużywane składniki.',
        tagParty: false,
        tagActivities: true,
        tagSightseeing: true

    },
    {
        name: 'Warsztaty taneczne ',
        image: './img/warsztaty-taneczne.jpg',
        text: 'Niepowtarzalna okazja, żeby nauczyć się tańczyć! Kursy będą trwały ok. 2h dziennie, każdy będzie mógł dołączyć do jednego wybranego przez siebie kursu. Jeśli będą miejsca, to można będzie chodzić na więcej. Zajęcia będą skierowane przede wszystkim do osób początkujących, ale jeśli Wasze umiejętności są wyższe, to instruktorzy stworzą także grupę zaawansowaną.',
        tagParty: false,
        tagActivities: false,
        tagSightseeing: true
    },
    {
        name: 'Warsztaty ski-freestyle ',
        image: './img/ski-freestyle.jpg',
        text: 'Darmowe, otwarte warsztaty ski-freestyle - niezależnie od Twojego poziomu zaawansowania! Nieloty też naucza się latać pod troskliwym okiem Instruktora!',
        tagParty: true,
        tagActivities: false,
        tagSightseeing: false
    },
    {
        name: 'Warsztaty snb-freestyle ',
        image: './img/snowboard-freestyle.jpg',
        text: 'Otwarte warsztaty snb-freestyle - niezależnie od Twojego poziomu zaawansowania! Nieloty też naucza się latać pod troskliwym okiem Instruktora!',
        tagParty: false,
        tagActivities: true,
        tagSightseeing: false
    },
    {
        name: 'Warsztaty browarnicze ',
        image: './img/warsztaty-browarnicze.jpg',
        text: 'Fachowe szkolenie na temat produkcji piwa, warzenia piwa w domu, jego gatunków, jakości itd. Prowadzone przez doświadczonego piwowara w formie luźnej gawędy przy... piwie. Na koniec degustacja połączona z konkursem!',
        tagParty: false,
        tagActivities: false,
        tagSightseeing: true
    },
    {
        name: 'Warsztaty wizażu ',
        image: './img/warsztaty-wizazu.jpg',
        text: 'Zawodowa wizażystka opowie Wam o typach urody i cery, a także omówi jak dobierać sobie kosmetyki, jak dobrać optymalny makijaż do swojej twarzy, jak przejść szybko z makijażu dziennego na wieczorowy, etc.',
        tagParty: false,
        tagActivities: true,
        tagSightseeing: false
    },
    {
        name: 'Warsztaty fotograficzne ',
        image: './img/warsztaty-fotograficzne.jpg',
        text: 'Prowadzone przez zawodowego fotografa, który podzieli się z Wami swoją wiedzą na temat robienia poprawnych technicznie zdjęć oraz opowie jak wyciągnąć maksa z Waszych aparatów. Odbędą się 2 spotkania. Po pierwszym spotkaniu teoretycznym robicie fotki, które będą omawiane na kolejnym.',
        tagParty: false,
        tagActivities: true,
        tagSightseeing: true
    },
    {
        name: 'Warsztaty barmańskie ',
        image: './img/warsztaty-barmanskie.jpg',
        text: 'Zawodowy barman zaprezentuje Wam trochę popisów znad lady, a do tego opowie o tym jak pić alkohol, jak robić drinki oraz jak mieszać, żeby nie namieszać ;) Bardzo ciekawa opcja dla tych, którzy chcą poszerzyć horyzonty poza tradycyjne szoty ojczystej...',
        tagParty: false,
        tagActivities: true,
        tagSightseeing: false
    },
    {
        name: 'Warsztaty masażu ',
        image: './img/warsztaty-masazu.jpg',
        text: 'Poznaj sekrety profesjonalnego masażu, masuj i pozwól się wymasować. Pomasuj i bądź pomasowany. Należy Ci się po ciężkim dniu na stoku.',
        tagParty: false,
        tagActivities: true,
        tagSightseeing: false
    },
    {
        name: 'Serwisowanie sprzętu ',
        image: './img/serwisowanie-sprzetu.jpg',
        text: 'Ciekawa opcja dla tych, którzy chcą poznać tajniki serwisowania sprzętu (smarowanie i ostrzenie). Będziecie mieli niepowtarzalną okazję dowiedzieć się, co zrobić, żeby wycisnąć maksa z Waszych nart i desek.',
        tagParty: false,
        tagActivities: true,
        tagSightseeing: false
    },
    {
        name: 'Szkolenie na tyczkach ',
        image: './img/tyczki.jpg',
        text: 'Zapewniamy dwa dni treningu na tyczkach! Nasi instruktorzy wskażą, jak technicznie najlepiej je mijać.',
        tagParty: false,
        tagActivities: false,
        tagSightseeing: true
    },


];




class HighlightsWrapper extends Component {

    constructor(props) {
        super(props);
        this.scroll = this.scroll.bind(this);
        this.state = {
            tag: "all",
        }
    }



    scroll(direction) {
        let far = $('.imageContainer').width() / 1 * direction;
        let pos = $('.imageContainer').scrollLeft() + far;
        $('.imageContainer').animate({ scrollLeft: pos }, 1000)
    }

    

    handleAll = () => {
        this.setState({ tag: 'all' });
    };

    componentDidUpdate() {
        console.log(this.state.tag)
    };
    

    render() {

        if (this.state.tag === 'all') {
            return (
                <div id="highlightsContainer">
                    <div class="textBox">
                        <h2>Doświadczaj więcej</h2>
                        <p>Poniżej prezentujemy listę atrakcji, które są realizowane na naszych wyjazdach. Zaznaczamy, że szczegółową rozpiskę potwierdzonych atrakcji wyjazdowych każdy uczestnik otrzyma na około 5 dni przed swoim wyjazdem i będzie ona wgrana w jego Panel Klienta </p>
                    </div>
                    <div className='main' id="main">
                        <div className='wrapper' >
                            <div className='blockLeft'></div>
                            <div className="prev" onClick={this.scroll.bind(null, -1)}>&#10094;</div>
                            <div className="imageContainer">
                                {highlightsArr.map((el) =>
                                    <Highlight name={el.name} image={el.image} info={el.text} />
                                )}
                            </div>
                            <div className="next" onClick={this.scroll.bind(null, 1)}>&#10095;</div>
                            <div className='blockRight'></div>
                        </div>
                    </div>
                    <button class="btn">Sprawdź atrakcje</button>
                </div>
            )
        }
    }
}

export default HighlightsWrapper;
