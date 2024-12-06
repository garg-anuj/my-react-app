import { useState } from "react";

const ToDo = () => {
  const [data, setData] = useState({ title: "", description: "" });
  const [listItem, setListItem] = useState([]);
  const [isEditStatusOn, setIsEditStatusOn] = useState(false);
  const [initialId, setInitialId] = useState(null);

  const handleInput = (e) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = () => {
    if (isEditStatusOn) {
      listItem[initialId] = data;
      setListItem([...listItem]);
    } else {
      setListItem([
        ...listItem,
        { title: data.title, description: data.description },
      ]);
    }
  };

  const handleEditBtn = (id, data) => {
    setIsEditStatusOn(true);
    setInitialId(id);
    setData(data);
  };

  console.log(listItem);
  return (
    <>
      <div>
        <input
          name="title"
          placeholder="title"
          value={data?.title}
          onChange={handleInput}
        />

        <input
          name="description"
          placeholder="description"
          value={data?.description}
          onChange={handleInput}
        />

        <button onClick={handleSubmit}>Submit</button>
        {/* <button onClick={()}>submitNewChange</button> */}

        {listItem?.map((data, idx) => {
          return (
            <div key={idx}>
              {data?.title} || {data?.description}
              <span onClick={() => handleEditBtn(idx, data)}>Edit</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ToDo;
