import React from "react";

const AllSerise = ({ getUserData }) => {
  console.log("getUserData", getUserData);
  return (
    <>
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {getUserData === "" || getUserData.length === 0
            ? ""
            : getUserData.series.map((item, index) => (
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
              ))}
        </tbody>
      </table>
    </>
  );
};

export default AllSerise;
