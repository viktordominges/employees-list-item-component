import './employees-list-item.css'; // Import CSS styles for the EmployeesListItem component

// Define the EmployeesListItem functional component, accepting props from its parent component
const EmployeesListItem = (props) => {

    // Destructure the relevant properties from the props object
    const {name, salary, increase, rise, onDelete, onToggleProp, onSalaryChange} = props;

    // Initialize a base class for the list item
    let classNames = 'list-group-item d-flex justify-content-between';

    // Conditionally append 'increase' class if the 'increase' prop is true
    if (increase) {
        classNames += ' increase';
    }

    // Conditionally append 'like' class if the 'rise' prop is true
    if (rise) {
        classNames += ' like';
    }

    return (
        <li className={classNames}>
            <span 
                onClick={onToggleProp} // Call the onToggleProp function when the name is clicked
                className="list-group-item-label" 
                // Pass 'rise' as the data-toggle attribute
                data-toggle="rise">{name} 
            </span>
            <input 
                type="text" 
                className="list-group-item-input" 
                defaultValue={salary + '$'} // Set the default value of the input field to salary
                onBlur={(e) => onSalaryChange(parseFloat(e.target.value.replace('$', '')))} // Update the salary on blur event
            />
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm"
                    onClick={onToggleProp} // Call the onToggleProp function when the button is clicked
                    // eslint-disable-next-line react/jsx-no-comment-textnodes
                    // Pass 'increase' as the data-toggle attribute
                    data-toggle="increase">
                    <i className="fas fa-cookie"></i> 
                </button>

                <button type="button"
                        className="btn-trash btn-sm"
                        // Call the onDelete function when the button is clicked
                        onClick={onDelete}> 
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    );
}

export default EmployeesListItem; // Export the EmployeesListItem component as the default export
