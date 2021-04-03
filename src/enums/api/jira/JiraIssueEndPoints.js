const dotenv = require('dotenv');
dotenv.config();

const JIRA_HOST = process.env.JIRA_HOST + "/rest/api/";

export const JiraIssueEndPoints = {
    GET_ISSUE: JIRA_HOST + "latest/issue/{id}"
}