import React, { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";

import supabase from "../../api/supabase";

export default function index() {
  const [findUID, setFindUID] = useState("");
  const [entrancePerson, setEntrancePerson] = useState();

  const randomName = faker.person.fullName(); // Rowan Nikolaus
  const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz

  async function updateData() {
    const { error } = await supabase
      .from("DemoApp")
      .update({
        name: randomName,
        email: randomEmail,
        absent: true,
      })
      .eq("QR_code_ID", findUID);

    console.log(error.message);
  }

  // useEffect(() => {
  //   async function getData() {
  //     const { data, error } = await supabase
  //       .from("DemoApp")
  //       .select()
  //       .eq("QR_code_ID", findUID); // Correct

  //     setEntrancePerson(data);

  //     console.log(error);
  //   }
  //   getData();
  // }, [updateData]);

  // console.log({ entrancePerson });

  return (
    <div>
      <form onSubmit={updateData}>
        <label> UID</label>
        <input
          className="border-2 border-black"
          type="findUID"
          id="findUID"
          name="findUID"
          value={findUID}
          onChange={(e) => setFindUID(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>

      {/* <div>
        {entrancePerson.map((person) => {
          <ul key={person.id}>
            <li>{person.name}</li>
            <li>{person.email}</li>
            <li>{person.QR_code_ID}</li>
          </ul>;
        })}
      </div> */}
    </div>
  );
}
