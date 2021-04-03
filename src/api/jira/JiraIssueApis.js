import axios from "axios";
import {JiraIssueEndPoints} from "../../enums/api/jira/JiraIssueEndPoints";

export const getIssue = (id) => {
    return axios
        .get(JiraIssueEndPoints.GET_ISSUE.replace("{id}", id))
        .then(result => result.data)
        .catch(err => console.log(err));
}