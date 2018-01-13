import React, { Component } from 'react';
import { XYFrame } from 'semiotic';

const data = [
    { id: 'linedata-1', color: '#00a2ce',
       data: [
            { year: 2013, dwellings: 1 },
            { year: 2014, dwellings: 2 },
            { year: 2015, dwellings: 3 },
            { year: 2016, dwellings: 4 },
            { year: 2017, dwellings: 5 },
           ]
    },
    { id: 'linedata-2', color: '#00a2ce',
       data: [
            { year: 2013, dwellings: 5 },
            { year: 2014, dwellings: 4 },
            { year: 2015, dwellings: 3 },
            { year: 2016, dwellings: 2 },
            { year: 2017, dwellings: 1 },
           ]
    },
]

class Linechart extends Component {
  render() {
    return (
      <div>
      <h3>Owner occuption vs renters, 2013-2017</h3>
      <XYFrame
        size={[700, 500 ]}
        lines={data}
        xAccessor={"year"}
        yAccessor={"dwellings"}
        lineDataAccessor="data"
        lineStyle={d => ({ stroke: d.color, fill: d.color })}
        axes={[
            { orient: 'left', tickFormat: d => d },
            { orient: 'bottom', tickValues: [ 2013, 2014, 2015, 2016, 2017]}
          ]}
        />
      </div>
    );
  }
}

export default Linechart;
