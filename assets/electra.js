function plot() {
	Plotly.d3.csv("/graphs/electra/electra-w.csv", 
	              function(err1, ew_data) {
  		Plotly.d3.csv("/graphs/electra/electra-h.csv",
		          function(err2, eh_data) {
			Plotly.d3.csv("/graphs/electra/electra-hc.csv",
					function(err3, ehc_data) {
	Plotly.d3.tsv("/graphs/electra/weight.tsv", 
					function(err1, w_data) {
		Plotly.d3.tsv("/graphs/electra/height.tsv",
				function(err2, h_data) {
			Plotly.d3.tsv("/graphs/electra/headcirc.tsv",
					function(err3, hc_data) {

                        process(ew_data, w_data, "weight");
                        process(eh_data, h_data, "height");
                        process(ehc_data, hc_data, "headcirc");
			});
		});
	});
			});
  		});
	});
	
}

function process(data, who, name) {

	// Electa's weight
	var xe = [], ye = [];
	for (var i=0; i<data.length; i++) {
		row = data[i];
		xe.push( row['date'] );
		ye.push( row[name] );
	}
	var ele_trace = {
		name: name, mode: 'markers', type: 'scatter',
		x: xe, y: ye,
		marker: {
			size: 8.,
			symbol: 'x', 
			opacity: 1, 
		},
		legendgroup: name,
		showlegend: true, 
	}

	// WHO P50
	var x = [], y = [];
	for (var i=0; i<who.length; i++) {
		row = who[i];
		x.push( row['Date'] );
		y.push( row["M"] );
	}
	var who_p50_trace = {
		name: 'WHO-P50', mode: 'line', type: 'scatter',
		x: x, y: y,
		fill: "tonexty",
		fillcolor: 'rgba(50,200,50,0.5)', 
		legendgroup: "WHO",
		showlegend: true, 
	}

	// WHO P25
	var x = [], y = [];
	for (var i=0; i<who.length; i++) {
		row = who[i];
		x.push( row['Date'] );
		y.push( row["P25"] );
	}
	var who_p25_trace = {
		name: 'P25', mode: 'line', type: 'scatter',
		x: x, y: y,
		fill: "tonexty",
        fillcolor: 'rgba(20,150,20,0.5)', 
        line: {
            color: 'transparent', 
        }, 
		legendgroup: "WHO",
		showlegend: false, 
	}

	// WHO weight P75
	var x = [], y = [];
	for (var i=0; i<who.length; i++) {
		row = who[i];
		x.push( row['Date'] );
		y.push( row["P75"] );
	}
	var who_p75_trace = {
		name: 'P75', mode: 'line', type: 'scatter',
		x: x, y: y,
		fill: "tonexty",
        fillcolor: 'rgba(50,200,50,0.5)', 
        line: {
            color: 'transparent', 
        }, 
		legendgroup: "WHO",
		showlegend: false, 
	}

	// WHO weight P15
	var x = [], y = [];
	for (var i=0; i<who.length; i++) {
		row = who[i];
		x.push( row['Date'] );
		y.push( row["P15"] );
	}
	var who_p15_trace = {
		name: 'P15', mode: 'line', type: 'scatter',
        x: x, y: y,
        line: {
            color: 'transparent', 
        }, 
		legendgroup: "WHO",
		showlegend: false, 
	}

	// WHO weight P85
	var x = [], y = [];
	for (var i=0; i<who.length; i++) {
		row = who[i];
		x.push( row['Date'] );
		y.push( row["P85"] );
	}
	var who_p85_trace = {
		name: 'P85', mode: 'line', type: 'scatter',
        x: x, y: y,
        fill: "tonexty",
        fillcolor: 'rgba(20,150,20,0.5)', 
        line: {
            color: 'transparent', 
        }, 
		legendgroup: "WHO",
		showlegend: false, 
	}

    // TRACES
	var traces = [ele_trace,
                  who_p15_trace, who_p25_trace,
				  who_p50_trace, 
				  who_p75_trace, who_p85_trace
                 ]; 
    var low_x = new Date(xe[0]).getTime() - 1e9;
    var high_x = new Date(xe[xe.length-1]).getTime() + 1e9;

    var low_y = ye[0]-ye[0]*0.15;
    var high_y = ye[ye.length-1]+ye[ye.length-1]*0.5;

    var now = new Date().getTime();
    console.log(now);
    for (i=0; i<x.length; i++){
        if (new Date(x[i]).getTime() > now){
            break;
        }
    }
    console.log(i)
    
    if (name !== "weight"){
        var yunit = "cm";
    } else {
        var yunit = "kg";
    }
    var title = name.concat(", ".concat(yunit));

	Plotly.newPlot(name, traces, 
		{
            title: name,
            xaxis: {
                type: 'date', 
                range: [low_x, high_x],
            //     title: "Date"
            },
            yaxis: {
                type: 'linear', 
                range: [low_y, y[i]],
                title: title
            }
		});
}

plot();
