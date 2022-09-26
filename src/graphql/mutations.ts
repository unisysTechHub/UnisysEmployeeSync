/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEmployee = /* GraphQL */ `
  mutation CreateEmployee($input: CreateEmployeeInput!) {
    createEmployee(input: $input) {
      EmployeeId
      ReportingTo
      Address
      Role
      ProjectId
      Name
    }
  }
`;
export const updateEmployee = /* GraphQL */ `
  mutation UpdateEmployee($input: UpdateEmployeeInput!) {
    updateEmployee(input: $input) {
      EmployeeId
      ReportingTo
      Address
      Role
      ProjectId
      Name
    }
  }
`;
export const deleteEmployee = /* GraphQL */ `
  mutation DeleteEmployee($input: DeleteEmployeeInput!) {
    deleteEmployee(input: $input) {
      EmployeeId
      ReportingTo
      Address
      Role
      ProjectId
      Name
    }
  }
`;
