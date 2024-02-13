var config = {
    style: 'mapbox://styles/lemon-juice/cj8tpldz32yeg2roaox9pvq4e',
    accessToken: 'pk.eyJ1IjoibGVtb24tanVpY2UiLCJhIjoiY2o4dHBoMWxiMHFmdTM0cXpqY25od3ExYiJ9.SvaqVo0eq58n2yU8BzGR1w',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'The Story of Singapore River',
    subtitle: 'From a dirty and messy river to a successful waterfront tourist attraction',
    byline: 'An anonymous knowledge carrier',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Water system in Singapore',
            image: 'images/water-catchment-area.jpg',
            description: 'In the challenging environment of scarce water resources, Singapore places great emphasis on the protection of water resources. While maintaining clean water bodies, some water resources have also been developed for tourism as valuable natural assets, with the Singapore River being the most typical example.',
            location: {
                center: [103.79005, 1.36558],
                zoom: 10.43,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'waterway',
                     opacity: 1,
                     duration: 5000
                 },
                 {
                     layer: 'singapore-river',
                     opacity: 0
                 },
                 {
                     layer: 'mapbox-satellite',
                     opacity: 0
                 },
            ],
            onChapterExit: [

                 {
                     layer: 'clarke-quay',
                     opacity: 0
                 }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'History of Singapore River',
            image: 'images/singapore river history.jpg',
            description: 'After 1819, the Singapore River experienced substantial congestion as a result of swift urban development and burgeoning trade. This surge in activity also led to water pollution stemming from the disposal of waste, sewage, and industrial by-products along the riverbanks. Recognizing the situation, Prime Minister Lee Kuan Yew initiated a campaign to restore the cleanliness of Singapore river in 1977. In 1987, Singapore River has significantly changed from one that was heavily busy and polluted to one that is clean for marine animals. ',
            location: {
                center: [103.84415, 1.28834],
                zoom: 15.38,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'singapore-river',
                     opacity: 1,
                 },   
                 {
                     layer: 'waterway',
                     opacity: 1,
                 }             
            ],
            onChapterExit: [
                // {
                //     layer: 'mapbox-satellite',
                //     opacity: 0
                // }
                // {
                //     layer: 'clarke-quay',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Recreational Areas along the Singapore River',
            image: 'images/map of singapore river.png',
            description: 'In the 1990s, the Urban Redevelopment Authority of Singapore initiated the Singapore River Promenade project, constructing a three-kilometer-long riverside walkway. Three former quays (Robertson Quay, Clarke Quay, Boat Quay)   were redeveloped into leisure areas, featuring a variety of restaurants, bars, shopping malls, and shops.',
            location: {
                center: [103.84777, 1.28450],
                zoom: 15.13,
                pitch: 53.51,
                bearing: -24.44,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'singapore-river',
                     opacity: 1,
                     duration: 5000
                 },
                 {
                     layer: 'mapbox-satellite',
                     opacity: 1,
                 },
                 {
                    layer: 'waterway',
                    opacity: 0
                }
            ],
            onChapterExit: [

                 {
                     layer: 'clarke-quay',
                     opacity: 0
                 }
            ]
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Regeneration of  Clarke Quay ',
            image: 'images/Clarke Quay.webp',
            description: 'In 2003, in order to attract more people to Clarke Quay and enhance its commercial value, Keppel Land invited SPARK to redesign the area. The designers preserved the original appearance of the old buildings while incorporating modern creative designs for the exterior colors, lighting, and landscape to meet the demands of the modern city. This transformation has contributed to such a popular tourist destination.',
            location: {
                center: [103.84493, 1.28983],
                zoom: 17.37,
                pitch: 59.49,
                bearing: -28.79
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'clarke-quay',
                     opacity: 1
                 },
                 {
                    layer: 'singapore-river',
                    opacity: 0
                },
                {
                    layer: 'waterway',
                    opacity: 0
                }               
            ],
            onChapterExit: [
            ]
        }
    ]
};
