import React from "react";

export default function LocationTitle({data}) {
  return <span className="text-purple-400">{data.location.name}</span>;
}
