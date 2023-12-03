import { Box, useTheme } from '@mui/material';
import { ResponsiveBar } from '@nivo/bar';
import React from 'react'
const data = [
        {
          year: 2019,
          Maroc:2500 ,
          France: 4000,
          Jazir: 1700,
        },
      
        {
          year: 2020,
          Maroc: 2300,
          France:5000,
          Jazir: 1800,
        },
      
        {
          year: 2021,
          Maroc: 2100,
          France: 6000,
          Jazir: 1400,
        },
      
        {
          year: 2022,
          Maroc: 1900,
          France: 6300,
          Jazir: 1700,
        },
      
        {
          year: 2023,
          Maroc: 1900,
          France: 6400,
          Jazir: 1400,
        },
      ];
function Barrow3() {
    const themeex= useTheme()
  return (
    <Box sx={{height:"320px"}}> <ResponsiveBar
    data={data}
    keys={[
        'Maroc',
        'France',
        'Jazir',
        

    ]}
theme={{

"text": {
    "fontSize": 11,
    "fill": themeex.palette.text.primary,
    "outlineWidth": 0,
    "outlineColor": "transparent"
},
"axis": {
    "domain": {
        "line": {
            "stroke": themeex.palette.divider,
            "strokeWidth": 1
        }
    },
    "legend": {
        "text": {
            "fontSize": 12,
            "fill": themeex.palette.text.primary,
            "outlineWidth": 0,
            "outlineColor": "transparent"
        }
    },
    
    "ticks": {
        "line": {
            "stroke": themeex.palette.divider,
            "strokeWidth": 1
        },
        "text": {
            "fontSize": 11,
            "fill": themeex.palette.text.primary,
            "outlineWidth": 0,
            "outlineColor": "transparent"
        }
    }
},
"grid": {
    "line": {
        "stroke":themeex.palette.divider,
        "strokeWidth": 1
    }
},
"legends": {
    "title": {
        "text": {
            "fontSize": 11,
            "fill": themeex.palette.text.primary,
            "outlineWidth": 0,
            "outlineColor": "transparent"
        }
    },
    "text": {
        "fontSize": 11,
        "fill": themeex.palette.text.primary,
        "outlineWidth": 0,
        "outlineColor": "transparent"
    },
    "ticks": {
        "line": {},
        "text": {
            "fontSize": 10,
            "fill": themeex.palette.text.primary,
            "outlineWidth": 0,
            "outlineColor": "transparent"
        }
    }
},
"annotations": {
    "text": {
        "fontSize": 13,
        "fill": themeex.palette.text.primary,
        "outlineWidth": 2,
        "outlineColor": "#ffffff",
        "outlineOpacity": 1
    },
    "link": {
        "stroke": "#000000",
        "strokeWidth": 1,
        "outlineWidth": 2,
        "outlineColor": "#ffffff",
        "outlineOpacity": 1
    },
    "outline": {
        "stroke": "#000000",
        "strokeWidth": 2,
        "outlineWidth": 2,
        "outlineColor": "#ffffff",
        "outlineOpacity": 1
    },
    "symbol": {
        "fill": "#000000",
        "outlineWidth": 2,
        "outlineColor": "#ffffff",
        "outlineOpacity": 1
    }
},
"tooltip": {
    "container": {
        "background": themeex.palette.background.default,
        "fontSize": 12
    },
    "basic": {},
    "chip": {},
    "table": {},
    "tableCell": {},
    "tableCellValue": {}
}
}}




    indexBy="year"
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.3}
    valueScale={{ type: 'linear' }}
    indexScale={{ type: 'band', round: true }}
    colors={{ scheme: 'paired' }}
    defs={[
        {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: '#38bcb2',
            size: 4,
            padding: 1,
            stagger: true
        },
        {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: '#eed312',
            rotation: -45,
            lineWidth: 6,
            spacing: 10
        }
    ]}
    fill={[
        {
            match: {
                id: 'fries'
            },
            id: 'dots'
        },
        {
            match: {
                id: 'sandwich'
            },
            id: 'lines'
        }
    ]}
    borderColor={{
        from: 'color',
        modifiers: [
            [
                'darker',
                1.6
            ]
        ]
    }}
    // axisTop={null}
    // axisRight={null}
    // axisBottom={{
    //     tickSize: 5,
    //     tickPadding: 5,
    //     tickRotation: 0,
    //     legend: 'Year',
    //     legendPosition: 'middle',
    //     legendOffset: 40
    // }}
    // axisLeft={{
    //     tickSize: 5,
    //     tickPadding: 5,
    //     tickRotation: 0,
    //     legend: 'salary/month',
    //     legendPosition: 'middle',
    //     legendOffset:-52
    // }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{
        from: 'color',
        modifiers: [
            [
                'darker',
                1.6
            ]
        ]
    }}
    legends={[
        {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 130,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
                {
                    on: 'hover',
                    style: {
                        itemOpacity: 1
                    }
                }
            ]
        }
    ]}
    role="application"
    ariaLabel="Nivo bar chart demo"
    barAriaLabel={e=>e.id+": "+e.formattedValue+" in country: "+e.indexValue}
/></Box>
  )
}

export default Barrow3