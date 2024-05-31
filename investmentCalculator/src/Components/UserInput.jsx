export default function UserInput({ userInput, onChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Inital Investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) => {
              onChange("initialInvestment", event.target.value);
            }}
          />
        </p>
        <p>
          <label>Actual investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) => {
              onChange("actualInvestment", event.target.value);
            }}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) => {
              onChange("expectedReturn", event.target.value);
            }}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => {
              onChange("duration", event.target.value);
            }}
          />
        </p>
      </div>
    </section>
  );
}
