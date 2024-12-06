import React, { useEffect, useState } from "react";

export const CkEditor = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "http://localhost:1337/api/blogs?populate=*"
      );
      const data = await response.json();
      setData(data?.data[1]?.briefDescription);
    }

    getData();
  }, []);
  return (
    <div>
      {data}

      <div
        contentEditable="true"
        dangerouslySetInnerHTML={{ __html: data }}
      ></div>
    </div>
  );
};
