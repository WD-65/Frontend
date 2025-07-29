const App = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const { name, age, color, button } = form.elements;
    const recommendCheckboxes = form.elements["recommend"];

    button.disabled = true;

    const handleError = (message) => {
      alert(message);
      button.disabled = false;
      return;
    };

    if (!name.value) return handleError("Name is required");

    if (name.value.trim().length < 2)
      return handleError("Name has to be at least 2 characters long");

    if (!age.value) return handleError("Age is required");

    if (age.value < 5 || age.value > 120)
      return handleError("Age has to be a number between 5 and 120");

    const surveyData = {
      name: name.value.trim(),
      age: age.value,
      color: color.value,
      recommend: recommendCheckboxes[0].checked,
    };

    console.log(surveyData);

    alert("Thanks for completing the survey!");

    form.reset();

    setTimeout(() => {
      button.disabled = false;
    }, 3000);
  };

  return (
    <div className="App">
      <h1>Mini Survey</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" name="name" />
        </label>
        <label>
          Age
          <input type="text" name="age" inputMode="numeric" pattern="[0-9]*" />
        </label>
        <label>
          Favorite Color
          <select name="color" defaultValue="">
            <option value="" disabled>
              Select…
            </option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </select>
        </label>
        <fieldset>
          <legend>Would you recommend our site?</legend>
          <label className="checkbox">
            <input type="checkbox" name="recommend" /> Yes
          </label>
          <label className="checkbox">
            <input type="checkbox" name="recommend" /> No
          </label>
        </fieldset>
        <button name="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
