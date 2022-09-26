/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEmployee = /* GraphQL */ `
  query GetEmployee($EmployeeId: String!) {
    getEmployee(EmployeeId: $EmployeeId) {
      EmployeeId
      ReportingTo
      Address
      Role
      ProjectId
      Name
    }
  }
`;
export const listEmployees = /* GraphQL */ `
  query ListEmployees(
    $filter: TableEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        EmployeeId
        ReportingTo
        Address
        Role
        ProjectId
        Name
      }
      nextToken
    }
  }
`;
export const queryEmployeesByReportingToEmployeeIdIndex = /* GraphQL */ `
  query QueryEmployeesByReportingToEmployeeIdIndex(
    $ReportingTo: String!
    $first: Int
    $after: String
  ) {
    queryEmployeesByReportingToEmployeeIdIndex(
      ReportingTo: $ReportingTo
      first: $first
      after: $after
    ) {
      items {
        EmployeeId
        ReportingTo
        Address
        Role
        ProjectId
        Name
      }
      nextToken
    }
  }
`;
