function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Protected Dashboard</h1>

      <br />

      <p>
        Welcome! You have successfully logged in using JWT Authentication.
      </p>

      <br />

      <h3>Features Completed</h3>

      <p>✔ User Registration</p>
      <p>✔ User Login</p>
      <p>✔ Password Hashing (bcrypt)</p>
      <p>✔ JWT Authentication</p>
      <p>✔ Protected Routes</p>
      <p>✔ Protected APIs</p>
    </div>
  );
}

export default Dashboard;