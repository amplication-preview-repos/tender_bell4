import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AgentAssignmentUpdateInput = {
  agent?: AgentWhereUniqueInput | null;
  property?: PropertyWhereUniqueInput | null;
};
