// Functions for this project//

// updating the x-scale when clicked
function xScale(csvData, chosenXAxis) {
    // create scales with a 10% buffer
    var xLinearScale = d3.scaleLinear().domain([d3.min(csvData, d => d[chosenXAxis]) * 0.9,
        d3.max(csvData, d => d[chosenXAxis]) * 1.1
    ]).range[0, width]);
return xLinearScale;

}

// updating the y-scale when clicked
function yScale(csvData, chosenYAxis) {
    //creates scales with a buffer of 1
    var yLinearScale = d3.scaleLinear().domain([d3.min(csvData, d => d[chosenYAxis] - 1,
            d3.max(csvData, d => d[chosenYAxis]) + 1]).range([height, 0]);
        return yLinearScale;
    }