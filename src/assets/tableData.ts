export type RowType = {
  id: string;
  start: { lat: number; lng: number };
  end: { lat: number; lng: number };
};

const data: RowType[] = [
  {
    id: "№1",
    start: { lat: 59.84660399, lng: 30.29496392 },
    end: { lat: 59.82934196, lng: 30.41705607 },
  },
  {
    id: "№2",
    start: { lat: 59.82934196, lng: 30.4243701 },
    end: { lat: 59.82761295, lng: 30.41705607 },
  },
  {
    id: "№3",
    start: { lat: 59.83567701, lng: 30.38064206 },
    end: { lat: 59.84660399, lng: 30.29496392 },
  },
  {
    id: "№4",
    start: { lat: 59.84660399, lng: 30.29496392 },
    end: { lat: 59.82761295, lng: 30.41705607 },
  },
  {
    id: "№5",
    start: { lat: 59.83567701, lng: 30.38064206 },
    end: { lat: 59.84660399, lng: 30.29496392 },
  },
];
export default data;
