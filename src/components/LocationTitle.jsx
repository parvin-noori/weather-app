import React from "react";
{
}
export default function LocationTitle({ data }) {
  return (
    <>
      <span className="text-purple-400">{data.location.name}</span>
      {data.current.is_day === 0 ? <span>night</span> : <span>day</span>}
    </>
  );
}
