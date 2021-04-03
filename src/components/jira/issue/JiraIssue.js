import React from 'react';
import {getIssue} from "../../../api/jira/JiraIssueApis";

class JiraIssue extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            issue: undefined
        }
    }

    componentDidMount() {
        getIssue(this.props.id)
            .then(result => this.setState({issue: result}));
    }

    render() {
        return (
            <div>
                {this.state.issue}
            </div>
        )
    }
}

export default JiraIssue;