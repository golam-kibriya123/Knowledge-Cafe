import React from 'react';
import "./Question.css"
const Question = () => {
    return (
        <div className='container'>
            <div className="question">
                <h1>1#Props vs state</h1>
                <table className='styled-table'>
                    <thead>
                        <tr>
                            <th>Props</th>
                            <th>State</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr className='active-row'>
                            <td>Props are read-only.</td>
                            <td>State changes can be asynchronous.</td>

                        </tr>
                        <tr>
                            <td>Props are immutable.</td>
                            <td>State is mutable.</td>

                        </tr>
                        <tr>
                            <td>Props allow us to pass data from one component to other components as an argument.</td>
                            <td>State holds information about the components.</td>

                        </tr>
                        <tr>
                            <td>Props can be accessed by the child component.</td>
                            <td>State cannot be accessed by child components.</td>

                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="question">
                <h1>2#How does useState work?</h1>
                <table className='styled-table'>
                    <thead>
                        <tr>
                            <th>Working system of use state</th>

                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>useState hook helps us to have state variables in function components. Thus the function components are not stateless anymore. Due to this reason, React suggests calling them “function components”. useState is a function that accepts the initial state as an argument and returns a state value and a function to update this value. This ensures that the React preserves the state between re-renders. The useState hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="question">
                <h1>3#Purpose of useEffect other than fetching data.</h1>
                <table className='styled-table'>
                    <thead>
                        <tr>
                            <th>Use purposes od useEffect</th>

                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>useEffect hook in React is commonly used for fetching data, but it can also be used for a variety of other purposes.
                                useEffect is a versatile hook that can be used for a variety of purposes beyond fetching data. It allows us to perform side effects, manage the state of a component, and create dynamic and interactive user interfaces.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="question">
                <h1>4#How Does React work??</h1>
                <table className='styled-table'>
                    <thead>
                        <tr>
                            <th>Working system of React</th>

                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>React is a JavaScript library that allows us to build user interfaces using a component-based approach.
                                The JSX code is compiled into plain JavaScript by the Babel compiler. then loaded into the browser.
                                React works by creating a virtual representation of the DOM, managing the state and behavior of components, and efficiently updating the actual DOM when necessary. This approach allows us to build complex and interactive user interfaces that are easy to maintain and update
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Question;