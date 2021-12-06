import React, {Component} from "react";
import {withRouter} from 'react-router-dom';
import axios from '../../utils/request';

class Student extends Component {
    state = {
        classList: [],
        classId:''
    };

    componentDidMount() {
        this.getClass()
    }
    setClassId=e=>{
        this.setState({classId: e.target.value})
    }
    getClass = async () => {
        const {data:res} = await this.props.classFn.getClassAc();
        if (res.status === 0) {
            this.setState({classList: res.data,classId:res.data[0].id})
        }
    }

    render() {
        return (<>
                <div className="form-group row " style={{paddingTop: '30px', marginLeft: '20px'}}>
                    <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Choose the Class you are
                        in:</label>
                    <div className="col-sm-8">
                        <select className="form-control col-sm-6"  value={this.state.classId}  onChange={this.setClassId}>
                            {
                                this.state.classList.map(item => {
                                    return <option key={item.id} value={item.id} >{item.classname}</option>
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className="form-group row d-flex flex-row-reverse">
                    <button type="button" className="btn btn-primary" onClick={e=>this.props.history.push("/survey?classId="+this.state.classId)}>Take the Quiz</button>
                </div>

            </>

        );
    }
}

export default withRouter(Student);
