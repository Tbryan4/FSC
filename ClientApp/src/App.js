import {useEffect, useState} from "react";
import {Container} from "reactstrap";

const App = () => {
    const [customers, setCustomers] = useState([])


    useEffect(() => {
        fetch("api/Customer/GetCustomers")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json().then(responseJson => {
                    console.log('Response from server:', responseJson);
                    return responseJson;
                });
            })
            .then(responseJson => {
                setCustomers(responseJson);
            })
            .catch(error => {
                // Log the full response for debugging purposes
                console.error('Error fetching data:', error);
                // Handle error state or display error message to the user
            });
    }, []);



    return (
        <div className="Container">
            <h1>Customers</h1>
            <div className="row">
                <div className="col-sm-12">
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Title</th>
                        </tr>
                        </thead>
                        <tbody>
                        {customers.map((item, index) => (
                            <tr key={index}>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.title}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

}

export default App
