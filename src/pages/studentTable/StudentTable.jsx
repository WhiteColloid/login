import React, {Component} from "react";
import {withRouter} from 'react-router-dom';
import axios from '../../utils/request';
import shortid from "shortid";

class Student extends Component {
    state = {
        studentList:[]
    };
    componentDidMount() {
        this.getTop();
    }

    getTop = async () => {
        const {data:res} = await this.props.classFn.getTopAc();
        if (res.status === 0) {
            this.setState({studentList: res.data})
        }else if(res.status === 2){
            this.props.flashFn.addFlashAc({
                type: "alert-danger",
                text: "There are no students in the class",
                id: shortid.generate(),
            });
        } else {
            this.props.flashFn.addFlashAc({
                type: "alert-danger",
                text: "Select Failed",
                id: shortid.generate(),
            });
        }
    }
    render() {
        return (<>
                <h1 className="mt-3 mb-4" >Here are your best-matching study partners! (The first row is your score)</h1>
                <table className="table mb-5">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">Email</th>
                        <th scope="col">V</th>
                        <th scope="col">A</th>
                        <th scope="col">R</th>
                        <th scope="col">K</th>
                        <th scope="col">ClassName</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.studentList.map(item=>{
                            return <tr>
                                <td>{item.email}</td>
                                <td>{item.V}</td>
                                <td>{item.A}</td>
                                <td>{item.R}</td>
                                <td>{item.K}</td>
                                <td>{item.classname}</td>
                            </tr>
                        })
                    }
                    </tbody>
                </table>

                <p className="lead mt-1">
                    <h2 className="mb-1">*The V A R K value in the form represents different study styles</h2>
                    <h5 className="mt-1">V = Visual: A visual learning style requires that you see what you want to learn</h5>
                    <p>Suggested studying strategies:</p>
                    <ul >
                        <li>Draw visuals of problems</li>
                        <li>Create movies in your mind with information that you read or hear</li>
                        <li>Expand the chapter mapping at the beginning of each chapter</li>
                    </ul>


                    <h5 className="mt-1">A = Auditory: You would rather listen than read</h5>
                    <p>Suggested studying strategies:</p>
                    <ul >
                        <li>Try reading some textbook information out loud</li>
                        <li>Attend every lecture. Your learning style depends on this.</li>
                        <li>Review text material out loud</li>
                    </ul>
                    
                    <h5 className="mt-1">R = Reading: You comprehend and remember what you read, and you often enjoy writing.</h5>
                    <p>Suggested studying strategies:</p>
                    <ul >
                        <li>Use colored pens and highlighters to focus in on key ideas</li>
                        <li>Write out key concepts and ideas</li>
                        <li>Read your notes (silently) again and again</li>
                    </ul>

                    <h5 className="mt-1">K = Kinesthetic: This learning style requires that you manipulate or touch material to learn.</h5>
                    <p>Suggested studying strategies:</p>
                    <ul >
                        <li>Make models</li>
                        <li>Prepare/use index cards</li>
                        <li>Tap your foot or pencil to increase attention</li>
                    </ul>

                </p>
            </>

        );
    }
}

export default withRouter(Student);
