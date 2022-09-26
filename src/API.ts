/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateEmployeeInput = {
  EmployeeId: string,
  ReportingTo?: string | null,
  Address?: string | null,
  Role?: string | null,
  ProjectId?: string | null,
  Name?: string | null,
};

export type UpdateEmployeeInput = {
  EmployeeId: string,
  ReportingTo?: string | null,
  Address?: string | null,
  Role?: string | null,
  ProjectId?: string | null,
  Name?: string | null,
};

export type DeleteEmployeeInput = {
  EmployeeId: string,
};

export type TableEmployeeFilterInput = {
  EmployeeId?: TableStringFilterInput | null,
  ReportingTo?: TableStringFilterInput | null,
  Role?: TableStringFilterInput | null,
  ProjectId?: TableStringFilterInput | null,
  Name?: TableStringFilterInput | null,
};

export type TableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type CreateEmployeeMutationVariables = {
  input: CreateEmployeeInput,
};

export type CreateEmployeeMutation = {
  createEmployee:  {
    __typename: "Employee",
    EmployeeId: string,
    ReportingTo: string | null,
    Address: string | null,
    Role: string | null,
    ProjectId: string | null,
    Name: string | null,
  } | null,
};

export type UpdateEmployeeMutationVariables = {
  input: UpdateEmployeeInput,
};

export type UpdateEmployeeMutation = {
  updateEmployee:  {
    __typename: "Employee",
    EmployeeId: string,
    ReportingTo: string | null,
    Address: string | null,
    Role: string | null,
    ProjectId: string | null,
    Name: string | null,
  } | null,
};

export type DeleteEmployeeMutationVariables = {
  input: DeleteEmployeeInput,
};

export type DeleteEmployeeMutation = {
  deleteEmployee:  {
    __typename: "Employee",
    EmployeeId: string,
    ReportingTo: string | null,
    Address: string | null,
    Role: string | null,
    ProjectId: string | null,
    Name: string | null,
  } | null,
};

export type GetEmployeeQueryVariables = {
  EmployeeId: string,
};

export type GetEmployeeQuery = {
  getEmployee:  {
    __typename: "Employee",
    EmployeeId: string,
    ReportingTo: string | null,
    Address: string | null,
    Role: string | null,
    ProjectId: string | null,
    Name: string | null,
  } | null,
};

export type ListEmployeesQueryVariables = {
  filter?: TableEmployeeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEmployeesQuery = {
  listEmployees:  {
    __typename: "EmployeeConnection",
    items:  Array< {
      __typename: "Employee",
      EmployeeId: string,
      ReportingTo: string | null,
      Address: string | null,
      Role: string | null,
      ProjectId: string | null,
      Name: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type QueryEmployeesByReportingToEmployeeIdIndexQueryVariables = {
  ReportingTo: string,
  first?: number | null,
  after?: string | null,
};

export type QueryEmployeesByReportingToEmployeeIdIndexQuery = {
  queryEmployeesByReportingToEmployeeIdIndex:  {
    __typename: "EmployeeConnection",
    items:  Array< {
      __typename: "Employee",
      EmployeeId: string,
      ReportingTo: string | null,
      Address: string | null,
      Role: string | null,
      ProjectId: string | null,
      Name: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateEmployeeSubscriptionVariables = {
  EmployeeId?: string | null,
  ReportingTo?: string | null,
  Address?: string | null,
  Role?: string | null,
  ProjectId?: string | null,
};

export type OnCreateEmployeeSubscription = {
  onCreateEmployee:  {
    __typename: "Employee",
    EmployeeId: string,
    ReportingTo: string | null,
    Address: string | null,
    Role: string | null,
    ProjectId: string | null,
    Name: string | null,
  } | null,
};

export type OnUpdateEmployeeSubscriptionVariables = {
  EmployeeId?: string | null,
  ReportingTo?: string | null,
  Address?: string | null,
  Role?: string | null,
  ProjectId?: string | null,
};

export type OnUpdateEmployeeSubscription = {
  onUpdateEmployee:  {
    __typename: "Employee",
    EmployeeId: string,
    ReportingTo: string | null,
    Address: string | null,
    Role: string | null,
    ProjectId: string | null,
    Name: string | null,
  } | null,
};

export type OnDeleteEmployeeSubscriptionVariables = {
  EmployeeId?: string | null,
  ReportingTo?: string | null,
  Address?: string | null,
  Role?: string | null,
  ProjectId?: string | null,
};

export type OnDeleteEmployeeSubscription = {
  onDeleteEmployee:  {
    __typename: "Employee",
    EmployeeId: string,
    ReportingTo: string | null,
    Address: string | null,
    Role: string | null,
    ProjectId: string | null,
    Name: string | null,
  } | null,
};
