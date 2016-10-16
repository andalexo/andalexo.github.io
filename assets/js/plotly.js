TESTER = document.getElementById('tester');

/* Current Plotly.js version */
console.log( Plotly.BUILD );

Plotly.plot( TESTER, [{
    x: [1, 2, 3, 4, 5],
    y: [1, 2, 4, 8, 16] }], {
    margin: { t: 0 } } );
