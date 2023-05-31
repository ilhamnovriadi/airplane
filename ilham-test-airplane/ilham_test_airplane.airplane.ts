import airplane from "airplane";

export default airplane.task(
  {
    slug: "ilham_test_airplane",
    name: "Ilham Test Airplane",
    schedules: {
      ilham_test_airplane: {
        name: "Every 30 minutes UTC",
        cron: "*/30 * * * *",
      },
      ilham_test_airplane_2: {
        name: "Every 10 minutes UTC",
        cron: "*/10 * * * *",
      },
    },
  },
  async () => {
    const data = [
      { id: 1, name: "Gabriel Davis", role: "Dentist" },
      { id: 2, name: "Ilham Novriadi", role: "Sales" },
      { id: 3, name: "Andri Agusta", role: "Sales" },
    ];

    // Sort the data in ascending order by name.
    data.sort((u1, u2) => {
      return u1.name.localeCompare(u2.name);
    });

    // You can return data to show output to users.
    // Output documentation: https://docs.airplane.dev/tasks/output
    return data;
  }
);
