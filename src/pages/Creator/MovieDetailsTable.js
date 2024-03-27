import React from "react";

const MovieDetailsTable = ({ getUserData }) => {
  return (
    <>
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Image</th>
            <th scope="col">Role</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td width="250">yufu</td>
            <td width="200">
              <img style={{ width: "15%" }} src="" />
            </td>
            <td width="150">55</td>
            <td width="100">
              <i class="fa-solid fa-trash"></i>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default MovieDetailsTable;
