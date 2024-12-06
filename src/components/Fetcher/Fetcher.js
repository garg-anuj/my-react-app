import axios from "axios";
import { useEffect, useState } from "react";

const Fetcher = () => {
  // const {name,emails,foodnames,addresses,contacts} = props;
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.error("Error");
      });
  }, []);

  console.log("---------", data);
  if (!data) return null;
  return (
    <>
      <Table data={data.slice(0, 10)} />
    </>
  );
};

export default Fetcher;

const Table = ({ data = [] }) => {
  return (
    <>
      <table>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
        {data.map((item, idx) => {
          const { id, title, body } = item || {};
          return (
            <tr key={idx}>
              <td>{id}</td>
              <td>{title}</td>
              <td>{body}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
};
