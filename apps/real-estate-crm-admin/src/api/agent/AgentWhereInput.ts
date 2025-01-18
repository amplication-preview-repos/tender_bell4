import { AgentAssignmentListRelationFilter } from "../agentAssignment/AgentAssignmentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type AgentWhereInput = {
  agentAssignments?: AgentAssignmentListRelationFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  phoneNumber?: IntNullableFilter;
};
