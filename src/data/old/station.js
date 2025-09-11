const radioStation = [
    {
        name: "Шоколад",
        category: ["relax", "pop"],
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
        name: "Relax.FM",
        category: ["relax"],
        favorites:false,
        img: 'img/station_logo/relax_fm.svg',
        radioDot: {
            dot_1: {
                href: "https://pub0201.101.ru:443/stream/air/aac/64/200?5660"
            }
        }
    },
    {
        name: "Monte Carlo",
        category: ["pop"],
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
        name: "Эльдорадио",
        category: ["шансон"],
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
        name: "Авторадио",
        category: ["pop"],
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
        name: "DFM",
        category: ["pop", "dance"],
        favorites:false,
        img: 'img/station_logo/dfm.jpg',
        radioDot: {
            dot_1: {
                href: "https://dfm.hostingradio.ru/dfm128.mp3",
                // href: "http://23.105.238.4/dfm128.mp3",
                format: 'mp3',
                location:"Moskow"
            },
            dot_2: {
                href: "http://23.105.238.4/dfm96.aacp",
                // href: "https://dfm.hostingradio.ru/dfm96.aacp",
                format: 'acc',
                location:"Moskow",
            }
        }

    },
    {
        name: "LikeFM",
        category: ["pop"],
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
    {
        name: "Love",
        category: ["pop"],
        favorites:false,
        img: 'img/station_logo/john-love2.png',
        radioDot: {
            dot_1: {
                href: "https://centova.gr-net.gr/proxy/love/stream",
                format: 'mp3',
                location:"Греция, Солоники"
            },
        }

    },
    {
        name: "Tranzistor100.3",
        category: ["pop"],
        favorites:false,
        img: 'https://tranzistor1003.gr/wp-content/uploads/2022/06/300X300-TRANZISTOR-1003-LOGO-TRANSPARENT-1.png',
        radioDot: {
            dot_1: {
                href: "https://metromedia.live24.gr/tranzistor1003thess",
                format: 'mp3',
                location:"Греция, Солоники",
            },
        }

    },
    {
        name: "Радиокнига",
        category: ["pop"],
        favorites:false,
        img: 'https://top-radio.ru/assets/image/radio/180/kniga.jpg',
        radioDot: {
            dot_1: {
                href: "https://bookradio.hostingradio.ru:8069/fm",
                format: 'mp3',
                location:"",
            },
        }

    },
]

export default radioStation