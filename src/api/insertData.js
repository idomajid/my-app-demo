import supabase from "./supabase";

export async function insertData() {
  // Data to insert
  const dataToInsert = {
    name: "",
    column2: "Value2",
    // Add more columns and values as needed
  };

  // Perform the insert operation
  const { data, error } = await supabase
    .from("your_table_name")
    .insert([dataToInsert]);

  if (error) {
    console.error("Error inserting data:", error.message);
    return;
  }

  console.log("Data inserted successfully:", data);
}
