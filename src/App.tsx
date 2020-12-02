// @ts-nocheck
import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    let stred = SMap.Coords.fromWGS84(14.41, 50.08);
		let mapa = new SMap(JAK.gel("mapa"), stred, 10);
		mapa.addDefaultLayer(SMap.DEF_BASE).enable();
    mapa.addDefaultControls();
    
    var c = new SMap.Card();
    c.setSize(200, 200); /* Šířka, výška */

    c.getHeader().innerHTML = "<h6>Toto je záhlaví vizitky.</h6>";
    c.getFooter().innerHTML = "<h6>Toto je zápatí vizitky.</h6>";

    c.getBody().style.margin = "5px 0px";
    c.getBody().style.backgroundColor = "#ccc";
    for (var i=0;i<10;i++) { /* Hodně textu, aby přetekl */
        c.getBody().innerHTML += "Toto je dlouhý text.";
    }

    var layer = new SMap.Layer.Marker(); /* Vrstva pro značku */
    mapa.addLayer(layer).enable();

    var marker = new SMap.Marker(mapa.getCenter()); /* Značka s vizitkou uprostřed mapy */
    marker.decorate(SMap.Marker.Feature.Card, c);
    layer.addMarker(marker);   
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <div id="mapa" style={{ width: '600px', height: '400px' }}></div>
      </header>
    </div>
  );
}

export default App;
