import React from 'react';
import PropTypes from 'prop-types';
/**
 * 属性校验
 * 
 */

 export class Person extends React.Component{
    static propTypes = {
        age:PropTypes.number.isRequired,
        gender:PropTypes.oneOf(['male','female']).isRequired,
        hobby:PropTypes.arrayOf(PropTypes.string).isRequired
    }

    render(){
        return (
            <table>
                <thead>
                    <tr>
                        <td>age</td>
                        <td>gender</td>
                        <td>hobby</td>
                        <td>position</td>
                        <td>friends</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.props.age}</td>
                        <td>{this.props.gender}</td>
                        <td>{this.props.hobby}</td>
                    </tr>
                </tbody>
            </table>
        )
    }
 }




