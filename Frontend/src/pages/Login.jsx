<form
  onSubmit={(e) => {
    e.preventDefault();
    alert("Working");
  }}
>
<button
  type="button"
  style={{
    width: "200px",
    height: "50px",
    background: "red",
    color: "white",
    cursor: "pointer"
  }}
  onClick={() => alert("Working")}
>
  Test Button
</button>
>
  Login
</button>
</form>

  <div className="input-box">
    ...
  </div>

  <div className="input-box">
    ...
  </div>

  <div className="row">

    <label>
      <input type="checkbox" />
      Remember me
    </label>

    <Link to="/">
      Forgot Password?
    </Link>

  </div>

  <button
    type="submit"
    className="login-btn2"
  >
    Login
  </button>

</form>