import classes from "./Notification.module.css"
const Notification = (props) => {
    let specialCases = ''
    if (props.status === "error") {
        specialCases += classes.error
    }
    if (props.status === "success") {
        specialCases += classes.success
    }
    const cssClasses = `${classes.notification} ${specialCases}`;
    return (
        <section className={cssClasses}>
            <h2>{props.title}</h2>
            <p>{props.message}</p>
        </section>
    )
}
export default Notification