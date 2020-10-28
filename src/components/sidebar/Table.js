import React, {useEffect, useState} from 'react';
import {getData} from "../../api";
import {TODAY} from "../Map/constants";

const Table = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // replace it with the react-query

  useEffect(() => {
    setIsLoading(true);
    getData(TODAY()).then(data => {
      setData(data);
      setIsLoading(false)
    });
  }, []);
  return isLoading ? 'Loading ...' : (
    <table>
      <tr>
        <th>Область</th>
        <th>Виявлено</th>
        <th>Померло</th>
        <th>Одужало</th>
        <th>Хворіє</th>
        <th>Підозри</th>
      </tr>
      {
        data.map(item => (
          <tr>
            <td>{item.label.uk}</td>
            <td>{item.confirmed}</td>
            <td>{item.deaths}</td>
            <td>{item.recovered}</td>
            <td>{item.existing}</td>
            <td>{item.suspicion}</td>
          </tr>
        ))
      }
    </table>
  )
};

export default Table;
