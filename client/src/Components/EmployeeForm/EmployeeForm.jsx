const EmployeeForm = ({ onSave, disabled, employee, equipment, onCancel, favouriteBrands }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const entries = [...formData.entries()];

    const employee = entries.reduce((acc, entry) => {
      const [k, v] = entry;
      acc[k] = v;
      return acc;
    }, {});

    return onSave(employee);
  };

  return (
    <form className="EmployeeForm" onSubmit={onSubmit}>
      {employee && (
        <input type="hidden" name="_id" defaultValue={employee._id} />
      )}

      <div className="control">
        <label htmlFor="name">Name:</label>
        <input
          defaultValue={employee ? employee.name : null}
          name="name"
          id="name"
        />
      </div>

      <div className="control">
        <label htmlFor="level">Level:</label>
        <input
          defaultValue={employee ? employee.level : null}
          name="level"
          id="level"
        />
      </div>

      <div className="control">
        <label htmlFor="position">Position:</label>
        <input
          defaultValue={employee ? employee.position : null}
          name="position"
          id="position"
        />
      </div>

      <label>
            Chose equipment:
            <select name="equipment" id="equipment">
                <option value="">--Please choose an option--</option>
                {equipment?.map((item) => (
                <option value={item.name} key={item._id}>{item.name}</option>
                ))}
            </select>
        </label>

        <label>
            Chose Favourite Brand:
            <select name="brand" id="brand">
                <option value="">--Please choose an option--</option>
                {favouriteBrands?.map((item) => (
                <option value={item._id} key={item._id}>{item.name}</option>
                ))}
            </select>
        </label>

      <div className="buttons">
        <button type="submit" disabled={disabled}>
          {employee ? "Update Employee" : "Create Employee"}
        </button>

        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EmployeeForm;
