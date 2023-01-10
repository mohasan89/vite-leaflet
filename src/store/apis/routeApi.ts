export type Point = { lat: number; lng: number };

const loadRoute = async (start: Point, end: Point) =>
  fetch(
    `https://router.project-osrm.org/route/v1/car/${start.lng},${start.lat};${end.lng},${end.lat}?geometries=geojson`,
    { headers: { "Content-type": "application/json" } }
  )
    .then((res) => res.json())
    .then((data) => ({
      response: data?.routes?.[0]?.geometry?.coordinates || [],
    }))
    .catch((err) => ({ err }));

export default loadRoute;
