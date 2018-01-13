import React, { Component } from 'react';
import { ORFrame } from 'semiotic';

const colors = {
    "Renters": "#00a2ce",
    "Owned": "#ffbf00",
    "Free": "#b3331d",
}

const data = [
    {"year": 2017, "segment": "Renters", "value": 621400, pct: .33489625437},
    {"year": 2017, "segment": "Owned", "value": 1164600, pct: .62764753435},
    {"year": 2017, "segment": "Free", "value": 69500, pct: .03752294568}
]

export default class Barchart extends Component {
  render() {
    return (
      <div>
      <h3>Renters vs Owned vs Free Dwellings</h3>
      <ORFrame
      size={[ 700,400 ]}
      data={data}
      rAccessor={d => d.pct}
      oAccessor={d => d.year}
      dynamicColumnWidth={"value"}
      style={(d,i) => ({ fill: colors[d.segment], stroke: "white", strokeWidth: 1 })}
      type={"bar"}
      axis={{ orient: 'left', tickFormat: d => Math.floor(d * 100) + "%"}}
      margin={{ left: 60, top: 10, bottom: 80, right: 50 }}
      oPadding={0}
      oLabel={d => <text transform="rotate(45)">{d}</text>}
      />
      </div>
    );
  }
}
