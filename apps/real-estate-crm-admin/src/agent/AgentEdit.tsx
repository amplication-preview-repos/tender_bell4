import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { AgentAssignmentTitle } from "../agentAssignment/AgentAssignmentTitle";

export const AgentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="agentAssignments"
          reference="AgentAssignment"
        >
          <SelectArrayInput
            optionText={AgentAssignmentTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="name" source="name" />
        <NumberInput step={1} label="phoneNumber" source="phoneNumber" />
      </SimpleForm>
    </Edit>
  );
};
