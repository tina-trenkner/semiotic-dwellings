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
    {"year": 2017, "segment": "Free", "value": 69500, pct: .03752294568},
    {"year": 2016, "segment": "Renters", "value": 604900, pct: .33076334},
    {"year": 2016, "segment": "Owned", "value": 1155400, pct: .6317804},
    {"year": 2016, "segment": "Free", "value": 68500, pct: .03745626},
    {"year": 2015, "segment": "Renters", "value": 589100, pct: .32666075},
    {"year": 2015, "segment": "Owned", "value": 1146700, pct: .6358545},
    {"year": 2015, "segment": "Free", "value": 67600, pct: .03748475},
    {"year": 2014, "segment": "Renters", "value": 574600, pct: .32255529},
    {"year": 2014, "segment": "Owned", "value": 1140100, pct: .64000225},
    {"year": 2014, "segment": "Free", "value": 66700, pct: .03744246},
    {"year": 2013, "segment": "Renters", "value": 560700, pct: .31839864},
    {"year": 2013, "segment": "Owned", "value": 1134300, pct: .64412266},
    {"year": 2013, "segment": "Free", "value": 66000, pct: .03747871},
    {"year": 2012, "segment": "Renters", "value": 548400, pct: .3143414},
    {"year": 2012, "segment": "Owned", "value": 1130600 , pct: .64805686},
    {"year": 2012, "segment": "Free", "value": 65600, pct: .03760174},
    {"year": 2011, "segment": "Renters", "value": 537700, pct: .31061175},
    {"year": 2011, "segment": "Owned", "value": 1127000, pct: .65103114},
    {"year": 2011, "segment": "Free", "value": 66400, pct: .03835711},
    {"year": 2010, "segment": "Renters", "value": 527500, pct: .30681091},
    {"year": 2010, "segment": "Owned", "value": 1124500 , pct: .65404525},
    {"year": 2010, "segment": "Free", "value": 67200, pct: .03908567},
    {"year": 2009, "segment": "Renters", "value": 516800, pct: .30309073},
    {"year": 2009, "segment": "Owned", "value": 1120400, pct: .65708756},
    {"year": 2009, "segment": "Free", "value": 67900, pct: .03982171},
    {"year": 2008, "segment": "Renters", "value": 506700, pct: .29934424},
    {"year": 2008, "segment": "Owned", "value": 1117400, pct: .66012879},
    {"year": 2008, "segment": "Free", "value": 68700, pct: .04058605},
]

1692700



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
      margin={{ left: 60, top: 10, bottom: 80, right: 150 }}
      oPadding={0}
      oLabel={d => <text transform="rotate(45)">{d}</text>}
      legend={{
        legendGroups: [
          {
            styleFn: d => ({ fill: d.color, stroke: "white" }),
            items: [
              { label: "Free", color: "#b3331d" },
              { label: "Renters", color: "#00a2ce" },
              { label: "Owned", color: "#ffbf00" },

            ]
          }
        ]
      }}

      />
      </div>
    );
  }
}
