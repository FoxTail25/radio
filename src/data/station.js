const radioStation = [
    {
        category: ["relax", "pop"],
        name: "Шоколад",
        favorites:false,
        // img: 'https://chocoradio.ru/local/templates/site/assets/dist/images/logo.svg?6f4626bc151e087f9d70ff58807b939c',
        img: 'img/station_logo/shokolad.svg',
        radioDot: {
            dot_1: {
                href: "https://choco.hostingradio.ru:10010/fm"
            },
            dot_2: {
                href: "https://choco.hostingradio.ru:10010/fm?71050d68",
            }
        }
    },
    {
        category: ["relax"],
        name: "Relax.FM",
        favorites:false,
        img: 'img/station_logo/relax_fm.svg',
        radioDot: {
            dot_1: {
                href: "https://pub0201.101.ru:443/stream/air/aac/64/200?5660"
            }
        }
    },
    {
        category: ["pop"],
        name: "Monte Carlo",
        favorites:false,
        img: 'img/station_logo/monte_carlo.svg',
        radioDot: {
            dot_1: {
                href: "https://montecarlo.hostingradio.ru/montecarlo96.aacp?5d63",
            },
            dot_2: {
                href: "http://radio.gubernia.com:8000/radio9",
            }
        }
        
    },
    {
        category: ["шансон"],
        name: "Эльдорадио",
        favorites:false,
        img: 'img/station_logo/eldoradio.png',
        radioDot: {
            dot_1: {
                href: "http://emgspb.hostingradio.ru/eldoradio128.mp3",
            },
            dot_2: {
                href: "http://europaplus.hostingradio.ru:8000/eldoradio128.mp3",
            }
        }
        
    },
    {
        category: ["pop"],
        name: "Авторадио",
        favorites:false,
        img: 'img/station_logo/avtoradio-logo.png',
        radioDot: {
            dot_1: {
                href: "https://pub0201.101.ru:443/stream/air/aac/64/100?d29e93b1",
            },
            dot_2: {
                // href: "http://europaplus.hostingradio.ru:8000/eldoradio128.mp3",
            }
        }

    },
    {
        category: ["pop", "dance"],
        name: "DFM",
        favorites:false,
        img: 'img/station_logo/dfm.jpg',
        radioDot: {
            dot_1: {
                href: "http://23.105.238.4/dfm128.mp3",
                format: 'mp3',
                location:"Moskow"
            },
            dot_2: {
                href: "http://23.105.238.4/dfm96.aacp",
                format: 'acc',
                location:"Moskow",
            }
        }

    },
    {
        category: ["pop"],
        name: "LikeFM",
        favorites:false,
        img: 'img/station_logo/like_fm.png',
        radioDot: {
            dot_1: {
                href: "http://pub0101.101.ru:8000/stream/reg/mp3/128/region_like_89",
                format: 'mp3',
                location:"Воронеж"
            },
         
        }

    },
]

export default radioStation