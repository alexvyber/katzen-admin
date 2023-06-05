import { Annotation, ComposableMap, Geographies, Geography } from "react-simple-maps"

const geoUrl = "/data/maps-data.json"

export const BasicAnnotation = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      height={200}
      projectionConfig={{
        rotate: [-20.0, -45.0, 0],
        scale: 400,
      }}
    >
      <Geographies geography={geoUrl} className="fill-gray-100 stroke-gray-300" strokeWidth={0.5}>
        {({ geographies }) =>
          geographies.map((geo) => <Geography key={geo.rsmKey} geography={geo} />)
        }
      </Geographies>
      <Annotation
        subject={[12.3522, 42.8566]}
        dx={-80}
        dy={-30}
        connectorProps={{
          stroke: "#8899ff",
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        <text
          x="-8"
          textAnchor="end"
          alignmentBaseline="middle"
          fill="#8899ff"
          className="font-bold"
        >
          Some GEO
        </text>
      </Annotation>
    </ComposableMap>
  )
}
