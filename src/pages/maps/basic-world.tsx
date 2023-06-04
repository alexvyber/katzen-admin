import { ComposableMap, Geographies, Geography } from "react-simple-maps"

const geoUrl = "/data/maps-data.json"

export const BasicWorldMap = () => {
  return (
    <ComposableMap
      height={200}
      projectionConfig={{
        scale: 100,
      }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              className="fill-slate-100 stroke-slate-300"
              strokeWidth={0.5}
              key={geo.rsmKey}
              geography={geo}
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  )
}
