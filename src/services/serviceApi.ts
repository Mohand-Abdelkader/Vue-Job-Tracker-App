const URL = "https://vue-http-project-6db9a-default-rtdb.firebaseio.com";

export async function createApplication(formData: Object) {
  try {
    const response = await fetch(`${URL}/application.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Failed to create the Application");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating the Application:", error);
    throw error;
  }
}

export async function getApplications() {
  try {
    const response = await fetch(`${URL}/application.json`);

    if (!response.ok) throw new Error("failed to fetch data");

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating the Application:", error);
    throw error;
  }
}
