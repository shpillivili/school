ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [48.87220463563773,2.3541725177582364],
        zoom: 18
    });

    var myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Point", // тип геометрии - точка
            coordinates: [48.87220463563773,2.3541725177582364] // координаты точки
        }
    });

    var myPlacemark = new ymaps.Placemark([48.87220463563773,2.3541725177582364], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/myIcone.png',
        iconImageSize: [28, 40],
        iconImageOffset: [-3, -42]
    });
    
    // Размещение геообъекта на карте.
    myMap.geoObjects.add(myPlacemark);

    myMap.controls.remove('zoomControl');
    myMap.controls.remove('geolocationControl');
    myMap.controls.remove('searchControl');
    myMap.controls.remove('routeButtonControl');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('fullscreenControl');
    myMap.controls.remove('typeSelector');
    myMap.controls.remove('rulerControl');
    
}