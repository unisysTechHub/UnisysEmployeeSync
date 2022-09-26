/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEmployee = /* GraphQL */ `
  subscription OnCreateEmployee(
    $EmployeeId: String
    $ReportingTo: String
    $Address: AWSJSON
    $Role: String
    $ProjectId: String
  ) {
    onCreateEmployee(
      EmployeeId: $EmployeeId
      ReportingTo: $ReportingTo
      Address: $Address
      Role: $Role
      ProjectId: $ProjectId
    ) {
      EmployeeId
      ReportingTo
      Address
      Role
      ProjectId
      Name
    }
  }
`;
export const onUpdateEmployee = /* GraphQL */ `
  subscription OnUpdateEmployee(
    $EmployeeId: String
    $ReportingTo: String
    $Address: AWSJSON
    $Role: String
    $ProjectId: String
  ) {
    onUpdateEmployee(
      EmployeeId: $EmployeeId
      ReportingTo: $ReportingTo
      Address: $Address
      Role: $Role
      ProjectId: $ProjectId
    ) {
      EmployeeId
      ReportingTo
      Address
      Role
      ProjectId
      Name
    }
  }
`;
export const onDeleteEmployee = /* GraphQL */ `
  subscription OnDeleteEmployee(
    $EmployeeId: String
    $ReportingTo: String
    $Address: AWSJSON
    $Role: String
    $ProjectId: String
  ) {
    onDeleteEmployee(
      EmployeeId: $EmployeeId
      ReportingTo: $ReportingTo
      Address: $Address
      Role: $Role
      ProjectId: $ProjectId
    ) {
      EmployeeId
      ReportingTo
      Address
      Role
      ProjectId
      Name
    }
  }
`;
