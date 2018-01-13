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
    {"year": 2007, "segment": "Renters", "value": 494300, pct: .29556326},
    {"year": 2007, "segment": "Owned", "value": 1109000, pct: .66311887},
    {"year": 2007, "segment": "Free", "value": 69100, pct: .04131787},
    {"year": 2006, "segment": "Renters", "value": 481200, pct: .29177783},
    {"year": 2006, "segment": "Owned", "value": 1098600, pct: .66614116},
    {"year": 2006, "segment": "Free", "value": 69400, pct: .04208101},
    {"year": 2005, "segment": "Renters", "value": 469700, pct: .28877959},
    {"year": 2005, "segment": "Owned", "value": 1088100, pct: .66898248},
    {"year": 2005, "segment": "Free", "value": 68700, pct: .04223793},
    {"year": 2004, "segment": "Renters", "value": 462900, pct: .28914985},
    {"year": 2004, "segment": "Owned", "value": 1074000, pct: .67087263},
    {"year": 2004, "segment": "Free", "value": 64000, pct: .03997751},
    {"year": 2003, "segment": "Renters", "value": 454500, pct: .28950889},
    {"year": 2003, "segment": "Owned", "value": 1056200, pct: .67278171},
    {"year": 2003, "segment": "Free", "value": 59200, pct: .03770941},
    {"year": 2002, "segment": "Renters", "value": 447200, pct: .28986259},
    {"year": 2002, "segment": "Owned", "value": 1040900, pct: .6746824},
    {"year": 2002, "segment": "Free", "value": 54600, pct: .0353902},
    {"year": 2001, "segment": "Renters", "value": 441700, pct: .29024839},
    {"year": 2001, "segment": "Owned", "value": 1029600, pct: .67656722},
    {"year": 2001, "segment": "Free", "value": 50400, pct: .03311868},
    {"year": 2000, "segment": "Renters", "value": 434900, pct: .28927764},
    {"year": 2000, "segment": "Owned", "value": 1021100, pct: .67919383},
    {"year": 2000, "segment": "Free", "value": 47400, pct: .03152854},
    {"year": 1999, "segment": "Renters", "value": 416800, pct: .28183109},
    {"year": 1999, "segment": "Owned", "value": 1013000, pct: .68496856},
    {"year": 1999, "segment": "Free", "value": 49200, pct: .03326797},
    {"year": 1998, "segment": "Renters", "value": 399600, pct: .27445055},
    {"year": 1998, "segment": "Owned", "value": 1005600, pct: .69065934},
    {"year": 1998, "segment": "Free", "value": 50900, pct: .03495879},
]

export default class Barchart extends Component {
  render() {
    return (
      <div>
      <h3>Renters vs Owned vs Free Dwellings - 1998-2017</h3>
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
              { label: "Owned", color: "#ffbf00" },
              { label: "Renters", color: "#00a2ce" },
            ]
          }
        ]
      }}

      />
      </div>
    );
  }
}
