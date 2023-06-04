import { useState } from "react"
import { ComposableMap, Geographies, Geography } from "react-simple-maps"
import Tooltip from "react-tooltip"

const geoUrl = "/data/maps-data.json"

const MapChart = ({ setTooltipContent }: { setTooltipContent: (val: string) => void }) => {
  return (
    <ComposableMap data-tip="" height={200} projectionConfig={{ scale: 80 }}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              onMouseEnter={() => setTooltipContent(`${geo.properties.name}`)}
              onMouseLeave={() => {
                setTooltipContent("")
              }}
              style={{
                default: {
                  fill: "#d3d8df",
                  outline: "none",
                },
                hover: {
                  fill: "#8899ff",
                  outline: "none",
                },
                pressed: {
                  fill: "#8899ff",
                  outline: "none",
                },
              }}
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  )
}

function MapChartWithTooltip() {
  const [content, setContent] = useState("")
  return (
    <div>
      <MapChart setTooltipContent={setContent} />
      {/* @ts-ignore: libs types are wrong */}
      <Tooltip>{content}</Tooltip>
    </div>
  )
}

export { MapChartWithTooltip }
